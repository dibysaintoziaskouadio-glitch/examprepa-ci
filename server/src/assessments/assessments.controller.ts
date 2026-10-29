import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Query } from '@nestjs/common';
import { AuthUser, CurrentUser, Roles } from '../common/auth';
import { AssessmentsService } from './assessments.service';
import { GradeAttemptDto, SubmitAttemptDto } from './dto';

@Controller()
export class AssessmentsController {
  constructor(private readonly assessments: AssessmentsService) {}

  @Get('assessments/:id')
  subject(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number) {
    return this.assessments.getSubject(user, id);
  }

  @Roles('STUDENT')
  @Post('attempts')
  submit(@CurrentUser() user: AuthUser, @Body() dto: SubmitAttemptDto) {
    return this.assessments.submit(user, dto);
  }

  @Roles('STUDENT')
  @Get('revisions')
  revisions(@CurrentUser() user: AuthUser) {
    return this.assessments.revisions(user);
  }

  @Roles('STUDENT')
  @Get('attempts')
  mine(@CurrentUser() user: AuthUser) {
    return this.assessments.myAttempts(user.id);
  }

  @Get('attempts/:id')
  detail(@CurrentUser() user: AuthUser, @Param('id', ParseUUIDPipe) id: string) {
    return this.assessments.detail(user, id);
  }

  @Roles('TEACHER', 'ADMIN')
  @Get('grading/queue')
  queue(@CurrentUser() user: AuthUser, @Query('status') status?: string) {
    return this.assessments.queue(user, status === 'GRADED' ? 'GRADED' : 'SUBMITTED');
  }

  @Roles('TEACHER', 'ADMIN')
  @Post('grading/attempts/:id')
  grade(@CurrentUser() user: AuthUser, @Param('id', ParseUUIDPipe) id: string, @Body() dto: GradeAttemptDto) {
    return this.assessments.grade(user, id, dto);
  }

  @Roles('TEACHER', 'ADMIN')
  @Get('teacher/stats')
  stats(@CurrentUser() user: AuthUser) {
    return this.assessments.teacherStats(user);
  }
}
