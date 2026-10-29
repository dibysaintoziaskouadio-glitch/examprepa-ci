import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AuthUser, CurrentUser, Roles } from '../common/auth';
import { QuizResultDto, StepDto } from './dto';
import { ProgressService } from './progress.service';

@Controller()
@Roles('STUDENT')
export class ProgressController {
  constructor(private readonly progress: ProgressService) {}

  @Post('progress/chapters/:id')
  step(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Body() dto: StepDto) {
    return this.progress.markStep(user.id, id, dto);
  }

  @Post('progress/quiz')
  quiz(@CurrentUser() user: AuthUser, @Body() dto: QuizResultDto) {
    return this.progress.recordQuiz(user.id, dto);
  }

  @Get('dashboard')
  dashboard(@CurrentUser() user: AuthUser) {
    return this.progress.dashboard(user.id);
  }
}
