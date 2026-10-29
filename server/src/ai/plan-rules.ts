/**
 * Plan de révision calculé sans IA : sert quand aucune clé n'est configurée,
 * et de filet de sécurité si l'appel au modèle échoue.
 */

export const DAYS = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'] as const;
export type Day = (typeof DAYS)[number];
export const ACTIVITIES = ['cours', 'fiche', 'quiz', 'devoir', 'revision'] as const;
export type Activity = (typeof ACTIVITIES)[number];

export interface PlanChapter {
  id: number;
  title: string;
  subject: string;
  coefficient: number;
  estimatedMinutes: number;
  courseDone: boolean;
  summaryDone: boolean;
  quizBest: number | null;
  examBest: number | null;
  passMark: number;
  subjectAverage: number | null;
}

export interface PlanSession {
  day: Day;
  chapterId: number;
  activity: Activity;
  minutes: number;
  why: string;
}

export interface StudyPlan {
  source: 'ai' | 'rules';
  generatedAt: string;
  summary: string;
  weeks: { week: number; theme: string; sessions: PlanSession[] }[];
  tips: string[];
}

/** Ce qu'il reste à faire sur un chapitre, et la raison. */
export function nextStep(c: PlanChapter): { activity: Activity; why: string } | null {
  if (c.examBest !== null && c.examBest < c.passMark) return { activity: 'revision', why: `devoir à ${c.examBest}/20 : à reprendre` };
  if (c.quizBest !== null && c.quizBest < 60) return { activity: 'quiz', why: `quiz réussi à ${Math.round(c.quizBest)} %` };
  if (!c.courseDone) return { activity: 'cours', why: 'chapitre pas encore étudié' };
  if (!c.summaryDone) return { activity: 'fiche', why: 'fiche de révision à lire' };
  if (c.quizBest === null) return { activity: 'quiz', why: 'quiz pas encore fait' };
  if (c.examBest === null) return { activity: 'devoir', why: 'devoir noté pas encore passé' };
  if (c.examBest < 14) return { activity: 'revision', why: `devoir à ${c.examBest}/20 : peut mieux faire` };
  return null;
}

/** Priorité : plus c'est haut, plus tôt on le place. Les lacunes et les gros coefficients d'abord. */
export function priority(c: PlanChapter, step: Activity) {
  const urgency = { revision: 40, quiz: 25, devoir: 20, fiche: 15, cours: 10 }[step];
  const weakSubject = c.subjectAverage !== null && c.subjectAverage < 10 ? 15 : 0;
  return urgency + weakSubject + c.coefficient * 3;
}

const MINUTES: Record<Activity, number> = { cours: 45, fiche: 20, quiz: 20, devoir: 60, revision: 40 };

export function rulesPlan(chapters: PlanChapter[], opts: { minutesPerWeek: number; weeks: number; weeksLeft: number | null; studyDays?: Day[] }): StudyPlan {
  const days = opts.studyDays?.length ? opts.studyDays : DAYS.slice();
  const ranked = chapters
    .map((c) => ({ c, step: nextStep(c) }))
    .filter((x): x is { c: PlanChapter; step: { activity: Activity; why: string } } => x.step !== null)
    .sort((a, b) => priority(b.c, b.step.activity) - priority(a.c, a.step.activity) || a.c.id - b.c.id);
  // On alterne les matières (la plus urgente d'abord) pour ne pas passer une semaine entière sur une seule.
  const bySubject = new Map<string, typeof ranked>();
  for (const x of ranked) bySubject.set(x.c.subject, [...(bySubject.get(x.c.subject) ?? []), x]);
  const lanes = [...bySubject.values()];
  const queue: typeof ranked = [];
  while (lanes.some((l) => l.length)) for (const l of lanes) if (l.length) queue.push(l.shift()!);

  const weeks: StudyPlan['weeks'] = [];
  let cursor = 0;
  for (let w = 1; w <= opts.weeks && cursor < queue.length; w++) {
    const sessions: PlanSession[] = [];
    let budget = opts.minutesPerWeek;
    let d = 0;
    while (cursor < queue.length && budget >= 15) {
      const { c, step } = queue[cursor];
      const minutes = Math.min(step.activity === 'cours' ? Math.max(30, Math.min(c.estimatedMinutes, 60)) : MINUTES[step.activity], budget);
      sessions.push({ day: days[d % days.length], chapterId: c.id, activity: step.activity, minutes, why: step.why });
      budget -= minutes;
      d++;
      cursor++;
    }
    const subjects = [...new Set(sessions.map((s) => chapters.find((c) => c.id === s.chapterId)!.subject))];
    weeks.push({ week: w, theme: subjects.slice(0, 3).join(', '), sessions });
  }

  const gaps = queue.filter((x) => x.step.activity === 'revision').length;
  const summary =
    queue.length === 0
      ? 'Tous tes chapitres sont maîtrisés. Entraîne-toi avec les examens blancs.'
      : `${queue.length} étape(s) à faire${gaps ? `, dont ${gaps} devoir(s) à reprendre en priorité` : ''}.` +
        (opts.weeksLeft !== null ? ` Il reste environ ${opts.weeksLeft} semaine(s) avant l'examen.` : '');
  return {
    source: 'rules',
    generatedAt: new Date().toISOString(),
    summary,
    weeks,
    tips: [
      'Commence chaque séance par 5 minutes de relecture de la fiche de la veille.',
      'Refais les questions ratées le lendemain : c\'est là que l\'on retient le plus.',
      'Passe un examen blanc chronométré par matière avant l\'examen.',
    ],
  };
}
