import { All, Body, Controller, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Query, Req } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsBoolean, IsIn, IsInt, IsOptional, IsString, Length, Min } from 'class-validator';
import { Request } from 'express';
import { AuthUser, CurrentUser, Public, Roles } from '../common/auth';
import { PaymentsService } from './payments.service';

class StartDto {
  @Type(() => Number) @IsInt() planId: number;
}
class SimulateDto {
  @IsIn(['SUCCESS', 'FAILED']) outcome: 'SUCCESS' | 'FAILED';
  @IsIn(['orange', 'mtn', 'moov', 'wave', 'card']) channel: string;
}
class UpdatePlanDto {
  @IsOptional() @Type(() => Number) @IsInt() @Min(0) priceXof?: number;
  @IsOptional() @IsBoolean() active?: boolean;
  @IsOptional() @IsString() @Length(2, 80) name?: string;
}
class GrantDto {
  @Type(() => Number) @IsInt() planId: number;
}

@Controller()
export class PaymentsController {
  constructor(private readonly payments: PaymentsService) {}

  @Get('subscription')
  status(@CurrentUser() user: AuthUser) {
    return this.payments.status(user);
  }

  @Get('plans')
  plans(@CurrentUser() user: AuthUser) {
    return this.payments.plans(user);
  }

  @Roles('STUDENT')
  @Post('payments')
  start(@CurrentUser() user: AuthUser, @Body() dto: StartDto) {
    return this.payments.start(user, dto.planId);
  }

  @Get('payments/:id')
  get(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.payments.get(user, id);
  }

  @Roles('STUDENT')
  @Post('payments/:id/simulate')
  simulate(@CurrentUser() user: AuthUser, @Param('id') id: string, @Body() dto: SimulateDto) {
    return this.payments.simulate(user, id, dto.outcome, dto.channel);
  }

  /** Notification CinetPay (GET ou POST, réponse 200 obligatoire). */
  @Public()
  @All('payments/webhook/cinetpay')
  @HttpCode(200)
  webhook(@Req() req: Request, @Query('cpm_trans_id') q?: string) {
    const body = (req.body ?? {}) as Record<string, string>;
    return this.payments.webhook(body.cpm_trans_id ?? body.transaction_id ?? q);
  }

  @Roles('ADMIN')
  @Get('admin/payments')
  overview() {
    return this.payments.adminOverview();
  }

  @Roles('ADMIN')
  @Patch('admin/plans/:id')
  updatePlan(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePlanDto) {
    return this.payments.updatePlan(user, id, dto);
  }

  @Roles('ADMIN')
  @Post('admin/users/:id/subscription')
  grant(@CurrentUser() user: AuthUser, @Param('id') id: string, @Body() dto: GrantDto) {
    return this.payments.grant(user, id, dto.planId);
  }
}
