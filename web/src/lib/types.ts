export type Role = 'STUDENT' | 'TEACHER' | 'ADMIN';
export type ItemType = 'MCQ' | 'NUMERIC' | 'OPEN';

export interface Series {
  id: number;
  code: string;
  name: string;
}
export interface Exam {
  id: number;
  code: string;
  name: string;
  gradeLevel: string;
  series: Series[];
}

export interface Me {
  id: string;
  role: Role;
  status: string;
  phone: string | null;
  email: string | null;
  firstName: string;
  lastName: string;
  student: null | {
    examId: number;
    seriesId: number;
    schoolName: string | null;
    city: string | null;
    examYear: number;
    targetAverage: number;
    exam: Exam;
    series: Series;
  };
  teacher: null | { schoolName: string | null; subjects: string[]; validatedAt: string | null };
}

export interface SubjectSummary {
  id: number;
  code: string;
  name: string;
  icon: string;
  color: string;
  coefficient: number;
  chapterCount: number;
  progress: number;
}

export interface ChapterSummary {
  id: number;
  orderIndex: number;
  title: string;
  objectives: string[];
  estimatedMinutes: number;
  version: number;
  locked: boolean;
  percent: number;
  quizBest: number | null;
  examBest: number | null;
  assessments: { id: number; title: string; passMark: number; blocksNext: boolean; durationMin: number }[];
}

export interface Question {
  id: number;
  type: ItemType;
  prompt: string;
  choices: string[];
  answer: { index?: number; value?: number; tolerance?: number; model?: string; keywords?: string[] };
  explanation: string;
}

export interface ChapterProgress {
  courseDone: boolean;
  summaryDone: boolean;
  quizBest: number | null;
  examBest: number | null;
}

export interface ChapterPack {
  id: number;
  title: string;
  version: number;
  objectives: string[];
  estimatedMinutes: number;
  courseMd: string;
  summaryMd: string;
  officialRef: string | null;
  validatedAt: string | null;
  subject: { id: number; code: string; name: string; icon: string; color: string };
  exam: { code: string };
  questions: Question[];
  assessments: { id: number; title: string; instructions: string; durationMin: number; totalPoints: number; passMark: number; blocksNext: boolean; _count: { items: number } }[];
  progress: ChapterProgress | null;
  next: { id: number; title: string } | null;
  percent: number;
}

export interface AssessmentItem {
  id: number;
  orderIndex: number;
  section: string;
  sectionIntro: string | null;
  prompt: string;
  type: ItemType;
  choices: string[];
  points: number;
  resultPoints: number;
}

export interface AssessmentSubject {
  id: number;
  title: string;
  instructions: string;
  durationMin: number;
  totalPoints: number;
  passMark: number;
  blocksNext: boolean;
  previousAttempts: number;
  chapter: { id: number; title: string; subject: { name: string } } | null;
  items: AssessmentItem[];
}

export interface Response {
  choice?: number;
  value?: string;
  work?: string;
  text?: string;
}

export interface AttemptAnswer {
  id: number;
  itemId: number;
  section: string;
  sectionIntro: string | null;
  prompt: string;
  type: ItemType;
  choices: string[];
  points: number;
  resultPoints: number;
  expected: { index?: number; value?: number; model?: string };
  correction: string;
  response: Response | null;
  photoUrl: string | null;
  isCorrect: boolean | null;
  autoPoints: number;
  needsManual: boolean;
  manualPoints: number | null;
  awarded: number;
  comment: string | null;
}

export interface AttemptDetail {
  id: string;
  status: 'SUBMITTED' | 'GRADED';
  isOfficial: boolean;
  startedAt: string;
  submittedAt: string;
  timeSpentS: number;
  late: boolean;
  autoScore: number;
  finalScore: number | null;
  score: number;
  teacherComment: string | null;
  gradedAt: string | null;
  appreciation: string | null;
  passed: boolean | null;
  user: { id: string; firstName: string; lastName: string; student: { schoolName: string | null } | null };
  gradedBy: { firstName: string; lastName: string } | null;
  nextChapter: { id: number; title: string } | null;
  assessment: {
    id: number;
    title: string;
    totalPoints: number;
    passMark: number;
    blocksNext: boolean;
    durationMin: number;
    advice: string;
    chapter: { id: number; title: string; subject: string } | null;
  };
  answers: AttemptAnswer[];
}

export interface Badge {
  code: string;
  tier: string;
  icon: string;
  title: string;
  description: string;
  earnedAt: string | null;
}

export interface Dashboard {
  exam: string;
  series: string;
  examYear: number;
  targetAverage: number;
  generalAverage: number | null;
  subjects: { id: number; name: string; icon: string; color: string; coefficient: number; average: number | null; count: number }[];
  strengths: string[];
  weaknesses: string[];
  curve: { date: string; score: number; label: string }[];
  history: { id: string; title: string; subject: string; score: number; status: string; official: boolean; submittedAt: string }[];
  resume: { chapterId: number; title: string; subject: string; percent: number; step: string } | null;
  recommendations: { text: string; chapterId?: number; priority: number }[];
  badges: Badge[];
  stats: { chaptersStarted: number; quizzesDone: number; examsSubmitted: number };
}

// ───────────── v1 : classes, messagerie, abonnements, révisions, combat, IA ─────────────

export interface ClassSummary {
  id: number;
  name: string;
  code: string;
  schoolName: string | null;
  archived: boolean;
  exam: { code: string };
  teacher: { id: string; firstName: string; lastName: string };
  _count: { members: number };
}

export interface Announcement {
  id: number;
  body: string;
  createdAt: string;
  classroom?: { id: number; name: string };
}

export interface ClassDetail {
  id: number;
  name: string;
  code?: string;
  schoolName: string | null;
  archived: boolean;
  exam: { id: number; code: string };
  teacher: { id: string; firstName: string; lastName: string };
  isOwner: boolean;
  membersCount: number;
  members?: { id: string; firstName: string; lastName: string; lastSeenAt: string | null; joinedAt: string; examsCount: number; average: number | null }[];
  announcements: Announcement[];
  assignments: {
    id: number;
    title: string;
    dueAt: string | null;
    durationMin: number;
    subject: { name: string; icon: string } | null;
    _count: { items: number };
    myAttempt: { id: string; status: string; finalScore: number | null; autoScore: number } | null;
  }[];
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  role: Role;
}

export interface Thread {
  with: Person;
  last: { body: string; createdAt: string; mine: boolean };
  unread: number;
}

export interface ChatMessage {
  id: number;
  fromId: string;
  body: string;
  createdAt: string;
  readAt: string | null;
  flaggedAt: string | null;
}

export interface Plan {
  id: number;
  code: string;
  name: string;
  description: string;
  priceXof: number;
  durationDays: number;
  examId: number | null;
  active: boolean;
}

export interface SubscriptionStatus {
  paywall: boolean;
  premium: boolean;
  provider: string;
  subscription: null | { startsAt: string; endsAt: string; plan: { code: string; name: string } };
}

export interface Payment {
  id: string;
  status: 'PENDING' | 'SUCCESS' | 'FAILED';
  amountXof: number;
  channel: string | null;
  provider: string;
  createdAt: string;
  plan: Plan;
}

export interface RevisionItem {
  id: number;
  type: 'MOCK_EXAM' | 'PAST_PAPER';
  title: string;
  year: number | null;
  durationMin: number;
  subject: { id: number; name: string; icon: string } | null;
  _count: { items: number };
  attempts: number;
  best: number | null;
}

export interface ChallengeSummary {
  id: string;
  status: 'PENDING' | 'DONE' | 'EXPIRED' | 'DECLINED';
  createdAt: string;
  expiresAt: string;
  challengerId: string;
  opponentId: string;
  challengerScore: number | null;
  opponentScore: number | null;
  challengerTimeS: number | null;
  opponentTimeS: number | null;
  subject: { name: string; icon: string };
  challenger: Person;
  opponent: Person;
}

export interface ChallengeDetail extends ChallengeSummary {
  me: 'challenger' | 'opponent';
  played: boolean;
  canPlay: boolean;
  questions: { id: number; type: ItemType; prompt: string; choices: string[]; answer?: Question['answer']; explanation?: string }[];
}

export interface Leaderboard {
  scope: 'school' | 'city' | 'national';
  period: 'week' | 'all';
  label: string | null;
  total: number;
  top: { userId: string; name: string; school: string | null; city: string | null; xp: number; rank: number }[];
  me: { userId: string; xp: number; rank: number } | null;
}

export type Day = 'lundi' | 'mardi' | 'mercredi' | 'jeudi' | 'vendredi' | 'samedi' | 'dimanche';

export interface StudyPlan {
  source: 'ai' | 'rules';
  generatedAt: string;
  summary: string;
  weeks: { week: number; theme: string; sessions: { day: Day; chapterId: number; activity: 'cours' | 'fiche' | 'quiz' | 'devoir' | 'revision'; minutes: number; why: string; title?: string; subject?: string }[] }[];
  tips: string[];
}

export interface AiGradeSuggestion {
  model: string;
  transcription: string;
  generalComment: string;
  items: { itemId: number; suggestedPoints: number; confidence: 'low' | 'medium' | 'high'; rationale: string; feedback: string }[];
}

export interface AuthoringItem {
  id?: number;
  section: string;
  sectionIntro?: string | null;
  prompt: string;
  type: ItemType;
  choices: string[];
  answer: { index?: number; value?: number; tolerance?: number; model?: string; keywords?: string[] };
  points: number;
  resultPoints?: number;
  correction: string;
  source?: string;
}

export interface AuthoringAssessment {
  id: number;
  type: 'MOCK_EXAM' | 'PAST_PAPER' | 'CLASS_ASSIGNMENT' | 'CHAPTER_EXAM';
  title: string;
  status: 'DRAFT' | 'PUBLISHED' | 'REVIEW';
  durationMin: number;
  totalPoints: number;
  year: number | null;
  dueAt: string | null;
  createdAt: string;
  authorId: string | null;
  subject: { name: string; icon: string } | null;
  exam: { code: string } | null;
  classroom: { id: number; name: string } | null;
  _count: { items: number; attempts: number };
}
