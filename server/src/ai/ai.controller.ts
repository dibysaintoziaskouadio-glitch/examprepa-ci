import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { ArrayMaxSize, IsArray, IsIn, IsInt, IsOptional, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { AuthUser, CurrentUser, Roles } from '../common/auth';
import { AiService } from './ai.service';
import { Day, DAYS } from './plan-rules';

export class PlanDto {
  @IsOptional() @Type(() => Number) @IsInt() @Min(60) @Max(1500) minutesPerWeek?: number;
  @IsOptional() @Type(() => Number) @IsInt() @Min(1) @Max(8) weeks?: number;
  @IsOptional() @IsArray() @ArrayMaxSize(7) @IsIn(DAYS, { each: true }) studyDays?: Day[];
}

@Controller('ai')
export class AiController {
  constructor(private readonly ai: AiService) {}

  @Get('status')
  status() {
    return { enabled: this.ai.enabled };
  }

  @Roles('STUDENT')
  @Get('plan')
  plan(@CurrentUser() user: AuthUser) {
    return this.ai.getPlan(user.id);
  }

  @Roles('STUDENT')
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @Post('plan')
  @HttpCode(200)
  generate(@CurrentUser() user: AuthUser, @Body() dto: PlanDto) {
    return this.ai.generatePlan(user.id, dto);
  }

  @Roles('TEACHER', 'ADMIN')
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  @Post('grade/:attemptId')
  @HttpCode(200)
  grade(@CurrentUser() user: AuthUser, @Param('attemptId') attemptId: string) {
    return this.ai.gradeSuggestions(user, attemptId);
  }
}
