/**
 * Moteur de correction automatique (fonctions pures, testées dans grading.spec.ts).
 *
 *  - MCQ     : tout ou rien.
 *  - NUMERIC : `resultPoints` si la valeur est juste ; le reste des points (justification)
 *              est attribué par l'enseignant si l'élève a rédigé ou joint une photo.
 *  - OPEN    : corrigé par l'enseignant.
 */

export type ItemType = 'MCQ' | 'NUMERIC' | 'OPEN';

export interface GradableItem {
  type: ItemType;
  points: number;
  resultPoints: number;
  answer: unknown;
}

export interface ItemResponse {
  choice?: number;
  value?: string;
  work?: string;
  text?: string;
}

export interface ItemGrade {
  isCorrect: boolean | null;
  autoPoints: number;
  needsManual: boolean;
}

/**
 * Lit un nombre saisi par un élève : « 7,5 cm », « 3 750 000 FCFA », « 4/3 », « -2.5 ».
 */
export function parseNumber(input: string | number | null | undefined): number | null {
  if (input === null || input === undefined) return null;
  if (typeof input === 'number') return Number.isFinite(input) ? input : null;
  const s = input
    .replace(/[  ]/g, ' ')
    .replace(/(\d)\s+(?=\d)/g, '$1')
    .replace(/(\d),(\d)/g, '$1.$2');
  const frac = s.match(/(-?\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/);
  if (frac) {
    const den = Number(frac[2]);
    return den === 0 ? null : Number(frac[1]) / den;
  }
  const m = s.match(/-?\d+(?:\.\d+)?/);
  return m ? Number(m[0]) : null;
}

export function gradeItem(item: GradableItem, response: ItemResponse | null | undefined, hasPhoto = false): ItemGrade {
  const r = response ?? {};
  switch (item.type) {
    case 'MCQ': {
      const key = item.answer as { index: number };
      const ok = typeof r.choice === 'number' && r.choice === key.index;
      return { isCorrect: r.choice === undefined ? false : ok, autoPoints: ok ? item.points : 0, needsManual: false };
    }
    case 'NUMERIC': {
      const key = item.answer as { value: number; tolerance?: number };
      const v = parseNumber(r.value);
      const ok = v !== null && Math.abs(v - key.value) <= (key.tolerance ?? 0.01);
      const hasManualPart = item.points - item.resultPoints > 0;
      const hasWork = !!r.work?.trim() || hasPhoto;
      return {
        isCorrect: ok,
        autoPoints: ok ? item.resultPoints : 0,
        needsManual: hasManualPart && hasWork,
      };
    }
    case 'OPEN': {
      const hasAnswer = !!r.text?.trim() || hasPhoto;
      return { isCorrect: null, autoPoints: 0, needsManual: hasAnswer };
    }
  }
}

export const round2 = (n: number) => Math.round(n * 100) / 100;

export function appreciation(score: number, total = 20): string {
  const n = (score * 20) / total;
  if (n < 8) return 'Insuffisant. Reprends le cours et la fiche de révision, puis refais les questions de cours.';
  if (n < 10) return 'Fragile. Les bases sont là, mais attention à la rédaction et aux hypothèses.';
  if (n < 14) return 'Assez bien. Tu maîtrises les calculs ; travaille les justifications et le problème.';
  if (n < 17) return 'Bien. Bonne maîtrise ; soigne les justifications pour gagner les derniers points.';
  return 'Excellent ! Tu es prêt(e) pour l’examen sur ce chapitre 💎';
}
