export type ItemType = 'MCQ' | 'NUMERIC' | 'OPEN';

export interface SeedQuestion {
  type: ItemType;
  prompt: string;
  choices?: string[];
  /** MCQ: {index} · NUMERIC: {value, tolerance?} · OPEN: {model, keywords} */
  answer: Record<string, unknown>;
  explanation: string;
}

export interface SeedItem {
  section: string;
  sectionIntro?: string;
  prompt: string;
  type: ItemType;
  choices?: string[];
  answer: Record<string, unknown>;
  points: number;
  /** NUMERIC : points du résultat, corrigés automatiquement */
  resultPoints?: number;
  correction: string;
}

export interface SeedChapter {
  subject: string;
  order: number;
  title: string;
  objectives: string[];
  minutes: number;
  isFree?: boolean;
  officialRef?: string;
  /** Séries concernées (BAC). Absent : toutes les séries. */
  series?: string[];
  courseMd: string;
  summaryMd: string;
  questions: SeedQuestion[];
  assessment: {
    title: string;
    instructions: string;
    advice: string;
    durationMin: number;
    passMark?: number;
    blocksNext: boolean;
    items: SeedItem[];
  };
}
