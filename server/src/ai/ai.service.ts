import Anthropic from '@anthropic-ai/sdk';
import {
  BadGatewayException,
  BadRequestException,
  HttpException,
  Injectable,
  Logger,
  NotFoundException,
  ServiceUnavailableException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';
import { UPLOAD_NAME } from '../assessments/assessments.service';
import { audit } from '../common/audit';
import { AuthUser } from '../common/auth';
import { PrismaService } from '../common/prisma.service';
import { assertCanSeeStudent } from '../common/scope';
import { seriesWhere } from '../curriculum/curriculum.service';
import { ACTIVITIES, Activity, DAYS, Day, PlanChapter, rulesPlan, StudyPlan } from './plan-rules';

const MODEL = process.env.AI_MODEL || 'claude-opus-5-5';
/** Un plan IA par élève toutes les 12 h : le coût reste maîtrisé. */
const PLAN_COOLDOWN_MS = 12 * 3600 * 1000;
const MAX_PHOTOS = 8;
const MEDIA: Record<string, 'image/jpeg' | 'image/png' | 'image/webp'> = { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp' };

const PLAN_SYSTEM = `Tu es conseiller pédagogique pour des élèves ivoiriens qui préparent le BEPC ou le BAC.
Tu reçois l'état de progression d'un élève (chapitres, scores, moyennes, coefficients) et tu construis un plan de révision réaliste.

Règles :
- N'utilise que les chapterId fournis. N'invente aucun chapitre.
- Mets d'abord les devoirs ratés (examBest < passMark) et les matières faibles à gros coefficient.
- Respecte le temps disponible par semaine (somme des minutes ≈ minutesPerWeek) et les jours d'étude indiqués.
- Une séance dure entre 15 et 90 minutes. Alterne les matières dans la semaine.
- « why » explique en une phrase courte, à l'élève, pourquoi cette séance (tutoiement, français simple).
- « summary » : 2 ou 3 phrases d'encouragement et de diagnostic honnête. « tips » : 3 à 5 conseils de méthode concrets.`;

const GRADE_SYSTEM = `Tu aides un enseignant ivoirien à corriger une copie de BEPC ou de BAC.
Tu reçois le sujet, le barème, le corrigé officiel et la copie de l'élève (texte saisi et/ou photos de la copie manuscrite).

Règles :
- Tu proposes, l'enseignant décide : sois juste et explique chaque note.
- Note selon le barème et le corrigé : démarche correcte, justification, résultat. Accorde des points partiels quand la démarche est juste.
- suggestedPoints est un multiple de 0,25 compris entre 0 et maxPoints de l'item.
- Si la photo est illisible ou si la réponse à un item est absente, dis-le dans rationale et propose 0 avec confidence « low ».
- transcription : recopie fidèlement ce qui est écrit sur les photos (formules en LaTeX entre $…$), sans corriger les fautes. Chaîne vide s'il n'y a pas de photo.
- feedback : une phrase adressée à l'élève (tutoiement), constructive.`;

const PLAN_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['summary', 'weeks', 'tips'],
  properties: {
    summary: { type: 'string' },
    weeks: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['week', 'theme', 'sessions'],
        properties: {
          week: { type: 'integer' },
          theme: { type: 'string' },
          sessions: {
            type: 'array',
            items: {
              type: 'object',
              additionalProperties: false,
              required: ['day', 'chapterId', 'activity', 'minutes', 'why'],
              properties: {
                day: { type: 'string', enum: [...DAYS] },
                chapterId: { type: 'integer' },
                activity: { type: 'string', enum: [...ACTIVITIES] },
                minutes: { type: 'integer' },
                why: { type: 'string' },
              },
            },
          },
        },
      },
    },
    tips: { type: 'array', items: { type: 'string' } },
  },
};

const GRADE_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['transcription', 'items', 'generalComment'],
  properties: {
    transcription: { type: 'string' },
    items: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['itemId', 'suggestedPoints', 'confidence', 'rationale', 'feedback'],
        properties: {
          itemId: { type: 'integer' },
          suggestedPoints: { type: 'number' },
          confidence: { type: 'string', enum: ['low', 'medium', 'high'] },
          rationale: { type: 'string' },
          feedback: { type: 'string' },
        },
      },
    },
    generalComment: { type: 'string' },
  },
};

export interface PlanOptions {
  minutesPerWeek?: number;
  weeks?: number;
  studyDays?: Day[];
}

@Injectable()
export class AiService {
  private readonly log = new Logger('AI');
  private readonly client = process.env.ANTHROPIC_API_KEY ? new Anthropic() : null;

  constructor(private readonly prisma: PrismaService) {}

  get enabled() {
    return this.client !== null;
  }

  /** Appel au modèle avec sortie JSON contrainte par le schéma. */
  private async json<T>(system: string, content: Anthropic.Beta.BetaContentBlockParam[], schema: Record<string, unknown>, maxTokens: number): Promise<T> {
    if (!this.client) throw new ServiceUnavailableException("L'assistant IA n'est pas configuré sur ce serveur.");
    let res: Anthropic.Beta.BetaMessage;
    try {
      res = await this.client.beta.messages.create({
        model: MODEL,
        max_tokens: maxTokens,
        betas: ['server-side-fallback-2026-07-01'],
        fallbacks: 'default',
        system,
        messages: [{ role: 'user', content }],
        output_config: { effort: 'medium', format: { type: 'json_schema', schema } },
      });
    } catch (e) {
      if (e instanceof Anthropic.RateLimitError) throw new HttpException("L'assistant IA est très demandé. Réessaie dans une minute.", 429);
      if (e instanceof Anthropic.APIError) {
        this.log.error(`Erreur API ${e.status} : ${e.message}`);
        throw new BadGatewayException("L'assistant IA ne répond pas pour le moment.");
      }
      throw e;
    }
    if (res.stop_reason === 'refusal') throw new UnprocessableEntityException("L'assistant IA n'a pas pu traiter cette demande.");
    if (res.stop_reason === 'max_tokens') throw new BadGatewayException("La réponse de l'assistant IA était trop longue. Réessaie.");
    const text = res.content.flatMap((b) => (b.type === 'text' ? [b.text] : [])).join('');
    try {
      return JSON.parse(text) as T;
    } catch {
      throw new BadGatewayException("Réponse de l'assistant IA illisible. Réessaie.");
    }
  }

  // ───────────── Plan de révision ─────────────

  /** Chapitres de la série de l'élève avec sa progression, prêts pour le planificateur. */
  private async planContext(userId: string) {
    const profile = await this.prisma.studentProfile.findUnique({
      where: { userId },
      include: { exam: true, series: { include: { subjects: { include: { subject: true } } } } },
    });
    if (!profile) throw new BadRequestException('Plan de révision réservé aux élèves');
    const coef = new Map(profile.series.subjects.map((s) => [s.subjectId, s.coefficient]));
    const [chapters, progress, attempts] = await Promise.all([
      this.prisma.chapter.findMany({
        where: { examId: profile.examId, status: 'PUBLISHED', subjectId: { in: [...coef.keys()] }, ...seriesWhere(profile.series.code) },
        orderBy: [{ subjectId: 'asc' }, { orderIndex: 'asc' }],
        include: { subject: true, assessments: { where: { type: 'CHAPTER_EXAM' }, select: { passMark: true }, take: 1 } },
      }),
      this.prisma.chapterProgress.findMany({ where: { userId } }),
      this.prisma.attempt.findMany({
        where: { userId, isOfficial: true, status: 'GRADED' },
        include: { assessment: { select: { totalPoints: true, subjectId: true, chapter: { select: { subjectId: true } } } } },
      }),
    ]);
    const bySubject = new Map<number, number[]>();
    for (const a of attempts) {
      const sid = a.assessment.chapter?.subjectId ?? a.assessment.subjectId;
      if (!sid) continue;
      bySubject.set(sid, [...(bySubject.get(sid) ?? []), ((a.finalScore ?? a.autoScore) * 20) / a.assessment.totalPoints]);
    }
    const avg = (xs?: number[]) => (xs?.length ? Math.round((xs.reduce((s, x) => s + x, 0) / xs.length) * 100) / 100 : null);
    const prog = new Map(progress.map((p) => [p.chapterId, p]));
    const list: PlanChapter[] = chapters.map((c) => {
      const p = prog.get(c.id);
      return {
        id: c.id,
        title: c.title,
        subject: c.subject.name,
        coefficient: coef.get(c.subjectId) ?? 1,
        estimatedMinutes: c.estimatedMinutes,
        courseDone: p?.courseDone ?? false,
        summaryDone: p?.summaryDone ?? false,
        quizBest: p?.quizBest ?? null,
        examBest: p?.examBest ?? null,
        passMark: c.assessments[0]?.passMark ?? 10,
        subjectAverage: avg(bySubject.get(c.subjectId)),
      };
    });
    // Date d'examen indicative : début juin de l'année de session (à ajuster quand la DECO publie le calendrier).
    const examDate = new Date(Date.UTC(profile.examYear, 5, 1));
    const weeksLeft = Math.max(0, Math.ceil((examDate.getTime() - Date.now()) / (7 * 24 * 3600 * 1000)));
    return { profile, chapters: list, weeksLeft };
  }

  async getPlan(userId: string) {
    const p = await this.prisma.studentProfile.findUnique({ where: { userId }, select: { aiPlan: true, aiPlanAt: true } });
    if (!p) throw new BadRequestException('Plan de révision réservé aux élèves');
    const plan = (p.aiPlan as unknown as StudyPlan | null) ?? null;
    return { plan: plan && (await this.withTitles(plan)), aiEnabled: this.enabled, nextAiAt: this.nextAiAt(p) };
  }

  /** Ajoute titre et matière à chaque séance pour l'affichage. */
  private async withTitles(plan: StudyPlan) {
    const ids = [...new Set(plan.weeks.flatMap((w) => w.sessions.map((s) => s.chapterId)))];
    const chapters = await this.prisma.chapter.findMany({ where: { id: { in: ids } }, select: { id: true, title: true, subject: { select: { name: true } } } });
    const titles = new Map(chapters.map((c) => [c.id, { title: c.title, subject: c.subject.name }]));
    return { ...plan, weeks: plan.weeks.map((w) => ({ ...w, sessions: w.sessions.map((s) => ({ ...s, ...titles.get(s.chapterId) })) })) };
  }

  private nextAiAt(p: { aiPlan: Prisma.JsonValue; aiPlanAt: Date | null }) {
    const last = p.aiPlan as unknown as StudyPlan | null;
    if (!p.aiPlanAt || last?.source !== 'ai') return null;
    const next = p.aiPlanAt.getTime() + PLAN_COOLDOWN_MS;
    return next > Date.now() ? new Date(next) : null;
  }

  async generatePlan(userId: string, opts: PlanOptions) {
    const { profile, chapters, weeksLeft } = await this.planContext(userId);
    const minutesPerWeek = opts.minutesPerWeek ?? 300;
    const weeks = Math.max(1, Math.min(opts.weeks ?? 4, weeksLeft || 1, 8));
    const studyDays = opts.studyDays?.length ? opts.studyDays : DAYS.slice();
    const fallback = rulesPlan(chapters, { minutesPerWeek, weeks, weeksLeft, studyDays });

    let plan: StudyPlan = fallback;
    const wait = this.enabled && this.nextAiAt(profile);
    if (this.enabled && !wait) {
      const ids = new Set(chapters.map((c) => c.id));
      try {
        const ai = await this.json<Omit<StudyPlan, 'source' | 'generatedAt'>>(
          PLAN_SYSTEM,
          [
            {
              type: 'text',
              text: JSON.stringify({
                exam: profile.exam.code,
                series: profile.series.code,
                targetAverage: profile.targetAverage,
                weeksLeftBeforeExam: weeksLeft,
                planWeeks: weeks,
                minutesPerWeek,
                studyDays,
                chapters,
              }),
            },
          ],
          PLAN_SCHEMA,
          16000,
        );
        // Le schéma garantit la forme ; on vérifie encore le fond (chapitres réels, durées raisonnables).
        const cleanWeeks = ai.weeks.slice(0, weeks).map((w, i) => ({
          week: i + 1,
          theme: w.theme.slice(0, 120),
          sessions: w.sessions
            .filter((s) => ids.has(s.chapterId) && (DAYS as readonly string[]).includes(s.day) && (ACTIVITIES as readonly string[]).includes(s.activity))
            .map((s) => ({ ...s, day: s.day as Day, activity: s.activity as Activity, minutes: Math.max(15, Math.min(90, Math.round(s.minutes))), why: s.why.slice(0, 200) })),
        }));
        if (cleanWeeks.some((w) => w.sessions.length)) {
          plan = {
            source: 'ai',
            generatedAt: new Date().toISOString(),
            summary: ai.summary.slice(0, 600),
            weeks: cleanWeeks,
            tips: ai.tips.slice(0, 5).map((t) => t.slice(0, 200)),
          };
        }
      } catch (e) {
        // Le plan par règles reste disponible : l'élève n'est jamais bloqué par l'IA.
        this.log.warn(`Plan IA indisponible, plan par règles utilisé : ${(e as Error).message}`);
      }
    }

    const saved = await this.prisma.studentProfile.update({
      where: { userId },
      data: { aiPlan: plan as unknown as Prisma.InputJsonValue, aiPlanAt: new Date() },
      select: { aiPlan: true, aiPlanAt: true },
    });
    return {
      plan: await this.withTitles(plan),
      aiEnabled: this.enabled,
      nextAiAt: this.nextAiAt(saved),
    };
  }

  // ───────────── Aide à la correction ─────────────

  async gradeSuggestions(user: AuthUser, attemptId: string) {
    const attempt = await this.prisma.attempt.findUnique({
      where: { id: attemptId },
      include: {
        assessment: { include: { chapter: { include: { subject: true } }, subject: true } },
        answers: { include: { item: true }, orderBy: { item: { orderIndex: 'asc' } } },
      },
    });
    if (!attempt) throw new NotFoundException('Copie introuvable');
    await assertCanSeeStudent(this.prisma, user, attempt.userId);

    // Seuls les items qui demandent un jugement : questions ouvertes, démarches et copies photographiées.
    const items = attempt.answers.filter((a) => a.item.type !== 'MCQ' && (a.needsManual || a.item.type === 'OPEN' || a.photoUrl));
    if (!items.length) throw new BadRequestException('Cette copie est entièrement corrigée automatiquement.');

    const content: Anthropic.Beta.BetaContentBlockParam[] = [];
    const photos = [...new Set(items.map((a) => a.photoUrl).filter((p): p is string => !!p && UPLOAD_NAME.test(p)))].slice(0, MAX_PHOTOS);
    for (const [i, name] of photos.entries()) {
      const path = join(process.cwd(), 'uploads', name);
      if (!existsSync(path)) continue;
      content.push({ type: 'text', text: `Photo ${i + 1} de la copie :` });
      content.push({ type: 'image', source: { type: 'base64', media_type: MEDIA[name.split('.').pop()!], data: readFileSync(path).toString('base64') } });
    }
    const subject = attempt.assessment.chapter?.subject.name ?? attempt.assessment.subject?.name ?? '';
    content.push({
      type: 'text',
      text: JSON.stringify({
        subject,
        assessment: attempt.assessment.title,
        items: items.map((a) => ({
          itemId: a.item.id,
          section: a.item.section,
          question: a.item.prompt,
          maxPoints: a.item.points,
          autoPointsForResult: a.item.type === 'NUMERIC' ? a.autoPoints : undefined,
          officialCorrection: a.item.correction,
          expected: a.item.answer,
          studentTypedAnswer: a.response ?? null,
          photo: a.photoUrl ? photos.indexOf(a.photoUrl) + 1 || null : null,
        })),
      }),
    });

    const out = await this.json<{
      transcription: string;
      items: { itemId: number; suggestedPoints: number; confidence: 'low' | 'medium' | 'high'; rationale: string; feedback: string }[];
      generalComment: string;
    }>(GRADE_SYSTEM, content, GRADE_SCHEMA, 16000);

    const max = new Map(items.map((a) => [a.item.id, a.item.points]));
    const suggestions = out.items
      .filter((s) => max.has(s.itemId))
      .map((s) => ({
        ...s,
        suggestedPoints: Math.max(0, Math.min(max.get(s.itemId)!, Math.round(s.suggestedPoints * 4) / 4)),
      }));
    await audit(this.prisma, user.id, 'ai.grade_suggest', 'attempt', attemptId, { items: suggestions.length, photos: photos.length });
    return { model: MODEL, transcription: out.transcription, items: suggestions, generalComment: out.generalComment };
  }

}
