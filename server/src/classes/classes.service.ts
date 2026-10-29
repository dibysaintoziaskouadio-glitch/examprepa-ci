import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { randomInt } from 'crypto';
import { AuthUser } from '../common/auth';
import { PrismaService } from '../common/prisma.service';
import { PushService } from '../push/push.service';

// Alphabet sans caractères ambigus (0/O, 1/I/L) pour dicter le code à l'oral.
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

@Injectable()
export class ClassesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly push: PushService,
  ) {}

  private async newCode() {
    for (let i = 0; i < 20; i++) {
      const code = Array.from({ length: 6 }, () => ALPHABET[randomInt(ALPHABET.length)]).join('');
      if (!(await this.prisma.classroom.findUnique({ where: { code } }))) return code;
    }
    throw new ConflictException('Impossible de générer un code, réessaie');
  }

  /** Classe gérable par l'utilisateur (son enseignant ou un administrateur). */
  private async owned(user: AuthUser, id: number) {
    const c = await this.prisma.classroom.findUnique({ where: { id } });
    if (!c) throw new NotFoundException('Classe introuvable');
    if (user.role !== 'ADMIN' && c.teacherId !== user.id) throw new ForbiddenException();
    return c;
  }

  async create(user: AuthUser, dto: { name: string; examId: number; schoolName?: string }) {
    const exam = await this.prisma.exam.findUnique({ where: { id: dto.examId } });
    if (!exam) throw new BadRequestException('Examen inconnu');
    return this.prisma.classroom.create({
      data: { name: dto.name.trim(), examId: dto.examId, schoolName: dto.schoolName, teacherId: user.id, code: await this.newCode() },
    });
  }

  list(user: AuthUser) {
    const where =
      user.role === 'STUDENT'
        ? { members: { some: { userId: user.id } }, archived: false }
        : user.role === 'TEACHER'
          ? { teacherId: user.id }
          : {};
    return this.prisma.classroom.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      include: {
        exam: { select: { code: true } },
        teacher: { select: { id: true, firstName: true, lastName: true } },
        _count: { select: { members: true } },
      },
    });
  }

  async detail(user: AuthUser, id: number) {
    const c = await this.prisma.classroom.findUnique({
      where: { id },
      include: {
        exam: { select: { id: true, code: true } },
        teacher: { select: { id: true, firstName: true, lastName: true } },
        announcements: { orderBy: { createdAt: 'desc' }, take: 30 },
        assessments: {
          where: { status: 'PUBLISHED' },
          orderBy: { createdAt: 'desc' },
          select: { id: true, title: true, dueAt: true, durationMin: true, subject: { select: { name: true, icon: true } }, _count: { select: { items: true } } },
        },
        members: {
          orderBy: { joinedAt: 'asc' },
          include: { user: { select: { id: true, firstName: true, lastName: true, lastSeenAt: true } } },
        },
      },
    });
    if (!c) throw new NotFoundException('Classe introuvable');
    const isMember = c.members.some((m) => m.userId === user.id);
    const isOwner = user.role === 'ADMIN' || c.teacherId === user.id;
    if (!isMember && !isOwner) throw new ForbiddenException();

    // Copies déjà rendues par l'élève pour les devoirs de la classe
    const myAttempts = await this.prisma.attempt.findMany({
      where: { userId: user.id, assessmentId: { in: c.assessments.map((a) => a.id) } },
      select: { id: true, assessmentId: true, status: true, finalScore: true, autoScore: true },
    });

    let members: unknown = undefined;
    if (isOwner) {
      // Vue enseignant : moyenne officielle et dernière activité de chaque élève
      const graded = await this.prisma.attempt.findMany({
        where: { userId: { in: c.members.map((m) => m.userId) }, status: 'GRADED', isOfficial: true },
        select: { userId: true, finalScore: true, assessment: { select: { totalPoints: true } } },
      });
      members = c.members.map((m) => {
        const scores = graded.filter((g) => g.userId === m.userId).map((g) => ((g.finalScore ?? 0) * 20) / g.assessment.totalPoints);
        return {
          ...m.user,
          joinedAt: m.joinedAt,
          examsCount: scores.length,
          average: scores.length ? Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 100) / 100 : null,
        };
      });
    }

    return {
      id: c.id,
      name: c.name,
      code: isOwner ? c.code : undefined,
      schoolName: c.schoolName,
      archived: c.archived,
      exam: c.exam,
      teacher: c.teacher,
      isOwner,
      membersCount: c.members.length,
      members,
      announcements: c.announcements,
      assignments: c.assessments.map((a) => ({ ...a, myAttempt: myAttempts.find((t) => t.assessmentId === a.id) ?? null })),
    };
  }

  async update(user: AuthUser, id: number, dto: { name?: string; archived?: boolean }) {
    await this.owned(user, id);
    return this.prisma.classroom.update({ where: { id }, data: dto });
  }

  async regenerateCode(user: AuthUser, id: number) {
    await this.owned(user, id);
    return this.prisma.classroom.update({ where: { id }, data: { code: await this.newCode() }, select: { id: true, code: true } });
  }

  async join(user: AuthUser, rawCode: string) {
    const code = rawCode.trim().toUpperCase().replace(/\s/g, '');
    const c = await this.prisma.classroom.findUnique({ where: { code } });
    if (!c || c.archived) throw new NotFoundException('Aucune classe ne correspond à ce code');
    const profile = await this.prisma.studentProfile.findUnique({ where: { userId: user.id } });
    if (profile && profile.examId !== c.examId) throw new BadRequestException('Cette classe ne prépare pas le même examen que toi');
    await this.prisma.classMember.upsert({
      where: { classroomId_userId: { classroomId: c.id, userId: user.id } },
      create: { classroomId: c.id, userId: user.id },
      update: {},
    });
    return { id: c.id, name: c.name };
  }

  async leave(user: AuthUser, id: number) {
    await this.prisma.classMember.deleteMany({ where: { classroomId: id, userId: user.id } });
    return { ok: true };
  }

  async removeMember(user: AuthUser, id: number, userId: string) {
    await this.owned(user, id);
    await this.prisma.classMember.deleteMany({ where: { classroomId: id, userId } });
    return { ok: true };
  }

  async announce(user: AuthUser, id: number, body: string) {
    const c = await this.owned(user, id);
    const a = await this.prisma.announcement.create({ data: { classroomId: id, authorId: user.id, body: body.trim() } });
    const members = await this.prisma.classMember.findMany({ where: { classroomId: id }, select: { userId: true } });
    void this.push.notifyMany(
      members.map((m) => m.userId),
      { title: `📢 ${c.name}`, body: body.slice(0, 120), url: `/classes/${id}` },
    );
    return a;
  }

  async deleteAnnouncement(user: AuthUser, id: number, announcementId: number) {
    await this.owned(user, id);
    await this.prisma.announcement.deleteMany({ where: { id: announcementId, classroomId: id } });
    return { ok: true };
  }

  /** Fil des annonces de toutes les classes de l'utilisateur. */
  feed(user: AuthUser) {
    const where =
      user.role === 'STUDENT'
        ? { classroom: { members: { some: { userId: user.id } }, archived: false } }
        : user.role === 'TEACHER'
          ? { classroom: { teacherId: user.id } }
          : {};
    return this.prisma.announcement.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 20,
      include: { classroom: { select: { id: true, name: true } } },
    });
  }
}
