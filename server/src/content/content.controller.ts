import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
import { AuthUser, CurrentUser, Roles } from '../common/auth';
import { ContentService } from './content.service';
import { AssessmentInputDto, AuthoringService, GenerateMockDto } from './authoring';
import { AssessmentSettingsDto, CreateChapterDto, QuestionDto, UpdateChapterDto, ValidateChapterDto } from './dto';

const optInt = (v?: string) => (v ? Number(v) || undefined : undefined);

@Controller('content')
@Roles('TEACHER', 'ADMIN')
export class ContentController {
  constructor(
    private readonly content: ContentService,
    private readonly authoring: AuthoringService,
  ) {}

  @Get('bank')
  bank(@Query('subjectId') subjectId: string, @Query('examId') examId?: string, @Query('q') q?: string) {
    return this.authoring.bank(Number(subjectId), optInt(examId), q || undefined);
  }

  @Get('assessments')
  listAssessments(@CurrentUser() user: AuthUser, @Query('type') type?: string, @Query('subjectId') subjectId?: string) {
    return this.authoring.list(user, type, optInt(subjectId));
  }

  @Get('assessments/:id')
  getAssessment(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number) {
    return this.authoring.get(user, id);
  }

  @Post('assessments')
  createAssessment(@CurrentUser() user: AuthUser, @Body() dto: AssessmentInputDto) {
    return this.authoring.create(user, dto);
  }

  @Put('assessments/:id')
  updateAssessmentFull(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Body() dto: AssessmentInputDto) {
    return this.authoring.update(user, id, dto);
  }

  @Delete('assessments/:id')
  removeAssessment(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number) {
    return this.authoring.remove(user, id);
  }

  @Post('mock-exams')
  generateMock(@CurrentUser() user: AuthUser, @Body() dto: GenerateMockDto) {
    return this.authoring.generateMock(user, dto.subjectId, dto.examId);
  }

  @Get('chapters')
  list(@Query('subjectId') subjectId?: string, @Query('examId') examId?: string) {
    return this.content.chapters(optInt(subjectId), optInt(examId));
  }

  @Get('chapters/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.content.chapter(id);
  }

  @Post('chapters')
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateChapterDto) {
    return this.content.createChapter(user, dto);
  }

  @Patch('chapters/:id')
  update(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Body() dto: UpdateChapterDto) {
    return this.content.updateChapter(user, id, dto);
  }

  @Delete('chapters/:id')
  remove(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number) {
    return this.content.deleteChapter(user, id);
  }

  @Post('chapters/:id/validate')
  validate(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Body() dto: ValidateChapterDto) {
    return this.content.validateChapter(user, id, dto);
  }

  @Patch('assessments/:id')
  updateAssessment(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Body() dto: AssessmentSettingsDto) {
    return this.content.updateAssessment(user, id, dto);
  }

  @Post('chapters/:id/questions')
  addQuestion(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Body() dto: QuestionDto) {
    return this.content.createQuestion(user, id, dto);
  }

  @Put('questions/:id')
  updateQuestion(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Body() dto: QuestionDto) {
    return this.content.updateQuestion(user, id, dto);
  }

  @Delete('questions/:id')
  removeQuestion(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number) {
    return this.content.deleteQuestion(user, id);
  }
}
