import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { IsBoolean, IsString, IsUUID, Length } from 'class-validator';
import { Throttle } from '@nestjs/throttler';
import { AuthUser, CurrentUser, Roles } from '../common/auth';
import { MessagesService } from './messages.service';

class SendDto {
  @IsUUID() toId: string;
  @IsString() @Length(1, 2000) body: string;
}
class ReportDto {
  @IsString() @Length(2, 300) reason: string;
}
class ModerateDto {
  @IsBoolean() hide: boolean;
}

@Controller()
export class MessagesController {
  constructor(private readonly messages: MessagesService) {}

  @Get('messages/contacts')
  contacts(@CurrentUser() user: AuthUser) {
    return this.messages.contacts(user);
  }

  @Get('messages')
  threads(@CurrentUser() user: AuthUser) {
    return this.messages.threads(user);
  }

  @Get('messages/unread')
  unread(@CurrentUser() user: AuthUser) {
    return this.messages.unreadCount(user);
  }

  @Get('messages/with/:userId')
  thread(@CurrentUser() user: AuthUser, @Param('userId') userId: string) {
    return this.messages.thread(user, userId);
  }

  @Throttle({ default: { limit: 30, ttl: 60_000 } })
  @Post('messages')
  send(@CurrentUser() user: AuthUser, @Body() dto: SendDto) {
    return this.messages.send(user, dto.toId, dto.body);
  }

  @Post('messages/:id/report')
  report(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Body() dto: ReportDto) {
    return this.messages.report(user, id, dto.reason);
  }

  @Roles('ADMIN')
  @Get('admin/reports')
  reports() {
    return this.messages.reports();
  }

  @Roles('ADMIN')
  @Patch('admin/messages/:id')
  moderate(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Body() dto: ModerateDto) {
    return this.messages.moderate(user, id, dto.hide);
  }
}
