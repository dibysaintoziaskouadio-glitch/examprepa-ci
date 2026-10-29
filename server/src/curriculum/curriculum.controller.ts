import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { AuthUser, CurrentUser, Public } from '../common/auth';
import { CurriculumService } from './curriculum.service';

const optInt = (v?: string) => (v ? Number(v) || undefined : undefined);

@Controller()
export class CurriculumController {
  constructor(private readonly curriculum: CurriculumService) {}

  @Public()
  @Get('exams')
  exams() {
    return this.curriculum.exams();
  }

  @Get('subjects')
  subjects(@CurrentUser() user: AuthUser, @Query('examId') examId?: string, @Query('seriesId') seriesId?: string) {
    return this.curriculum.subjects(user, optInt(examId), optInt(seriesId));
  }

  @Get('subjects/:id/chapters')
  chapters(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Query('examId') examId?: string) {
    return this.curriculum.chapters(user, id, optInt(examId));
  }

  @Get('chapters/:id')
  chapter(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number) {
    return this.curriculum.chapter(user, id);
  }
}
