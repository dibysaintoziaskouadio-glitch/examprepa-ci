import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Query } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsOptional, IsString, IsUUID, Max, Min, ValidateNested } from 'class-validator';
import { AuthUser, CurrentUser, Roles } from '../common/auth';
import { ChallengesService } from './challenges.service';

class CreateChallengeDto {
  @Type(() => Number) @IsInt() subjectId: number;
  @IsOptional() @IsString() opponentPhone?: string;
  @IsOptional() @IsUUID() opponentId?: string;
}
class ChallengeAnswerDto {
  @Type(() => Number) @IsInt() questionId: number;
  @IsOptional() @Type(() => Number) @IsInt() choice?: number;
  @IsOptional() @IsString() value?: string;
}
class SubmitChallengeDto {
  @IsArray() @ValidateNested({ each: true }) @Type(() => ChallengeAnswerDto) answers: ChallengeAnswerDto[];
  @Type(() => Number) @IsInt() @Min(0) @Max(36000) timeS: number;
}

@Controller()
@Roles('STUDENT')
export class ChallengesController {
  constructor(private readonly challenges: ChallengesService) {}

  @Post('challenges')
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateChallengeDto) {
    return this.challenges.create(user, dto);
  }

  @Get('challenges')
  list(@CurrentUser() user: AuthUser) {
    return this.challenges.list(user);
  }

  @Get('challenges/:id')
  get(@CurrentUser() user: AuthUser, @Param('id', ParseUUIDPipe) id: string) {
    return this.challenges.get(user, id);
  }

  @Post('challenges/:id/submit')
  submit(@CurrentUser() user: AuthUser, @Param('id', ParseUUIDPipe) id: string, @Body() dto: SubmitChallengeDto) {
    return this.challenges.submit(user, id, dto.answers, dto.timeS);
  }

  @Post('challenges/:id/decline')
  decline(@CurrentUser() user: AuthUser, @Param('id', ParseUUIDPipe) id: string) {
    return this.challenges.decline(user, id);
  }

  @Get('leaderboard')
  leaderboard(@CurrentUser() user: AuthUser, @Query('scope') scope?: string, @Query('period') period?: string) {
    return this.challenges.leaderboard(
      user,
      scope === 'school' || scope === 'city' ? scope : 'national',
      period === 'week' ? 'week' : 'all',
    );
  }
}
