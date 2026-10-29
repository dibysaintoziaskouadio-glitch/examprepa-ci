import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { ChapterProgress } from '@prisma/client';
import { AuthUser } from '../common/auth';
import { PrismaService } from '../common/prisma.service';
import { chapterPercent, computeLocks } from './rules';

const gateSelect = { id: true, assessments: { select: { id: true, passMark: true, blocksNext: true } } } as const;

/** Chapitres visibles pour une série : ceux de la série et ceux communes à toutes (liste vide). */
export function seriesWhere(seriesCode: string | null) {
  return seriesCode ? { OR: [{ seriesCodes: { isEmpty: true } }, { seriesCodes: { has: seriesCode } }] } : {};
}

@Injectable()
export class CurriculumService {
  constructor(private readonly prisma: PrismaService) {}

  exams() {
    return this.prisma.exam.findMany({
      include: { series: { orderBy: { code: 'asc' } } },
      orderBy: { id: 'asc' },
    });
  }

  private async progressMap(userId: string, chapterIds: number[]) {
    const rows = await this.prisma.chapterProgress.findMany({
      where: { userId, chapterId: { in: chapterIds } },
    });
    return new Map<number, ChapterProgress>(rows.map((r) => [r.chapterId, r]));
  }

  /** Code de série de l'élève (null pour le personnel, qui voit tout). */
  async seriesCodeOf(user: AuthUser) {
    if (user.role !== 'STUDENT') return null;
    const p = await this.prisma.studentProfile.findUnique({ where: { userId: user.id }, select: { series: { select: { code: true } } } });
    return p?.series.code ?? null;
  }

  /** Examen et série de l'élève ; les enseignants peuvent les passer en paramètre. */
  private async context(user: AuthUser, examId?: number, seriesId?: number) {
    if (user.role === 'STUDENT') {
      const p = await this.prisma.studentProfile.findUniqueOrThrow({ where: { userId: user.id } });
      return { examId: p.examId, seriesId: p.seriesId };
    }
    if (!examId) {
      const first = await this.prisma.exam.findFirstOrThrow({ orderBy: { id: 'asc' } });
      examId = first.id;
    }
    if (!seriesId) {
      const first = await this.prisma.series.findFirstOrThrow({ where: { examId }, orderBy: { code: 'asc' } });
      seriesId = first.id;
    }
    return { examId, seriesId };
  }

  async subjects(user: AuthUser, examId?: number, seriesId?: number) {
    const ctx = await this.context(user, examId, seriesId);
    // Sans série précisée, un enseignant voit toutes les matières de l'examen (toutes séries confondues).
    const allSeries = user.role !== 'STUDENT' && !seriesId;
    const rows = await this.prisma.seriesSubject.findMany({
      where: allSeries ? { series: { examId: ctx.examId } } : { seriesId: ctx.seriesId },
      include: { subject: true },
      orderBy: { subject: { id: 'asc' } },
    });
    const links = [...new Map(rows.map((l) => [l.subjectId, l])).values()];
    const chapters = await this.prisma.chapter.findMany({
      where: { examId: ctx.examId, status: 'PUBLISHED', subjectId: { in: links.map((l) => l.subjectId) }, ...seriesWhere(await this.seriesCodeOf(user)) },
      select: { ...gateSelect, subjectId: true },
    });
    const progress = await this.progressMap(user.id, chapters.map((c) => c.id));

    return links.map(({ subject, coefficient }) => {
      const own = chapters.filter((c) => c.subjectId === subject.id);
      const percent = own.length
        ? Math.round(own.reduce((s, c) => s + chapterPercent(c, progress.get(c.id)), 0) / own.length)
        : 0;
      return { ...subject, coefficient, chapterCount: own.length, progress: percent };
    });
  }

  async chapters(user: AuthUser, subjectId: number, examId?: number) {
    const subject = await this.prisma.subject.findUnique({ where: { id: subjectId } });
    if (!subject) throw new NotFoundException('Matière introuvable');
    const ctx = await this.context(user, examId);
    const chapters = await this.prisma.chapter.findMany({
      where: { subjectId, examId: ctx.examId, status: 'PUBLISHED', ...seriesWhere(await this.seriesCodeOf(user)) },
      orderBy: { orderIndex: 'asc' },
      select: {
        id: true,
        orderIndex: true,
        title: true,
        objectives: true,
        estimatedMinutes: true,
        isFree: true,
        version: true,
        assessments: { select: { id: true, title: true, passMark: true, blocksNext: true, durationMin: true } },
      },
    });
    const progress = await this.progressMap(user.id, chapters.map((c) => c.id));
    const locks = computeLocks(chapters, progress, user.role !== 'STUDENT');

    return {
      subject,
      chapters: chapters.map((c, i) => {
        const p = progress.get(c.id);
        return {
          ...c,
          locked: locks[i],
          percent: chapterPercent(c, p),
          quizBest: p?.quizBest ?? null,
          examBest: p?.examBest ?? null,
        };
      }),
    };
  }

  /** Vrai si l'élève ne peut pas encore ouvrir ce chapitre. */
  async isLocked(chapter: { id: number; subjectId: number; examId: number }, user: AuthUser) {
    if (user.role !== 'STUDENT') return false;
    const siblings = await this.prisma.chapter.findMany({
      where: { subjectId: chapter.subjectId, examId: chapter.examId, status: 'PUBLISHED', ...seriesWhere(await this.seriesCodeOf(user)) },
      orderBy: { orderIndex: 'asc' },
      select: gateSelect,
    });
    const progress = await this.progressMap(user.id, siblings.map((c) => c.id));
    const idx = siblings.findIndex((c) => c.id === chapter.id);
    return idx > 0 && computeLocks(siblings, progress)[idx];
  }

  /**
   * Pack complet d'un chapitre (cours, fiche, quiz avec corrigés, résumé du devoir).
   * C'est ce JSON que l'application enregistre pour l'usage hors ligne.
   */
  async chapter(user: AuthUser, id: number) {
    const c = await this.prisma.chapter.findUnique({
      where: { id },
      include: {
        subject: true,
        exam: true,
        questions: { orderBy: { orderIndex: 'asc' } },
        assessments: {
          where: { status: 'PUBLISHED' },
          select: {
            id: true,
            title: true,
            instructions: true,
            durationMin: true,
            totalPoints: true,
            passMark: true,
            blocksNext: true,
            _count: { select: { items: true } },
          },
        },
      },
    });
    if (!c || (c.status !== 'PUBLISHED' && user.role === 'STUDENT')) throw new NotFoundException('Chapitre introuvable');
    const seriesCode = await this.seriesCodeOf(user);
    if (seriesCode && c.seriesCodes.length && !c.seriesCodes.includes(seriesCode)) throw new NotFoundException('Ce chapitre ne fait pas partie du programme de ta série');
    if (await this.isLocked(c, user)) {
      throw new ForbiddenException('Ce chapitre se débloque quand tu obtiens la moyenne au devoir du chapitre précédent.');
    }
    const progress = await this.prisma.chapterProgress.findUnique({
      where: { userId_chapterId: { userId: user.id, chapterId: id } },
    });
    const next = await this.prisma.chapter.findFirst({
      where: { subjectId: c.subjectId, examId: c.examId, status: 'PUBLISHED', orderIndex: { gt: c.orderIndex }, ...seriesWhere(seriesCode) },
      orderBy: { orderIndex: 'asc' },
      select: { id: true, title: true },
    });
    return { ...c, progress, next, percent: chapterPercent(c, progress) };
  }
}
