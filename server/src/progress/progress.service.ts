import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import { chapterPercent } from '../curriculum/rules';
import { BADGES, earnedBadges } from './badges';
import { QuizResultDto, StepDto } from './dto';

const avg = (xs: number[]) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
const r2 = (n: number | null) => (n === null ? null : Math.round(n * 100) / 100);

@Injectable()
export class ProgressService {
  constructor(private readonly prisma: PrismaService) {}

  markStep(userId: string, chapterId: number, dto: StepDto) {
    const data = {
      ...(dto.courseDone ? { courseDone: true } : {}),
      ...(dto.summaryDone ? { summaryDone: true } : {}),
    };
    return this.prisma.chapterProgress.upsert({
      where: { userId_chapterId: { userId, chapterId } },
      create: { userId, chapterId, ...data },
      update: data,
    });
  }

  /** Idempotent : le même résultat peut être rejoué par la file de synchronisation hors ligne. */
  async recordQuiz(userId: string, dto: QuizResultDto) {
    if (dto.score > dto.total) throw new BadRequestException('Score invalide');
    const exists = await this.prisma.quizResult.findUnique({ where: { id: dto.id } });
    if (exists) return { ok: true, duplicate: true };
    await this.prisma.quizResult.create({ data: { ...dto, userId } });
    const percent = Math.round((dto.score / dto.total) * 100);
    const current = await this.prisma.chapterProgress.findUnique({
      where: { userId_chapterId: { userId, chapterId: dto.chapterId } },
    });
    await this.prisma.chapterProgress.upsert({
      where: { userId_chapterId: { userId, chapterId: dto.chapterId } },
      create: { userId, chapterId: dto.chapterId, quizBest: percent },
      update: { quizBest: Math.max(percent, current?.quizBest ?? 0) },
    });
    return { ok: true };
  }

  /** Recalcule la meilleure note de devoir du chapitre (sert au déblocage du suivant). */
  async recomputeExam(userId: string, chapterId: number) {
    const best = await this.prisma.attempt.aggregate({
      where: { userId, status: 'GRADED', assessment: { chapterId } },
      _max: { finalScore: true },
    });
    const examBest = best._max.finalScore;
    await this.prisma.chapterProgress.upsert({
      where: { userId_chapterId: { userId, chapterId } },
      create: { userId, chapterId, examBest },
      update: { examBest },
    });
    await this.evaluateBadges(userId);
  }

  async evaluateBadges(userId: string) {
    const attempts = await this.prisma.attempt.findMany({
      where: { userId },
      select: { isOfficial: true, status: true, finalScore: true, assessment: { select: { totalPoints: true } } },
    });
    const official = attempts
      .filter((a) => a.isOfficial && a.status === 'GRADED' && a.finalScore !== null)
      .map((a) => (a.finalScore! * 20) / a.assessment.totalPoints);
    const codes = earnedBadges(attempts.length, official);
    if (codes.length) {
      await this.prisma.userBadge.createMany({
        data: codes.map((code) => ({ userId, code })),
        skipDuplicates: true,
      });
    }
  }

  async dashboard(userId: string) {
    const profile = await this.prisma.studentProfile.findUnique({
      where: { userId },
      include: { exam: true, series: { include: { subjects: { include: { subject: true } } } } },
    });
    if (!profile) throw new BadRequestException('Tableau de bord réservé aux élèves');
    await this.evaluateBadges(userId);

    const [attempts, progress, badges] = await Promise.all([
      this.prisma.attempt.findMany({
        where: { userId },
        orderBy: { submittedAt: 'asc' },
        include: { assessment: { include: { chapter: { include: { subject: true } }, subject: true } } },
      }),
      this.prisma.chapterProgress.findMany({
        where: { userId },
        orderBy: { updatedAt: 'desc' },
        include: { chapter: { include: { subject: true, assessments: { select: { passMark: true, blocksNext: true } } } } },
      }),
      this.prisma.userBadge.findMany({ where: { userId } }),
    ]);

    const on20 = (a: (typeof attempts)[number]) => ((a.finalScore ?? a.autoScore) * 20) / a.assessment.totalPoints;
    const official = attempts.filter((a) => a.isOfficial && a.status === 'GRADED');

    // Moyennes par matière (notes officielles) et moyenne générale pondérée par les coefficients
    const subjects = profile.series.subjects.map(({ subject, coefficient }) => {
      const scores = official.filter((a) => (a.assessment.chapter?.subjectId ?? a.assessment.subjectId) === subject.id).map(on20);
      return { id: subject.id, name: subject.name, icon: subject.icon, color: subject.color, coefficient, average: r2(avg(scores)), count: scores.length };
    });
    const rated = subjects.filter((s) => s.average !== null);
    const coefSum = rated.reduce((s, x) => s + x.coefficient, 0);
    const generalAverage = coefSum ? r2(rated.reduce((s, x) => s + x.average! * x.coefficient, 0) / coefSum) : null;

    // Reprendre là où l'élève s'est arrêté
    const inProgress = progress.find((p) => chapterPercent(p.chapter, p) < 100);
    const resume = inProgress
      ? {
          chapterId: inProgress.chapterId,
          title: inProgress.chapter.title,
          subject: inProgress.chapter.subject.name,
          percent: chapterPercent(inProgress.chapter, inProgress),
          step: !inProgress.courseDone ? 'cours' : !inProgress.summaryDone ? 'fiche' : inProgress.quizBest == null ? 'quiz' : 'devoir',
        }
      : null;

    // Recommandations (règles simples ; l'analyse par IA viendra en v1)
    const recommendations: { text: string; chapterId?: number; priority: number }[] = [];
    for (const p of progress) {
      const exam = p.chapter.assessments[0];
      if (p.examBest !== null && exam && p.examBest < exam.passMark) {
        recommendations.push({ priority: 1, chapterId: p.chapterId, text: `Reprends « ${p.chapter.title} » : ${p.examBest}/20 au devoir, la moyenne est requise.` });
      } else if (p.quizBest !== null && p.quizBest < 60) {
        recommendations.push({ priority: 2, chapterId: p.chapterId, text: `Refais les questions de « ${p.chapter.title} » (${p.quizBest} % de réussite).` });
      } else if (p.quizBest !== null && p.examBest === null && exam) {
        recommendations.push({ priority: 3, chapterId: p.chapterId, text: `Tu es prêt(e) : passe le devoir noté de « ${p.chapter.title} ».` });
      }
    }
    for (const s of subjects) {
      if (s.average !== null && s.average < 10) recommendations.push({ priority: 2, text: `Renforce ${s.name} : ta moyenne est de ${s.average}/20.` });
    }
    if (generalAverage !== null && generalAverage < profile.targetAverage) {
      recommendations.push({ priority: 4, text: `Il te manque ${r2(profile.targetAverage - generalAverage)} point(s) pour atteindre ton objectif de ${profile.targetAverage}/20.` });
    }
    recommendations.sort((a, b) => a.priority - b.priority);

    const earned = new Map(badges.map((b) => [b.code, b.earnedAt]));
    return {
      exam: profile.exam.code,
      series: profile.series.code,
      examYear: profile.examYear,
      targetAverage: profile.targetAverage,
      generalAverage,
      subjects,
      strengths: rated.filter((s) => s.average! >= 14).map((s) => s.name),
      weaknesses: rated.filter((s) => s.average! < 10).map((s) => s.name),
      curve: official.map((a) => ({ date: a.submittedAt, score: r2(on20(a)), label: a.assessment.chapter?.title ?? a.assessment.title })),
      history: [...attempts].reverse().map((a) => ({
        id: a.id,
        title: a.assessment.title,
        subject: a.assessment.chapter?.subject.name ?? a.assessment.subject?.name ?? '',
        score: r2(on20(a)),
        status: a.status,
        official: a.isOfficial,
        submittedAt: a.submittedAt,
      })),
      resume,
      recommendations: recommendations.slice(0, 6),
      badges: BADGES.map((b) => ({ ...b, earnedAt: earned.get(b.code) ?? null })),
      stats: {
        chaptersStarted: progress.length,
        quizzesDone: await this.prisma.quizResult.count({ where: { userId } }),
        examsSubmitted: attempts.length,
      },
    };
  }
}
