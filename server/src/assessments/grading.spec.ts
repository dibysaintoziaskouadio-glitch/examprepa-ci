import { appreciation, gradeItem, parseNumber } from './grading';

describe('parseNumber', () => {
  it.each([
    ['7,5 cm', 7.5],
    ['3 750 000 FCFA', 3750000],
    ['3 750 000', 3750000],
    ['4/3', 4 / 3],
    ['-2.5', -2.5],
    ['RN = 7,5', 7.5],
    [12, 12],
  ])('lit %p', (input, expected) => {
    expect(parseNumber(input as string)).toBeCloseTo(expected as number, 6);
  });

  it('renvoie null sans nombre ou division par zéro', () => {
    expect(parseNumber('je ne sais pas')).toBeNull();
    expect(parseNumber('3/0')).toBeNull();
    expect(parseNumber(undefined)).toBeNull();
  });
});

describe('gradeItem', () => {
  const mcq = { type: 'MCQ' as const, points: 1, resultPoints: 0, answer: { index: 1 } };
  const num = { type: 'NUMERIC' as const, points: 1.5, resultPoints: 0.5, answer: { value: 7.5 } };
  const open = { type: 'OPEN' as const, points: 2, resultPoints: 0, answer: {} };

  it('QCM : tout ou rien', () => {
    expect(gradeItem(mcq, { choice: 1 })).toEqual({ isCorrect: true, autoPoints: 1, needsManual: false });
    expect(gradeItem(mcq, { choice: 0 })).toEqual({ isCorrect: false, autoPoints: 0, needsManual: false });
    expect(gradeItem(mcq, undefined).autoPoints).toBe(0);
  });

  it('numérique : points du résultat automatiques, justification à corriger', () => {
    expect(gradeItem(num, { value: '7,5 cm', work: 'Thalès…' })).toEqual({
      isCorrect: true,
      autoPoints: 0.5,
      needsManual: true,
    });
    expect(gradeItem(num, { value: '7,5' })).toEqual({ isCorrect: true, autoPoints: 0.5, needsManual: false });
    expect(gradeItem(num, { value: '8' }).autoPoints).toBe(0);
    expect(gradeItem(num, { value: '8' }, true).needsManual).toBe(true);
  });

  it('numérique : respecte la tolérance', () => {
    const tan = { type: 'NUMERIC' as const, points: 2, resultPoints: 2, answer: { value: 1.33, tolerance: 0.01 } };
    expect(gradeItem(tan, { value: '4/3' }).isCorrect).toBe(true);
    expect(gradeItem(tan, { value: '1,3' }).isCorrect).toBe(false);
  });

  it('question ouverte : à corriger seulement si l’élève a répondu', () => {
    expect(gradeItem(open, { text: 'Les rapports sont égaux…' }).needsManual).toBe(true);
    expect(gradeItem(open, { text: '   ' }).needsManual).toBe(false);
    expect(gradeItem(open, {}, true).needsManual).toBe(true);
  });
});

describe('appreciation', () => {
  it('suit le barème', () => {
    expect(appreciation(5)).toMatch(/^Insuffisant/);
    expect(appreciation(10)).toMatch(/^Assez bien/);
    expect(appreciation(18)).toMatch(/^Excellent/);
  });
});
