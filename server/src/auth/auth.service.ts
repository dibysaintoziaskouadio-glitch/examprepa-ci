import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  HttpException,
  Injectable,
  ServiceUnavailableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { createHash, randomInt, timingSafeEqual } from 'crypto';
import { OAuth2Client } from 'google-auth-library';
import { normalizePhone } from '../common/phone';
import { PrismaService } from '../common/prisma.service';
import { SmsService } from '../common/sms.service';
import { GoogleAuthDto, RegisterDto, ResetPasswordDto, UpdateMeDto } from './dto';

export interface GoogleIdentity {
  sub: string;
  email?: string;
  emailVerified: boolean;
  firstName: string;
  lastName: string;
}

const OTP_TTL_MS = 5 * 60 * 1000;
const OTP_MAX_PER_10_MIN = 3;
const OTP_MAX_TRIES = 5;

/** Année de la prochaine session : à partir de septembre, on prépare l'examen de l'année suivante. */
export function currentSessionYear(now = new Date()) {
  return now.getMonth() >= 8 ? now.getFullYear() + 1 : now.getFullYear();
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly sms: SmsService,
  ) {}

  private hashOtp(phone: string, code: string) {
    return createHash('sha256').update(`${phone}:${code}:${process.env.JWT_SECRET}`).digest();
  }

  async requestOtp(rawPhone: string, purpose: 'REGISTER' | 'RESET') {
    const phone = normalizePhone(rawPhone);
    const user = await this.prisma.user.findUnique({ where: { phone } });
    if (purpose === 'REGISTER' && user) throw new ConflictException('Ce numéro a déjà un compte. Connecte-toi.');

    const recent = await this.prisma.otpCode.count({
      where: { phone, createdAt: { gte: new Date(Date.now() - 10 * 60 * 1000) } },
    });
    if (recent >= OTP_MAX_PER_10_MIN) throw new HttpException('Trop de demandes. Réessaie dans 10 minutes.', 429);

    // Réinitialisation : même réponse que le compte existe ou non (pas d'énumération des numéros).
    if (purpose === 'RESET' && !user) return { sent: true };

    const code = randomInt(0, 1_000_000).toString().padStart(6, '0');
    await this.prisma.otpCode.create({
      data: {
        phone,
        purpose,
        codeHash: this.hashOtp(phone, code).toString('hex'),
        expiresAt: new Date(Date.now() + OTP_TTL_MS),
      },
    });
    await this.sms.send(phone, `ExamPrepa CI : ton code est ${code}. Il expire dans 5 minutes.`);
    return { sent: true, ...(process.env.OTP_DEV_RETURN === 'true' ? { devCode: code } : {}) };
  }

  private async consumeOtp(phone: string, purpose: 'REGISTER' | 'RESET', code: string) {
    const otp = await this.prisma.otpCode.findFirst({
      where: { phone, purpose, consumed: false, expiresAt: { gt: new Date() } },
      orderBy: { createdAt: 'desc' },
    });
    if (!otp || otp.attempts >= OTP_MAX_TRIES) {
      throw new BadRequestException('Code expiré. Demande un nouveau code.');
    }
    const ok = timingSafeEqual(Buffer.from(otp.codeHash, 'hex'), this.hashOtp(phone, code));
    if (!ok) {
      await this.prisma.otpCode.update({ where: { id: otp.id }, data: { attempts: { increment: 1 } } });
      throw new BadRequestException('Code incorrect');
    }
    await this.prisma.otpCode.update({ where: { id: otp.id }, data: { consumed: true } });
  }

  /** Le BEPC a une série unique ; le BAC exige le choix d'une série. */
  private async resolveSeries(examId?: number, seriesId?: number) {
    if (!examId) throw new BadRequestException('Choisis ton examen (BEPC ou BAC)');
    const exam = await this.prisma.exam.findUnique({ where: { id: examId }, include: { series: true } });
    if (!exam) throw new BadRequestException('Examen inconnu');
    const id = exam.series.length === 1 ? exam.series[0].id : seriesId;
    if (!id || !exam.series.some((s) => s.id === id)) throw new BadRequestException('Choisis ta série');
    return id;
  }

  async register(dto: RegisterDto) {
    const phone = normalizePhone(dto.phone);
    const seriesId = dto.role === 'STUDENT' ? await this.resolveSeries(dto.examId, dto.seriesId) : undefined;

    await this.consumeOtp(phone, 'REGISTER', dto.code);

    const user = await this.prisma.user.create({
      data: {
        phone,
        email: dto.email?.toLowerCase(),
        passwordHash: await bcrypt.hash(dto.password, 10),
        firstName: dto.firstName.trim(),
        lastName: dto.lastName.trim(),
        role: dto.role,
        status: dto.role === 'TEACHER' ? 'PENDING' : 'ACTIVE',
        student:
          dto.role === 'STUDENT'
            ? {
                create: {
                  examId: dto.examId!,
                  seriesId: seriesId!,
                  schoolName: dto.schoolName,
                  city: dto.city,
                  examYear: currentSessionYear(),
                  parentPhone: dto.parentPhone ? normalizePhone(dto.parentPhone) : null,
                },
              }
            : undefined,
        teacher:
          dto.role === 'TEACHER'
            ? { create: { schoolName: dto.schoolName, subjects: dto.subjects ?? [] } }
            : undefined,
      },
    });

    if (user.status === 'PENDING') return { pending: true };
    return this.session(user);
  }

  /** Vérifie le jeton d'identité Google (signature, audience, expiration). */
  protected async verifyGoogle(idToken: string): Promise<GoogleIdentity> {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    if (!clientId) throw new ServiceUnavailableException("La connexion Google n'est pas configurée sur ce serveur.");
    let payload;
    try {
      const ticket = await new OAuth2Client(clientId).verifyIdToken({ idToken, audience: clientId });
      payload = ticket.getPayload();
    } catch {
      throw new UnauthorizedException('Connexion Google refusée. Réessaie.');
    }
    if (!payload?.sub) throw new UnauthorizedException('Connexion Google refusée. Réessaie.');
    return {
      sub: payload.sub,
      email: payload.email?.toLowerCase(),
      emailVerified: payload.email_verified === true,
      firstName: (payload.given_name ?? payload.name ?? 'Élève').slice(0, 60),
      lastName: (payload.family_name ?? '').slice(0, 60) || '-',
    };
  }

  /**
   * Connexion ou inscription avec Google.
   * 1. compte déjà lié → session ; 2. e-mail vérifié déjà connu → liaison puis session ;
   * 3. sinon inscription : sans profil, on répond `needsProfile` pour que l'appli demande examen et série.
   */
  async google(dto: GoogleAuthDto) {
    const id = await this.verifyGoogle(dto.idToken);
    let user = await this.prisma.user.findUnique({ where: { googleSub: id.sub } });
    if (!user && id.email && id.emailVerified) {
      const byEmail = await this.prisma.user.findUnique({ where: { email: id.email } });
      if (byEmail) user = await this.prisma.user.update({ where: { id: byEmail.id }, data: { googleSub: id.sub } });
    }
    if (user) return this.openSession(user);

    if (!dto.role) {
      return { needsProfile: true, firstName: id.firstName, lastName: id.lastName, email: id.email ?? null };
    }
    const seriesId = dto.role === 'STUDENT' ? await this.resolveSeries(dto.examId, dto.seriesId) : undefined;
    const created = await this.prisma.user.create({
      data: {
        googleSub: id.sub,
        email: id.email && id.emailVerified ? id.email : null,
        passwordHash: '!', // pas de mot de passe : connexion par Google uniquement
        firstName: id.firstName,
        lastName: id.lastName,
        role: dto.role,
        status: dto.role === 'TEACHER' ? 'PENDING' : 'ACTIVE',
        student:
          dto.role === 'STUDENT'
            ? {
                create: {
                  examId: dto.examId!,
                  seriesId: seriesId!,
                  schoolName: dto.schoolName,
                  city: dto.city,
                  examYear: currentSessionYear(),
                  parentPhone: dto.parentPhone ? normalizePhone(dto.parentPhone) : null,
                },
              }
            : undefined,
        teacher: dto.role === 'TEACHER' ? { create: { schoolName: dto.schoolName, subjects: dto.subjects ?? [] } } : undefined,
      },
    });
    if (created.status === 'PENDING') return { pending: true };
    return this.session(created);
  }

  private openSession(user: User) {
    if (user.status === 'PENDING') {
      throw new ForbiddenException('Ton compte enseignant est en attente de validation par un administrateur.');
    }
    if (user.status === 'SUSPENDED') throw new ForbiddenException('Ce compte est suspendu.');
    return this.session(user);
  }

  async login(rawPhone: string, password: string) {
    const phone = normalizePhone(rawPhone);
    const user = await this.prisma.user.findUnique({ where: { phone } });
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      throw new UnauthorizedException('Numéro ou mot de passe incorrect');
    }
    return this.openSession(user);
  }

  async resetPassword(dto: ResetPasswordDto) {
    const phone = normalizePhone(dto.phone);
    await this.consumeOtp(phone, 'RESET', dto.code);
    await this.prisma.user.update({
      where: { phone },
      data: { passwordHash: await bcrypt.hash(dto.password, 10) },
    });
    return { ok: true };
  }

  private async session(user: User) {
    // Jeton long (30 j) : l'élève doit pouvoir réviser hors ligne sans être déconnecté.
    const token = await this.jwt.signAsync({ sub: user.id, role: user.role });
    return { token, user: await this.me(user.id) };
  }

  async me(userId: string) {
    const user = await this.prisma.user.update({
      where: { id: userId },
      data: { lastSeenAt: new Date() },
      select: {
        id: true,
        role: true,
        status: true,
        phone: true,
        email: true,
        firstName: true,
        lastName: true,
        locale: true,
        createdAt: true,
        student: { include: { exam: true, series: true } },
        teacher: true,
      },
    });
    return user;
  }

  async updateMe(userId: string, dto: UpdateMeDto) {
    const { firstName, lastName, locale, ...profile } = dto;
    const student = await this.prisma.studentProfile.findUnique({ where: { userId } });
    if (student && profile.seriesId !== undefined) {
      const series = await this.prisma.series.findUnique({ where: { id: profile.seriesId } });
      if (!series || series.examId !== student.examId) throw new BadRequestException('Série invalide');
    }
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        firstName,
        lastName,
        locale,
        student: student ? { update: profile } : undefined,
        teacher: !student && profile.schoolName !== undefined ? { update: { schoolName: profile.schoolName } } : undefined,
      },
    });
    return this.me(userId);
  }

  /** Droit d'accès (loi 2013-450) : export de toutes les données de l'utilisateur. */
  async exportData(userId: string) {
    const { passwordHash, ...data } = await this.prisma.user.findUniqueOrThrow({
      where: { id: userId },
      include: {
        student: true,
        teacher: true,
        attempts: { include: { answers: true } },
        progress: true,
        quizResults: true,
        badges: true,
      },
    });
    return { exportedAt: new Date(), ...data };
  }

  /** Droit à l'effacement : anonymise le compte (les copies corrigées restent pour les statistiques). */
  async deleteMe(userId: string) {
    await this.prisma.$transaction([
      this.prisma.studentProfile.updateMany({
        where: { userId },
        data: { schoolName: null, city: null, parentPhone: null },
      }),
      this.prisma.user.update({
        where: { id: userId },
        data: {
          status: 'SUSPENDED',
          phone: null,
          googleSub: null,
          email: null,
          firstName: 'Compte',
          lastName: 'supprimé',
          passwordHash: '!',
        },
      }),
    ]);
    return { ok: true };
  }
}
