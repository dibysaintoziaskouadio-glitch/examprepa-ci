import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { randomInt, randomUUID } from 'crypto';
import { gradeItem, ItemResponse } from '../assessments/grading';
import { AuthUser } from '../common/auth';
import { normalizePhone } from '../common/phone';
import { PrismaService } from '../common/prisma.service';
import { seriesWhere } from '../curriculum/curriculum.service';
import { PushService } from '../push/push.service';

const QUESTIONS = 10;
const EXPIRY_MS = 48 * 3600 * 1000;
const userSelect = { id: true, firstName: true, lastName: true } as const;

/**
 * Mode Combat : deux élèves répondent aux mêmes 10 questions de cours d'une matière.
 * Les réponses sont corrigées côté serveur (les solutions ne sont envoyées qu'après la partie).
 */
@Injectable()
export class ChallengesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly push: PushService,
  ) {}

  async create(user: AuthUser, dto: { subjectId: number; opponentPhone?: string; opponentId?: string }) {
    const me = await this.prisma.studentProfile.findUniqueOrThrow({ where: { userId: user.id }, include: { series: true } });
    const opponent = dto.opponentId
      ? await this.prisma.user.findUnique({ where: { id: dto.opponentId }, include: { student: true } })
      : await this.prisma.user.findUnique({ where: { phone: normalizePhone(dto.opponentPhone ?? '') }, include: { student: true } });
    if (!opponent || !opponent.student || opponent.status !== 'ACTIVE') throw new NotFoundException('Aucun élève ne correspond');
    if (opponent.id === user.id) throw new BadRequestException('Tu ne peux pas te défier toi-même');
    if (opponent.student.examId !== me.examId) throw new BadRequestException('Ton adversaire ne prépare pas le même examen');

    const pool = await this.prisma.question.findMany({
      where: { type: { in: ['MCQ', 'NUMERIC'] }, chapter: { subjectId: dto.subjectId, examId: me.examId, status: 'PUBLISHED', ...seriesWhere(me.series.code) } },
      select: { id: true },
    });
    if (pool.length < QUESTIONS) throw new ConflictException('Pas assez de questions dans cette matière');
    const ids = pool.map((q) => q.id);
    for (let i = ids.length - 1; i > 0; i--) {
      const j = randomInt(i + 1);
      [ids[i], ids[j]] = [ids[j], ids[i]];
    }
    const c = await this.prisma.challenge.create({
      data: {
        id: randomUUID(),
        challengerId: user.id,
        opponentId: opponent.id,
        subjectId: dto.subjectId,
        questionIds: ids.slice(0, QUESTIONS),
        expiresAt: new Date(Date.now() + EXPIRY_MS),
      },
      include: { subject: { select: { name: true } }, challenger: { select: userSelect } },
    });
    void this.push.notify(opponent.id, {
      title: '⚔️ Nouveau défi !',
      body: `${c.challenger.firstName} te défie en ${c.subject.name}`,
      url: `/combat/${c.id}`,
    });
    return c;
  }

  /** Les défis non joués à temps expirent (évaluation paresseuse à la lecture). */
  private async expire() {
    await this.prisma.challenge.updateMany({ where: { status: 'PENDING', expiresAt: { lt: new Date() } }, data: { status: 'EXPIRED' } });
  }

  async list(user: AuthUser) {
    await this.expire();
    return this.prisma.challenge.findMany({
      where: { OR: [{ challengerId: user.id }, { opponentId: user.id }] },
      orderBy: { createdAt: 'desc' },
      take: 50,
      include: { subject: { select: { name: true, icon: true } }, challenger: { select: userSelect }, opponent: { select: userSelect } },
    });
  }

  private async mine(user: AuthUser, id: string) {
    await this.expire();
    const c = await this.prisma.challenge.findUnique({
      where: { id },
      include: { subject: { select: { name: true, icon: true } }, challenger: { select: userSelect }, opponent: { select: userSelect } },
    });
    if (!c || (c.challengerId !== user.id && c.opponentId !== user.id)) throw new NotFoundException('Défi introuvable');
    return c;
  }

  async get(user: AuthUser, id: string) {
    const c = await this.mine(user, id);
    const isChallenger = c.challengerId === user.id;
    const myScore = isChallenger ? c.challengerScore : c.opponentScore;
    const played = myScore !== null;
    const questions = await this.prisma.question.findMany({ where: { id: { in: c.questionIds } } });
    const ordered = c.questionIds.map((qid) => questions.find((q) => q.id === qid)!).filter(Boolean);
    return {
      ...c,
      me: isChallenger ? 'challenger' : 'opponent',
      played,
      canPlay: !played && c.status === 'PENDING',
      // Solutions seulement après avoir joué
      questions: ordered.map((q) => ({
        id: q.id,
        type: q.type,
        prompt: q.prompt,
        choices: q.choices,
        ...(played ? { answer: q.answer, explanation: q.explanation } : {}),
      })),
    };
  }

  async submit(user: AuthUser, id: string, answers: { questionId: number; choice?: number; value?: string }[], timeS: number) {
    const c = await this.mine(user, id);
    const isChallenger = c.challengerId === user.id;
    if (c.status !== 'PENDING') throw new ConflictException('Ce défi est terminé');
    if ((isChallenger ? c.challengerScore : c.opponentScore) !== null) throw new ConflictException('Tu as déjà joué ce défi');
    const questions = await this.prisma.question.findMany({ where: { id: { in: c.questionIds } } });
    let score = 0;
    for (const q of questions) {
      const a = answers.find((x) => x.questionId === q.id);
      const g = gradeItem({ type: q.type, points: 1, resultPoints: 1, answer: q.answer }, a as ItemResponse);
      if (g.isCorrect) score++;
    }
    const data = isChallenger ? { challengerScore: score, challengerTimeS: timeS } : { opponentScore: score, opponentTimeS: timeS };
    const otherPlayed = (isChallenger ? c.opponentScore : c.challengerScore) !== null;
    await this.prisma.challenge.update({ where: { id }, data: { ...data, ...(otherPlayed ? { status: 'DONE' } : {}) } });
    const otherId = isChallenger ? c.opponentId : c.challengerId;
    void this.push.notify(otherId, {
      title: otherPlayed ? '🏁 Défi terminé' : '⚔️ À toi de jouer',
      body: otherPlayed ? `Résultat du défi en ${c.subject.name} disponible` : `Ton adversaire a joué : ${score}/${QUESTIONS}`,
      url: `/combat/${id}`,
    });
    return this.get(user, id);
  }

  async decline(user: AuthUser, id: string) {
    const c = await this.mine(user, id);
    if (c.opponentId !== user.id) throw new ForbiddenException();
    if (c.status !== 'PENDING') throw new ConflictException('Ce défi est terminé');
    await this.prisma.challenge.update({ where: { id }, data: { status: 'DECLINED' } });
    return { ok: true };
  }

  /**
   * Classement par points d'expérience (XP) :
   * 10 XP par bonne réponse aux quiz, 5 XP par point obtenu aux devoirs officiels, 20 XP par défi gagné.
   */
  async leaderboard(user: AuthUser, scope: 'school' | 'city' | 'national', period: 'week' | 'all') {
    const me = await this.prisma.studentProfile.findUnique({ where: { userId: user.id } });
    if (!me) throw new BadRequestException('Classement réservé aux élèves');
    const since = period === 'week' ? new Date(Date.now() - 7 * 24 * 3600 * 1000) : new Date(0);
    const profileWhere = {
      examId: me.examId,
      ...(scope === 'school' ? { schoolName: me.schoolName ?? '__aucun__' } : {}),
      ...(scope === 'city' ? { city: me.city ?? '__aucune__' } : {}),
      user: { status: 'ACTIVE' as const },
    };
    const students = await this.prisma.studentProfile.findMany({
      where: profileWhere,
      select: { userId: true, schoolName: true, city: true, user: { select: { firstName: true, lastName: true } } },
      take: 5000,
    });
    const ids = students.map((s) => s.userId);
    const [quiz, exams, wonAsChallenger, wonAsOpponent] = await Promise.all([
      this.prisma.quizResult.groupBy({ by: ['userId'], where: { userId: { in: ids }, createdAt: { gte: since } }, _sum: { score: true } }),
      this.prisma.attempt.groupBy({ by: ['userId'], where: { userId: { in: ids }, isOfficial: true, status: 'GRADED', submittedAt: { gte: since } }, _sum: { finalScore: true } }),
      this.prisma.challenge.findMany({ where: { status: 'DONE', challengerId: { in: ids }, createdAt: { gte: since } }, select: { challengerId: true, challengerScore: true, opponentScore: true } }),
      this.prisma.challenge.findMany({ where: { status: 'DONE', opponentId: { in: ids }, createdAt: { gte: since } }, select: { opponentId: true, challengerScore: true, opponentScore: true } }),
    ]);
    const xp = new Map<string, number>();
    const add = (id: string, n: number) => xp.set(id, (xp.get(id) ?? 0) + n);
    quiz.forEach((q) => add(q.userId, (q._sum.score ?? 0) * 10));
    exams.forEach((e) => add(e.userId, Math.round((e._sum.finalScore ?? 0) * 5)));
    wonAsChallenger.forEach((c) => (c.challengerScore ?? 0) > (c.opponentScore ?? 0) && add(c.challengerId, 20));
    wonAsOpponent.forEach((c) => (c.opponentScore ?? 0) > (c.challengerScore ?? 0) && add(c.opponentId, 20));
    const ranked = students
      .map((s) => ({ userId: s.userId, name: `${s.user.firstName} ${s.user.lastName.charAt(0)}.`, school: s.schoolName, city: s.city, xp: xp.get(s.userId) ?? 0 }))
      .sort((a, b) => b.xp - a.xp)
      .map((s, i) => ({ ...s, rank: i + 1 }));
    return {
      scope,
      period,
      label: scope === 'school' ? me.schoolName : scope === 'city' ? me.city : 'Côte d’Ivoire',
      top: ranked.slice(0, 50),
      me: ranked.find((r) => r.userId === user.id) ?? null,
      total: ranked.length,
    };
  }
}
