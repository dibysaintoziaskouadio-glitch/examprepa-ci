import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { AssessmentType, Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDateString,
  IsIn,
  IsInt,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Length,
  Max,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { randomInt } from 'crypto';
import { audit } from '../common/audit';
import { AuthUser } from '../common/auth';
import { PrismaService } from '../common/prisma.service';
import { PushService } from '../push/push.service';

export class ItemInputDto {
  @IsString() @Length(1, 120) section: string;
  @IsOptional() @IsString() @MaxLength(5000) sectionIntro?: string;
  @IsString() @Length(1, 5000) prompt: string;
  @IsIn(['MCQ', 'NUMERIC', 'OPEN']) type: 'MCQ' | 'NUMERIC' | 'OPEN';
  @IsOptional() @IsArray() @IsString({ each: true }) choices?: string[];
  @IsObject() answer: Record<string, unknown>;
  @Type(() => Number) @IsNumber() @Min(0.25) @Max(20) points: number;
  @IsOptional() @Type(() => Number) @IsNumber() @Min(0) resultPoints?: number;
  @IsOptional() @IsString() @MaxLength(5000) correction?: string;
}

export class AssessmentInputDto {
  @IsIn(['MOCK_EXAM', 'PAST_PAPER', 'CLASS_ASSIGNMENT']) type: 'MOCK_EXAM' | 'PAST_PAPER' | 'CLASS_ASSIGNMENT';
  @IsString() @Length(3, 160) title: string;
  @Type(() => Number) @IsInt() subjectId: number;
  @Type(() => Number) @IsInt() examId: number;
  @Type(() => Number) @IsInt() @Min(10) @Max(300) durationMin: number;
  @IsOptional() @IsString() @MaxLength(5000) instructions?: string;
  @IsOptional() @IsString() @MaxLength(5000) advice?: string;
  @IsOptional() @Type(() => Number) @IsInt() classroomId?: number;
  @IsOptional() @IsDateString() dueAt?: string;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1990) @Max(2100) year?: number;
  @IsOptional() @IsIn(['DRAFT', 'PUBLISHED']) status?: 'DRAFT' | 'PUBLISHED';
  @IsArray() @ArrayMinSize(1) @ArrayMaxSize(60) @ValidateNested({ each: true }) @Type(() => ItemInputDto) items: ItemInputDto[];
}

export class GenerateMockDto {
  @Type(() => Number) @IsInt() subjectId: number;
  @Type(() => Number) @IsInt() examId: number;
}

function checkItem(it: ItemInputDto, i: number): Prisma.InputJsonValue {
  const where = `Question ${i + 1}`;
  if (it.type === 'MCQ') {
    const n = it.choices?.length ?? 0;
    const idx = it.answer.index as number;
    if (n < 2 || !Number.isInteger(idx) || idx < 0 || idx >= n) throw new BadRequestException(`${where} : QCM incomplet (au moins 2 choix et une bonne réponse)`);
    return { index: idx };
  }
  if (it.type === 'NUMERIC') {
    if (typeof it.answer.value !== 'number' || !Number.isFinite(it.answer.value)) throw new BadRequestException(`${where} : valeur attendue manquante`);
    if ((it.resultPoints ?? it.points) > it.points) throw new BadRequestException(`${where} : points du résultat supérieurs au barème`);
    return { value: it.answer.value, tolerance: typeof it.answer.tolerance === 'number' ? it.answer.tolerance : 0.01 };
  }
  return { model: typeof it.answer.model === 'string' ? it.answer.model : '' };
}

const round2 = (n: number) => Math.round(n * 100) / 100;

@Injectable()
export class AuthoringService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly push: PushService,
  ) {}

  /** Banque d'exercices : questions des devoirs existants, réutilisables dans un nouveau devoir. */
  async bank(subjectId: number, examId?: number, q?: string) {
    const items = await this.prisma.assessmentItem.findMany({
      where: {
        assessment: { status: 'PUBLISHED', OR: [{ chapter: { subjectId, ...(examId ? { examId } : {}) } }, { subjectId, type: { not: 'CLASS_ASSIGNMENT' } }] },
        ...(q ? { OR: [{ prompt: { contains: q, mode: 'insensitive' } }, { sectionIntro: { contains: q, mode: 'insensitive' } }] } : {}),
      },
      orderBy: [{ assessmentId: 'asc' }, { orderIndex: 'asc' }],
      take: 300,
      include: { assessment: { select: { title: true, chapter: { select: { title: true, orderIndex: true } } } } },
    });
    return items.map(({ assessment, ...it }) => ({ ...it, source: assessment.chapter?.title ?? assessment.title }));
  }

  private async ensureCanEdit(user: AuthUser, id: number) {
    const a = await this.prisma.assessment.findUnique({ where: { id }, include: { _count: { select: { attempts: true } } } });
    if (!a) throw new NotFoundException('Devoir introuvable');
    if (a.chapterId) throw new ForbiddenException('Les devoirs de chapitre se modifient depuis l’éditeur de chapitre');
    if (user.role !== 'ADMIN' && a.authorId !== user.id) throw new ForbiddenException('Vous n’êtes pas l’auteur de ce devoir');
    return a;
  }

  private async checkClass(user: AuthUser, dto: AssessmentInputDto) {
    if (dto.type !== 'CLASS_ASSIGNMENT') return null;
    if (!dto.classroomId) throw new BadRequestException('Choisissez la classe destinataire');
    const c = await this.prisma.classroom.findUnique({ where: { id: dto.classroomId } });
    if (!c || (user.role !== 'ADMIN' && c.teacherId !== user.id)) throw new ForbiddenException('Classe introuvable');
    return c;
  }

  list(user: AuthUser, type?: string, subjectId?: number) {
    return this.prisma.assessment.findMany({
      where: {
        chapterId: null,
        ...(type ? { type: type as AssessmentType } : {}),
        ...(subjectId ? { subjectId } : {}),
        ...(user.role === 'ADMIN' ? {} : { OR: [{ authorId: user.id }, { type: { in: ['MOCK_EXAM', 'PAST_PAPER'] } }] }),
      },
      orderBy: { createdAt: 'desc' },
      take: 200,
      select: {
        id: true,
        type: true,
        title: true,
        status: true,
        durationMin: true,
        totalPoints: true,
        year: true,
        dueAt: true,
        createdAt: true,
        authorId: true,
        subject: { select: { name: true, icon: true } },
        exam: { select: { code: true } },
        classroom: { select: { id: true, name: true } },
        _count: { select: { items: true, attempts: true } },
      },
    });
  }

  async get(user: AuthUser, id: number) {
    const a = await this.prisma.assessment.findUnique({ where: { id }, include: { items: { orderBy: { orderIndex: 'asc' } }, _count: { select: { attempts: true } } } });
    if (!a) throw new NotFoundException('Devoir introuvable');
    if (a.type === 'CLASS_ASSIGNMENT' && user.role !== 'ADMIN' && a.authorId !== user.id) throw new ForbiddenException();
    return a;
  }

  private itemsData(dto: AssessmentInputDto) {
    // Examens blancs et annales reproduisent l'examen : barème sur 20. Un devoir de classe est libre (ramené sur 20).
    const total = round2(dto.items.reduce((s, it) => s + it.points, 0));
    if (dto.type !== 'CLASS_ASSIGNMENT' && total !== 20) {
      throw new BadRequestException(`Le barème doit totaliser 20 points (actuellement ${String(total).replace('.', ',')})`);
    }
    return dto.items.map((it, i) => ({
      orderIndex: i + 1,
      section: it.section,
      sectionIntro: it.sectionIntro || null,
      prompt: it.prompt,
      type: it.type,
      choices: it.type === 'MCQ' ? it.choices ?? [] : [],
      answer: checkItem(it, i),
      points: it.points,
      resultPoints: it.type === 'NUMERIC' ? (it.resultPoints ?? it.points) : 0,
      correction: it.correction ?? '',
    }));
  }

  async create(user: AuthUser, dto: AssessmentInputDto) {
    const classroom = await this.checkClass(user, dto);
    const items = this.itemsData(dto);
    const a = await this.prisma.assessment.create({
      data: {
        type: dto.type,
        title: dto.title,
        subjectId: dto.subjectId,
        examId: dto.examId,
        durationMin: dto.durationMin,
        instructions: dto.instructions ?? '',
        advice: dto.advice ?? '',
        classroomId: classroom?.id,
        dueAt: dto.dueAt ? new Date(dto.dueAt) : null,
        year: dto.year,
        status: dto.status ?? 'PUBLISHED',
        authorId: user.id,
        totalPoints: round2(items.reduce((s, it) => s + it.points, 0)),
        items: { create: items },
      },
    });
    await audit(this.prisma, user.id, 'assessment.create', 'assessment', a.id, { type: dto.type });
    if (classroom && a.status === 'PUBLISHED') {
      const members = await this.prisma.classMember.findMany({ where: { classroomId: classroom.id }, select: { userId: true } });
      void this.push.notifyMany(members.map((m) => m.userId), { title: `📝 Nouveau devoir — ${classroom.name}`, body: dto.title, url: `/devoir/${a.id}` });
    }
    return a;
  }

  async update(user: AuthUser, id: number, dto: AssessmentInputDto) {
    const existing = await this.ensureCanEdit(user, id);
    await this.checkClass(user, dto);
    const meta = {
      title: dto.title,
      durationMin: dto.durationMin,
      instructions: dto.instructions ?? '',
      advice: dto.advice ?? '',
      dueAt: dto.dueAt ? new Date(dto.dueAt) : null,
      year: dto.year,
      status: dto.status ?? existing.status,
    };
    if (existing._count.attempts > 0) {
      // Des copies existent : on ne touche plus aux questions pour ne pas fausser les notes.
      return this.prisma.assessment.update({ where: { id }, data: meta });
    }
    const items = this.itemsData(dto);
    return this.prisma.$transaction(async (tx) => {
      await tx.assessmentItem.deleteMany({ where: { assessmentId: id } });
      return tx.assessment.update({
        where: { id },
        data: { ...meta, subjectId: dto.subjectId, examId: dto.examId, classroomId: dto.classroomId ?? null, totalPoints: round2(items.reduce((s, it) => s + it.points, 0)), items: { create: items } },
      });
    });
  }

  async remove(user: AuthUser, id: number) {
    const a = await this.ensureCanEdit(user, id);
    if (a._count.attempts > 0) {
      await this.prisma.assessment.update({ where: { id }, data: { status: 'DRAFT' } });
      return { ok: true, archived: true };
    }
    await this.prisma.assessment.delete({ where: { id } });
    await audit(this.prisma, user.id, 'assessment.delete', 'assessment', id);
    return { ok: true };
  }

  /**
   * Examen blanc automatique : on assemble des exercices complets issus de devoirs de chapitres
   * différents, dont les barèmes totalisent exactement 20 points.
   */
  async generateMock(user: AuthUser | null, subjectId: number, examId: number) {
    const subject = await this.prisma.subject.findUnique({ where: { id: subjectId } });
    if (!subject) throw new NotFoundException('Matière introuvable');
    const items = await this.prisma.assessmentItem.findMany({
      where: { assessment: { type: 'CHAPTER_EXAM', status: 'PUBLISHED', chapter: { subjectId, examId, status: 'PUBLISHED' } } },
      orderBy: { orderIndex: 'asc' },
      include: { assessment: { select: { chapterId: true, durationMin: true, totalPoints: true, chapter: { select: { title: true } } } } },
    });
    // Regroupe les questions par exercice (section) de chaque devoir
    const sections = new Map<string, { key: string; chapterId: number; chapterTitle: string; items: typeof items; points: number; minutes: number }>();
    for (const it of items) {
      const key = `${it.assessmentId}::${it.section}`;
      const s = sections.get(key) ?? { key, chapterId: it.assessment.chapterId!, chapterTitle: it.assessment.chapter!.title, items: [], points: 0, minutes: 0 };
      s.items.push(it);
      s.points = round2(s.points + it.points);
      s.minutes = (it.assessment.durationMin * s.points) / it.assessment.totalPoints;
      sections.set(key, s);
    }
    const pool = [...sections.values()].filter((s) => s.points >= 2 && s.points <= 14);
    // Recherche aléatoire d'une combinaison de 2 à 4 exercices de chapitres distincts totalisant 20 points
    for (let attempt = 0; attempt < 400; attempt++) {
      const shuffled = [...pool].sort(() => randomInt(3) - 1);
      const picked: typeof pool = [];
      let total = 0;
      for (const s of shuffled) {
        if (picked.some((p) => p.chapterId === s.chapterId)) continue;
        if (total + s.points > 20 + 1e-9) continue;
        picked.push(s);
        total = round2(total + s.points);
        if (Math.abs(total - 20) < 1e-9 || picked.length === 4) break;
      }
      if (Math.abs(total - 20) > 1e-9 || picked.length < 2) continue;
      const count = await this.prisma.assessment.count({ where: { type: 'MOCK_EXAM', subjectId, examId } });
      const exam = await this.prisma.exam.findUniqueOrThrow({ where: { id: examId } });
      let order = 0;
      const duration = Math.max(60, Math.min(240, Math.round(picked.reduce((s, p) => s + p.minutes, 0) / 30) * 30));
      const a = await this.prisma.assessment.create({
        data: {
          type: 'MOCK_EXAM',
          title: `Examen blanc ${exam.code} n° ${count + 1} — ${subject.name}`,
          subjectId,
          examId,
          durationMin: duration,
          authorId: user?.id,
          totalPoints: 20,
          instructions: `**Examen blanc ${exam.code} · Durée : ${duration} min · Note sur 20.** Exercices issus de chapitres différents : ${picked.map((p) => p.chapterTitle).join(', ')}.`,
          advice: '### 🎯 Conseils\n1. Lis tout le sujet avant de commencer et commence par l’exercice qui te paraît le plus facile.\n2. Gère ton temps : environ une minute par demi-point.\n3. Relis-toi pendant les dix dernières minutes.',
          items: {
            create: picked.flatMap((p, pi) =>
              p.items.map((it, ii) => ({
                orderIndex: ++order,
                section: `Exercice ${pi + 1} (${String(p.points).replace('.', ',')} pts) — ${p.chapterTitle}`,
                sectionIntro: ii === 0 ? (p.items[0].sectionIntro ?? null) : null,
                prompt: it.prompt,
                type: it.type,
                choices: it.choices,
                answer: it.answer as Prisma.InputJsonValue,
                points: it.points,
                resultPoints: it.resultPoints,
                correction: it.correction,
              })),
            ),
          },
        },
      });
      if (user) await audit(this.prisma, user.id, 'mock.generate', 'assessment', a.id);
      return a;
    }
    throw new ConflictException('Pas assez d’exercices dans cette matière pour composer un examen blanc de 20 points');
  }
}
