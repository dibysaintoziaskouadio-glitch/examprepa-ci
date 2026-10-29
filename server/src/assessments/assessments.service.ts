import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { audit } from '../common/audit';
import { AuthUser } from '../common/auth';
import { PrismaService } from '../common/prisma.service';
import { CurriculumService } from '../curriculum/curriculum.service';
import { ProgressService } from '../progress/progress.service';
import { assertCanSeeStudent, visibleStudentIds } from '../common/scope';
import { PaymentsService } from '../payments/payments.service';
import { PushService } from '../push/push.service';
import { GradeAttemptDto, SubmitAttemptDto } from './dto';
import { appreciation, gradeItem, ItemResponse, round2 } from './grading';

/** Marge tolérée après la fin du chronomètre (réseau lent, remise automatique). */
const LATE_GRACE_S = 120;
/** Les photos de copie sont nommées « <userId>_<uuid>.<ext> ». */
export const UPLOAD_NAME = /^[0-9a-f-]{36}_[0-9a-f-]{36}\.(jpg|png|webp)$/;

@Injectable()
export class AssessmentsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly curriculum: CurriculumService,
    private readonly progress: ProgressService,
    private readonly payments: PaymentsService,
    private readonly push: PushService,
  ) {}

  /** Règles d'accès d'un élève à un devoir : verrou de chapitre, classe, abonnement. */
  private async checkAccess(
    user: AuthUser,
    a: { id: number; type: string; classroomId: number | null; chapter: { id: number; subjectId: number; examId: number; isFree: boolean } | null },
  ) {
    if (user.role !== 'STUDENT') return;
    if (a.chapter && (await this.curriculum.isLocked(a.chapter, user))) throw new ForbiddenException('Chapitre verrouillé');
    if (a.type === 'CLASS_ASSIGNMENT') {
      const member = a.classroomId && (await this.prisma.classMember.findUnique({ where: { classroomId_userId: { classroomId: a.classroomId, userId: user.id } } }));
      if (!member) throw new ForbiddenException('Ce devoir est réservé aux élèves de la classe');
      return;
    }
    // Devoirs des premiers chapitres gratuits ; le reste (devoirs, examens blancs, annales) pour les abonnés.
    if (a.type === 'CHAPTER_EXAM' && a.chapter?.isFree) return;
    await this.payments.requirePremium(user);
  }

  /** Sujet du devoir, sans les réponses ni le corrigé. */
  async getSubject(user: AuthUser, id: number) {
    const a = await this.prisma.assessment.findUnique({
      where: { id },
      include: { items: { orderBy: { orderIndex: 'asc' } }, chapter: { include: { subject: true } }, subject: true },
    });
    if (!a || a.status !== 'PUBLISHED') throw new NotFoundException('Devoir introuvable');
    await this.checkAccess(user, a);
    const previous = await this.prisma.attempt.count({ where: { userId: user.id, assessmentId: id } });
    return {
      ...a,
      previousAttempts: previous,
      items: a.items.map(({ answer, correction, ...item }) => item),
    };
  }

  async submit(user: AuthUser, dto: SubmitAttemptDto) {
    const existing = await this.prisma.attempt.findUnique({ where: { id: dto.id } });
    if (existing) {
      if (existing.userId !== user.id) throw new ConflictException('Identifiant de copie déjà utilisé');
      return { id: existing.id, status: existing.status, duplicate: true };
    }

    const a = await this.prisma.assessment.findUnique({
      where: { id: dto.assessmentId },
      include: { items: true, chapter: true },
    });
    if (!a || a.status !== 'PUBLISHED') throw new NotFoundException('Devoir introuvable');
    await this.checkAccess(user, a);

    // Les horodatages viennent du téléphone (remise hors ligne possible) : on les borne.
    const now = new Date();
    let submittedAt = dto.submittedAt ? new Date(dto.submittedAt) : now;
    if (submittedAt > now) submittedAt = now;
    let startedAt = new Date(dto.startedAt);
    if (startedAt > submittedAt) startedAt = submittedAt;
    const timeSpentS = Math.round((submittedAt.getTime() - startedAt.getTime()) / 1000);

    const byItem = new Map(dto.answers.map((x) => [x.itemId, x]));
    const answers = a.items.map((item) => {
      const input = byItem.get(item.id);
      const photoUrl = input?.photoUrl && UPLOAD_NAME.test(input.photoUrl) && input.photoUrl.startsWith(`${user.id}_`) ? input.photoUrl : null;
      const response = (input?.response ?? null) as ItemResponse | null;
      const g = gradeItem(item, response, !!photoUrl);
      return {
        itemId: item.id,
        response: response ? (response as Prisma.InputJsonValue) : Prisma.JsonNull,
        photoUrl,
        ...g,
      };
    });
    const autoScore = round2(answers.reduce((s, x) => s + x.autoPoints, 0));
    const needsManual = answers.some((x) => x.needsManual);
    const previous = await this.prisma.attempt.count({ where: { userId: user.id, assessmentId: a.id } });

    await this.prisma.attempt.create({
      data: {
        id: dto.id,
        userId: user.id,
        assessmentId: a.id,
        isOfficial: previous === 0,
        startedAt,
        submittedAt,
        timeSpentS,
        late: timeSpentS > a.durationMin * 60 + LATE_GRACE_S,
        status: needsManual ? 'SUBMITTED' : 'GRADED',
        autoScore,
        finalScore: needsManual ? null : autoScore,
        gradedAt: needsManual ? null : now,
        answers: { create: answers },
      },
    });
    if (a.chapterId && !needsManual) await this.progress.recomputeExam(user.id, a.chapterId);
    else await this.progress.evaluateBadges(user.id);
    return { id: dto.id, status: needsManual ? 'SUBMITTED' : 'GRADED' };
  }

  /** Copie avec corrigé : visible par son auteur, les enseignants et les administrateurs. */
  async detail(user: AuthUser, id: string) {
    const at = await this.prisma.attempt.findUnique({
      where: { id },
      include: {
        user: { select: { id: true, firstName: true, lastName: true, student: { select: { schoolName: true } } } },
        gradedBy: { select: { firstName: true, lastName: true } },
        assessment: { include: { chapter: { include: { subject: true } }, subject: true } },
        answers: { include: { item: true } },
      },
    });
    if (!at) throw new NotFoundException('Copie introuvable');
    if (at.userId !== user.id) await assertCanSeeStudent(this.prisma, user, at.userId);

    const score = at.finalScore ?? at.autoScore;
    const { chapter } = at.assessment;
    let nextChapter: { id: number; title: string } | null = null;
    if (chapter) {
      nextChapter = await this.prisma.chapter.findFirst({
        where: { subjectId: chapter.subjectId, examId: chapter.examId, status: 'PUBLISHED', orderIndex: { gt: chapter.orderIndex } },
        orderBy: { orderIndex: 'asc' },
        select: { id: true, title: true },
      });
    }
    const { answers, assessment, ...rest } = at;
    return {
      ...rest,
      score,
      appreciation: at.status === 'GRADED' ? appreciation(score, assessment.totalPoints) : null,
      passed: at.status === 'GRADED' ? score >= assessment.passMark : null,
      nextChapter,
      assessment: {
        id: assessment.id,
        title: assessment.title,
        totalPoints: assessment.totalPoints,
        passMark: assessment.passMark,
        blocksNext: assessment.blocksNext,
        durationMin: assessment.durationMin,
        advice: assessment.advice,
        chapter: chapter && { id: chapter.id, title: chapter.title, subject: chapter.subject.name },
        subject: chapter?.subject.name ?? assessment.subject?.name ?? null,
        type: assessment.type,
      },
      answers: answers
        .sort((x, y) => x.item.orderIndex - y.item.orderIndex)
        .map(({ item, ...an }) => ({
          ...an,
          awarded: an.manualPoints ?? an.autoPoints,
          section: item.section,
          sectionIntro: item.sectionIntro,
          prompt: item.prompt,
          type: item.type,
          choices: item.choices,
          points: item.points,
          resultPoints: item.resultPoints,
          expected: item.answer,
          correction: item.correction,
        })),
    };
  }

  /** Examens blancs et annales de l'examen de l'élève, avec sa meilleure note. */
  async revisions(user: AuthUser) {
    const profile = await this.prisma.studentProfile.findUnique({ where: { userId: user.id } });
    const where = { status: 'PUBLISHED' as const, type: { in: ['MOCK_EXAM', 'PAST_PAPER'] as ('MOCK_EXAM' | 'PAST_PAPER')[] }, ...(profile ? { examId: profile.examId } : {}) };
    const list = await this.prisma.assessment.findMany({
      where,
      orderBy: [{ subjectId: 'asc' }, { createdAt: 'asc' }],
      select: { id: true, type: true, title: true, year: true, durationMin: true, subject: { select: { id: true, name: true, icon: true } }, _count: { select: { items: true } } },
    });
    const attempts = await this.prisma.attempt.findMany({
      where: { userId: user.id, assessmentId: { in: list.map((a) => a.id) } },
      select: { assessmentId: true, finalScore: true, autoScore: true, status: true },
    });
    return {
      premium: await this.payments.hasPremium(user),
      items: list.map((a) => {
        const mine = attempts.filter((t) => t.assessmentId === a.id);
        const best = mine.length ? Math.max(...mine.map((t) => t.finalScore ?? t.autoScore)) : null;
        return { ...a, attempts: mine.length, best };
      }),
    };
  }

  myAttempts(userId: string) {
    return this.prisma.attempt.findMany({
      where: { userId },
      orderBy: { submittedAt: 'desc' },
      select: {
        id: true,
        status: true,
        isOfficial: true,
        autoScore: true,
        finalScore: true,
        submittedAt: true,
        assessment: { select: { id: true, title: true, chapterId: true } },
      },
    });
  }

  // ───────────── Espace enseignant ─────────────

  async queue(user: AuthUser, status: 'SUBMITTED' | 'GRADED' = 'SUBMITTED') {
    const ids = await visibleStudentIds(this.prisma, user);
    return this.prisma.attempt.findMany({
      where: { status, ...(ids ? { userId: { in: ids } } : {}) },
      orderBy: { submittedAt: status === 'SUBMITTED' ? 'asc' : 'desc' },
      take: 100,
      select: {
        id: true,
        status: true,
        autoScore: true,
        finalScore: true,
        submittedAt: true,
        late: true,
        isOfficial: true,
        user: { select: { firstName: true, lastName: true, student: { select: { schoolName: true } } } },
        assessment: { select: { title: true, subject: { select: { name: true } }, chapter: { select: { title: true, subject: { select: { name: true } } } } } },
      },
    });
  }

  async grade(grader: AuthUser, id: string, dto: GradeAttemptDto) {
    const at = await this.prisma.attempt.findUnique({
      where: { id },
      include: { answers: { include: { item: true } }, assessment: true },
    });
    if (!at) throw new NotFoundException('Copie introuvable');
    await assertCanSeeStudent(this.prisma, grader, at.userId);

    const byId = new Map(at.answers.map((a) => [a.id, a]));
    for (const g of dto.answers) {
      const an = byId.get(g.answerId);
      if (!an) throw new BadRequestException(`Réponse ${g.answerId} inconnue pour cette copie`);
      if (g.points > an.item.points) throw new BadRequestException(`Maximum ${an.item.points} pt pour « ${an.item.section} »`);
    }
    const updates = new Map(dto.answers.map((g) => [g.answerId, g]));
    const finalScore = round2(
      at.answers.reduce((s, an) => s + (updates.get(an.id)?.points ?? an.manualPoints ?? an.autoPoints), 0),
    );

    await this.prisma.$transaction([
      ...dto.answers.map((g) =>
        this.prisma.answer.update({ where: { id: g.answerId }, data: { manualPoints: g.points, comment: g.comment || null } }),
      ),
      this.prisma.attempt.update({
        where: { id },
        data: { status: 'GRADED', finalScore, teacherComment: dto.comment || null, gradedById: grader.id, gradedAt: new Date() },
      }),
    ]);
    await audit(this.prisma, grader.id, at.status === 'GRADED' ? 'attempt.regrade' : 'attempt.grade', 'attempt', id, {
      from: at.finalScore,
      to: finalScore,
    });
    if (at.assessment.chapterId) await this.progress.recomputeExam(at.userId, at.assessment.chapterId);
    else await this.progress.evaluateBadges(at.userId);
    void this.push.notify(at.userId, { title: '✅ Copie corrigée', body: `${at.assessment.title} : ${finalScore}/${at.assessment.totalPoints}`, url: `/resultats/${id}` });
    return this.detail(grader, id);
  }

  /** Statistiques par devoir (copies officielles) et élèves en difficulté. */
  async teacherStats(user: AuthUser) {
    const ids = await visibleStudentIds(this.prisma, user);
    const attempts = await this.prisma.attempt.findMany({
      where: { status: 'GRADED', isOfficial: true, ...(ids ? { userId: { in: ids } } : {}) },
      include: {
        user: { select: { id: true, firstName: true, lastName: true } },
        assessment: { include: { chapter: { include: { subject: true } }, subject: true, items: { orderBy: { orderIndex: 'asc' } } } },
        answers: true,
      },
    });

    const byAssessment = new Map<number, typeof attempts>();
    for (const a of attempts) byAssessment.set(a.assessmentId, [...(byAssessment.get(a.assessmentId) ?? []), a]);

    const assessments = [...byAssessment.values()].map((list) => {
      const { assessment } = list[0];
      const scores = list.map((a) => a.finalScore!);
      return {
        id: assessment.id,
        title: assessment.title,
        subject: assessment.chapter?.subject.name ?? assessment.subject?.name ?? '',
        count: list.length,
        average: round2(scores.reduce((s, x) => s + x, 0) / scores.length),
        passRate: Math.round((scores.filter((s) => s >= assessment.passMark).length / scores.length) * 100),
        items: assessment.items.map((item) => {
          const got = list.flatMap((a) => a.answers.filter((an) => an.itemId === item.id)).map((an) => an.manualPoints ?? an.autoPoints);
          return {
            id: item.id,
            label: `${item.section} — ${item.prompt.replace(/[$*_#>]/g, '').slice(0, 70)}`,
            successRate: got.length ? Math.round((got.reduce((s, x) => s + x, 0) / (got.length * item.points)) * 100) : null,
          };
        }),
      };
    });

    const byStudent = new Map<string, { name: string; scores: number[] }>();
    for (const a of attempts) {
      const s = byStudent.get(a.userId) ?? { name: `${a.user.firstName} ${a.user.lastName}`, scores: [] };
      s.scores.push((a.finalScore! * 20) / a.assessment.totalPoints);
      byStudent.set(a.userId, s);
    }
    const atRisk = [...byStudent.entries()]
      .map(([id, s]) => ({ id, name: s.name, count: s.scores.length, average: round2(s.scores.reduce((x, y) => x + y, 0) / s.scores.length) }))
      .filter((s) => s.average < 10)
      .sort((x, y) => x.average - y.average);

    return {
      pending: await this.prisma.attempt.count({ where: { status: 'SUBMITTED', ...(ids ? { userId: { in: ids } } : {}) } }),
      graded: attempts.length,
      assessments,
      atRisk,
    };
  }
}
