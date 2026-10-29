import { BadRequestException, Body, Controller, Get, Injectable, NotFoundException, Param, ParseIntPipe, Patch, Query } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, Max, Min } from 'class-validator';
import { audit } from '../common/audit';
import { AuthUser, CurrentUser, Roles } from '../common/auth';
import { PrismaService } from '../common/prisma.service';

export class UpdateUserDto {
  @IsOptional() @IsIn(['STUDENT', 'TEACHER', 'ADMIN']) role?: 'STUDENT' | 'TEACHER' | 'ADMIN';
  @IsOptional() @IsIn(['ACTIVE', 'PENDING', 'SUSPENDED']) status?: 'ACTIVE' | 'PENDING' | 'SUSPENDED';
}

export class UpdateSeriesSubjectDto {
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(10) coefficient?: number;
  @IsOptional() @Type(() => Number) @IsInt() @Min(30) @Max(480) examDurationMin?: number;
}

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async stats() {
    const week = new Date(Date.now() - 7 * 24 * 3600 * 1000);
    const [byRole, pendingTeachers, active7d, attempts, toGrade, chapters, quizzes, recent] = await Promise.all([
      this.prisma.user.groupBy({ by: ['role'], _count: true, where: { status: { not: 'SUSPENDED' } } }),
      this.prisma.user.count({ where: { role: 'TEACHER', status: 'PENDING' } }),
      this.prisma.user.count({ where: { lastSeenAt: { gte: week } } }),
      this.prisma.attempt.count(),
      this.prisma.attempt.count({ where: { status: 'SUBMITTED' } }),
      this.prisma.chapter.groupBy({ by: ['status'], _count: true }),
      this.prisma.quizResult.count(),
      this.prisma.user.count({ where: { createdAt: { gte: week } } }),
    ]);
    return {
      users: Object.fromEntries(byRole.map((r) => [r.role, r._count])),
      pendingTeachers,
      active7d,
      signups7d: recent,
      attempts,
      toGrade,
      quizzes,
      chapters: Object.fromEntries(chapters.map((c) => [c.status, c._count])),
    };
  }

  users(q?: string, role?: string, status?: string) {
    const where: Prisma.UserWhereInput = {
      role: role ? (role as Prisma.EnumRoleFilter['equals']) : undefined,
      status: status ? (status as Prisma.EnumUserStatusFilter['equals']) : undefined,
      OR: q
        ? [
            { firstName: { contains: q, mode: 'insensitive' } },
            { lastName: { contains: q, mode: 'insensitive' } },
            { phone: { contains: q.replace(/\s/g, '') } },
          ]
        : undefined,
    };
    return this.prisma.user.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: 100,
      select: {
        id: true,
        role: true,
        status: true,
        phone: true,
        firstName: true,
        lastName: true,
        createdAt: true,
        lastSeenAt: true,
        student: { select: { schoolName: true, city: true, exam: { select: { code: true } }, series: { select: { code: true } } } },
        teacher: { select: { schoolName: true, subjects: true, validatedAt: true } },
      },
    });
  }

  async updateUser(actor: AuthUser, id: string, dto: UpdateUserDto) {
    if (actor.id === id) throw new BadRequestException('Tu ne peux pas modifier ton propre compte ici');
    const user = await this.prisma.user.findUnique({ where: { id }, include: { teacher: true } });
    if (!user) throw new NotFoundException('Utilisateur introuvable');
    const validating = user.role === 'TEACHER' && user.status === 'PENDING' && dto.status === 'ACTIVE';
    const updated = await this.prisma.user.update({
      where: { id },
      data: {
        ...dto,
        teacher: validating && user.teacher ? { update: { validatedAt: new Date() } } : undefined,
      },
      select: { id: true, role: true, status: true },
    });
    await audit(this.prisma, actor.id, validating ? 'teacher.validate' : 'user.update', 'user', id, { ...dto });
    return updated;
  }

  /** Séries avec coefficients et durées d'épreuve, pour l'écran « Coefficients ». */
  series() {
    return this.prisma.exam.findMany({
      orderBy: { id: 'asc' },
      select: {
        id: true,
        code: true,
        name: true,
        series: {
          orderBy: { code: 'asc' },
          select: {
            id: true,
            code: true,
            name: true,
            subjects: {
              orderBy: { subject: { name: 'asc' } },
              select: {
                coefficient: true,
                examDurationMin: true,
                subject: { select: { id: true, code: true, name: true, icon: true } },
              },
            },
          },
        },
      },
    });
  }

  async updateSeriesSubject(actor: AuthUser, seriesId: number, subjectId: number, dto: UpdateSeriesSubjectDto) {
    const link = await this.prisma.seriesSubject.findUnique({ where: { seriesId_subjectId: { seriesId, subjectId } } });
    if (!link) throw new NotFoundException("Cette matière n'appartient pas à cette série");
    const updated = await this.prisma.seriesSubject.update({
      where: { seriesId_subjectId: { seriesId, subjectId } },
      data: dto,
    });
    await audit(this.prisma, actor.id, 'coefficient.update', 'series', String(seriesId), {
      subjectId,
      before: { coefficient: link.coefficient, examDurationMin: link.examDurationMin },
      after: { ...dto },
    });
    return updated;
  }
}

@Controller('admin')
@Roles('ADMIN')
export class AdminController {
  constructor(private readonly admin: AdminService) {}

  @Get('stats')
  stats() {
    return this.admin.stats();
  }

  @Get('users')
  users(@Query('q') q?: string, @Query('role') role?: string, @Query('status') status?: string) {
    return this.admin.users(q, role, status);
  }

  @Patch('users/:id')
  update(@CurrentUser() user: AuthUser, @Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.admin.updateUser(user, id, dto);
  }

  @Get('series')
  series() {
    return this.admin.series();
  }

  @Patch('series/:seriesId/subjects/:subjectId')
  updateSeriesSubject(
    @CurrentUser() user: AuthUser,
    @Param('seriesId', ParseIntPipe) seriesId: number,
    @Param('subjectId', ParseIntPipe) subjectId: number,
    @Body() dto: UpdateSeriesSubjectDto,
  ) {
    return this.admin.updateSeriesSubject(user, seriesId, subjectId, dto);
  }
}
