import { Body, Controller, Delete, Get, HttpCode, Patch, Post } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AuthUser, CurrentUser, Public } from '../common/auth';
import { AuthService } from './auth.service';
import { GoogleAuthDto, LoginDto, OtpRequestDto, RegisterDto, ResetPasswordDto, UpdateMeDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Public()
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @Post('otp')
  @HttpCode(200)
  otp(@Body() dto: OtpRequestDto) {
    return this.auth.requestOtp(dto.phone, dto.purpose);
  }

  @Public()
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto);
  }

  @Public()
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  @Post('login')
  @HttpCode(200)
  login(@Body() dto: LoginDto) {
    return this.auth.login(dto.phone, dto.password);
  }

  @Public()
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  @Post('reset-password')
  @HttpCode(200)
  reset(@Body() dto: ResetPasswordDto) {
    return this.auth.resetPassword(dto);
  }

  @Public()
  @Throttle({ default: { limit: 10, ttl: 60_000 } })
  @Post('google')
  @HttpCode(200)
  google(@Body() dto: GoogleAuthDto) {
    return this.auth.google(dto);
  }

  /** Options de connexion disponibles, pour que l'appli n'affiche que ce qui marche. */
  @Public()
  @Get('config')
  config() {
    return { googleClientId: process.env.GOOGLE_CLIENT_ID || null };
  }

  @Get('me')
  me(@CurrentUser() user: AuthUser) {
    return this.auth.me(user.id);
  }

  @Patch('me')
  update(@CurrentUser() user: AuthUser, @Body() dto: UpdateMeDto) {
    return this.auth.updateMe(user.id, dto);
  }

  @Get('me/export')
  export(@CurrentUser() user: AuthUser) {
    return this.auth.exportData(user.id);
  }

  @Delete('me')
  remove(@CurrentUser() user: AuthUser) {
    return this.auth.deleteMe(user.id);
  }
}
