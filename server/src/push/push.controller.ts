import { Body, Controller, Delete, Get, HttpCode, Post } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsString, IsUrl, ValidateNested } from 'class-validator';
import { AuthUser, CurrentUser, Public } from '../common/auth';
import { PushService } from './push.service';

class KeysDto {
  @IsString() p256dh: string;
  @IsString() auth: string;
}
class SubscribeDto {
  @IsUrl({ require_tld: false }) endpoint: string;
  @ValidateNested() @Type(() => KeysDto) keys: KeysDto;
}
class UnsubscribeDto {
  @IsString() endpoint: string;
}

@Controller('push')
export class PushController {
  constructor(private readonly push: PushService) {}

  @Public()
  @Get('key')
  key() {
    return this.push.publicKey();
  }

  @Post('subscribe')
  @HttpCode(200)
  subscribe(@CurrentUser() user: AuthUser, @Body() dto: SubscribeDto) {
    return this.push.subscribe(user.id, dto);
  }

  @Delete('subscribe')
  unsubscribe(@CurrentUser() user: AuthUser, @Body() dto: UnsubscribeDto) {
    return this.push.unsubscribe(user.id, dto.endpoint);
  }
}
