import { ChapterProgress } from '@prisma/client';

export interface ChapterGate {
  id: number;
  assessments: { passMark: number; blocksNext: boolean }[];
}

/** Avancement d'un chapitre : cours lu, fiche lue, quiz fait, devoir réussi. */
export function chapterPercent(chapter: ChapterGate, p?: ChapterProgress | null): number {
  const exam = chapter.assessments[0];
  const steps = [!!p?.courseDone, !!p?.summaryDone, p?.quizBest != null];
  if (exam) steps.push(p?.examBest != null && p.examBest >= exam.passMark);
  return Math.round((steps.filter(Boolean).length / steps.length) * 100);
}

/**
 * Un chapitre est verrouillé si le précédent a un devoir bloquant non réussi
 * (note < passMark). Le verrouillage se propage aux chapitres suivants.
 */
export function computeLocks(
  ordered: ChapterGate[],
  progress: Map<number, ChapterProgress>,
  bypass = false,
): boolean[] {
  let blocked = false;
  return ordered.map((c) => {
    const locked = !bypass && blocked;
    const exam = c.assessments[0];
    const passed = (progress.get(c.id)?.examBest ?? -1) >= (exam?.passMark ?? 0);
    blocked = locked || (!!exam?.blocksNext && !passed);
    return locked;
  });
}
