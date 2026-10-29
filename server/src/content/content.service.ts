import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { audit } from '../common/audit';
import { AuthUser } from '../common/auth';
import { PrismaService } from '../common/prisma.service';
import { AssessmentSettingsDto, CreateChapterDto, QuestionDto, UpdateChapterDto, ValidateChapterDto } from './dto';

/** Vérifie la forme de la réponse attendue selon le type de question. */
function checkAnswer(dto: QuestionDto): Prisma.InputJsonValue {
  const a = dto.answer;
  if (dto.type === 'MCQ') {
    const n = dto.choices?.length ?? 0;
    if (n < 2) throw new BadRequestException('Un QCM doit avoir au moins 2 choix');
    if (!Number.isInteger(a.index) || (a.index as number) < 0 || (a.index as number) >= n) {
      throw new BadRequestException('Indique la bonne réponse parmi les choix');
    }
    return { index: a.index as number };
  }
  if (dto.type === 'NUMERIC') {
    if (typeof a.value !== 'number' || !Number.isFinite(a.value)) throw new BadRequestException('Valeur numérique attendue');
    return { value: a.value, tolerance: typeof a.tolerance === 'number' ? a.tolerance : 0.01 };
  }
  return {
    model: typeof a.model === 'string' ? a.model : '',
    keywords: Array.isArray(a.keywords) ? a.keywords.filter((k): k is string => typeof k === 'string') : [],
  };
}

@Injectable()
export class ContentService {
  constructor(private readonly prisma: PrismaService) {}

  chapters(subjectId?: number, examId?: number) {
    return this.prisma.chapter.findMany({
      where: { subjectId, examId },
      orderBy: [{ subjectId: 'asc' }, { orderIndex: 'asc' }],
      select: {
        id: true,
        title: true,
        status: true,
        orderIndex: true,
        version: true,
        updatedAt: true,
        validatedAt: true,
        subject: { select: { id: true, name: true } },
        exam: { select: { code: true } },
        _count: { select: { questions: true, assessments: true } },
      },
    });
  }

  async chapter(id: number) {
    const c = await this.prisma.chapter.findUnique({
      where: { id },
      include: {
        subject: true,
        exam: true,
        questions: { orderBy: { orderIndex: 'asc' } },
        assessments: { include: { items: { orderBy: { orderIndex: 'asc' } } } },
      },
    });
    if (!c) throw new NotFoundException('Chapitre introuvable');
    return c;
  }

  async createChapter(user: AuthUser, dto: CreateChapterDto) {
    const last = await this.prisma.chapter.aggregate({
      where: { subjectId: dto.subjectId, examId: dto.examId },
      _max: { orderIndex: true },
    });
    const c = await this.prisma.chapter.create({
      data: { ...dto, orderIndex: (last._max.orderIndex ?? 0) + 1, status: 'DRAFT' },
    });
    await audit(this.prisma, user.id, 'chapter.create', 'chapter', c.id);
    return c;
  }

  async updateChapter(user: AuthUser, id: number, dto: UpdateChapterDto) {
    await this.chapter(id);
    // La version sert à prévenir les téléphones que leur copie hors ligne est périmée.
    const c = await this.prisma.chapter.update({ where: { id }, data: { ...dto, version: { increment: 1 } } });
    await audit(this.prisma, user.id, 'chapter.update', 'chapter', id, { fields: Object.keys(dto) });
    return c;
  }

  async deleteChapter(user: AuthUser, id: number) {
    const attempts = await this.prisma.attempt.count({ where: { assessment: { chapterId: id } } });
    if (attempts) throw new ConflictException('Des élèves ont déjà rendu ce devoir : dépublie le chapitre au lieu de le supprimer.');
    await this.prisma.chapter.delete({ where: { id } });
    await audit(this.prisma, user.id, 'chapter.delete', 'chapter', id);
    return { ok: true };
  }

  /** Relecture pédagogique : un enseignant atteste que le contenu est conforme et exact. */
  async validateChapter(user: AuthUser, id: number, dto: ValidateChapterDto) {
    await this.chapter(id);
    const c = await this.prisma.chapter.update({
      where: { id },
      data: dto.validated ? { validatedAt: new Date(), validatedById: user.id } : { validatedAt: null, validatedById: null },
      select: { id: true, validatedAt: true },
    });
    await audit(this.prisma, user.id, dto.validated ? 'chapter.validate' : 'chapter.unvalidate', 'chapter', id);
    return c;
  }

  /** Réglages du devoir : verrouillage du chapitre suivant et note minimale. */
  async updateAssessment(user: AuthUser, id: number, dto: AssessmentSettingsDto) {
    const a = await this.prisma.assessment.findUnique({ where: { id } });
    if (!a) throw new NotFoundException('Devoir introuvable');
    const updated = await this.prisma.assessment.update({ where: { id }, data: dto, select: { id: true, blocksNext: true, passMark: true } });
    if (a.chapterId) await this.bump(a.chapterId);
    await audit(this.prisma, user.id, 'assessment.update', 'assessment', id, { ...dto });
    return updated;
  }

  async createQuestion(user: AuthUser, chapterId: number, dto: QuestionDto) {
    await this.chapter(chapterId);
    const last = await this.prisma.question.aggregate({ where: { chapterId }, _max: { orderIndex: true } });
    const q = await this.prisma.question.create({
      data: {
        chapterId,
        type: dto.type,
        prompt: dto.prompt,
        choices: dto.type === 'MCQ' ? dto.choices! : [],
        answer: checkAnswer(dto),
        explanation: dto.explanation ?? '',
        orderIndex: dto.orderIndex ?? (last._max.orderIndex ?? 0) + 1,
      },
    });
    await this.bump(chapterId);
    await audit(this.prisma, user.id, 'question.create', 'question', q.id);
    return q;
  }

  async updateQuestion(user: AuthUser, id: number, dto: QuestionDto) {
    const existing = await this.prisma.question.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Question introuvable');
    const q = await this.prisma.question.update({
      where: { id },
      data: {
        type: dto.type,
        prompt: dto.prompt,
        choices: dto.type === 'MCQ' ? dto.choices! : [],
        answer: checkAnswer(dto),
        explanation: dto.explanation ?? '',
        orderIndex: dto.orderIndex ?? existing.orderIndex,
      },
    });
    await this.bump(existing.chapterId);
    await audit(this.prisma, user.id, 'question.update', 'question', id);
    return q;
  }

  async deleteQuestion(user: AuthUser, id: number) {
    const q = await this.prisma.question.delete({ where: { id } }).catch(() => {
      throw new NotFoundException('Question introuvable');
    });
    await this.bump(q.chapterId);
    await audit(this.prisma, user.id, 'question.delete', 'question', id);
    return { ok: true };
  }

  private bump(chapterId: number) {
    return this.prisma.chapter.update({ where: { id: chapterId }, data: { version: { increment: 1 } } });
  }
}
