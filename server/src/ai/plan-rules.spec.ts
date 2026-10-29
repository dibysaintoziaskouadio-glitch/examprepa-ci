import { nextStep, PlanChapter, rulesPlan } from './plan-rules';

const ch = (id: number, over: Partial<PlanChapter> = {}): PlanChapter => ({
  id,
  title: `Chapitre ${id}`,
  subject: 'Mathématiques',
  coefficient: 1,
  estimatedMinutes: 60,
  courseDone: false,
  summaryDone: false,
  quizBest: null,
  examBest: null,
  passMark: 10,
  subjectAverage: null,
  ...over,
});

describe('plan de révision par règles', () => {
  it('propose la bonne étape suivante', () => {
    expect(nextStep(ch(1))!.activity).toBe('cours');
    expect(nextStep(ch(1, { courseDone: true }))!.activity).toBe('fiche');
    expect(nextStep(ch(1, { courseDone: true, summaryDone: true }))!.activity).toBe('quiz');
    expect(nextStep(ch(1, { courseDone: true, summaryDone: true, quizBest: 80 }))!.activity).toBe('devoir');
    expect(nextStep(ch(1, { courseDone: true, summaryDone: true, quizBest: 80, examBest: 8 }))!.activity).toBe('revision');
    expect(nextStep(ch(1, { courseDone: true, summaryDone: true, quizBest: 90, examBest: 16 }))).toBeNull();
  });

  it('place les devoirs ratés et les gros coefficients en premier', () => {
    const plan = rulesPlan(
      [ch(1), ch(2, { courseDone: true, summaryDone: true, quizBest: 70, examBest: 6 }), ch(3, { coefficient: 4, subject: 'Français' })],
      { minutesPerWeek: 300, weeks: 2, weeksLeft: 10 },
    );
    const order = plan.weeks.flatMap((w) => w.sessions.map((s) => s.chapterId));
    expect(order[0]).toBe(2);
    expect(order[1]).toBe(3);
    expect(plan.source).toBe('rules');
  });

  it('respecte le temps disponible par semaine', () => {
    const chapters = Array.from({ length: 30 }, (_, i) => ch(i + 1));
    const plan = rulesPlan(chapters, { minutesPerWeek: 200, weeks: 3, weeksLeft: 3, studyDays: ['mercredi', 'samedi'] });
    expect(plan.weeks).toHaveLength(3);
    for (const w of plan.weeks) {
      expect(w.sessions.reduce((s, x) => s + x.minutes, 0)).toBeLessThanOrEqual(200);
      expect(w.sessions.every((s) => s.day === 'mercredi' || s.day === 'samedi')).toBe(true);
    }
  });
});
