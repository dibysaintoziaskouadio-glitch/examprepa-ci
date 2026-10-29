import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsOptional, IsString, Length, MaxLength } from 'class-validator';
import { AuthUser, CurrentUser, Roles } from '../common/auth';
import { ClassesService } from './classes.service';

class CreateClassDto {
  @IsString() @Length(2, 80) name: string;
  @Type(() => Number) @IsInt() examId: number;
  @IsOptional() @IsString() @MaxLength(120) schoolName?: string;
}
class UpdateClassDto {
  @IsOptional() @IsString() @Length(2, 80) name?: string;
  @IsOptional() @IsBoolean() archived?: boolean;
}
class JoinDto {
  @IsString() @Length(4, 12) code: string;
}
class AnnouncementDto {
  @IsString() @Length(1, 2000) body: string;
}

@Controller()
export class ClassesController {
  constructor(private readonly classes: ClassesService) {}

  @Get('classes')
  list(@CurrentUser() user: AuthUser) {
    return this.classes.list(user);
  }

  @Roles('TEACHER', 'ADMIN')
  @Post('classes')
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateClassDto) {
    return this.classes.create(user, dto);
  }

  @Get('classes/:id')
  detail(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number) {
    return this.classes.detail(user, id);
  }

  @Roles('TEACHER', 'ADMIN')
  @Patch('classes/:id')
  update(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Body() dto: UpdateClassDto) {
    return this.classes.update(user, id, dto);
  }

  @Roles('TEACHER', 'ADMIN')
  @Post('classes/:id/code')
  regenerate(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number) {
    return this.classes.regenerateCode(user, id);
  }

  @Roles('STUDENT')
  @Post('classes/join')
  join(@CurrentUser() user: AuthUser, @Body() dto: JoinDto) {
    return this.classes.join(user, dto.code);
  }

  @Roles('STUDENT')
  @Post('classes/:id/leave')
  leave(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number) {
    return this.classes.leave(user, id);
  }

  @Roles('TEACHER', 'ADMIN')
  @Delete('classes/:id/members/:userId')
  removeMember(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Param('userId') userId: string) {
    return this.classes.removeMember(user, id, userId);
  }

  @Roles('TEACHER', 'ADMIN')
  @Post('classes/:id/announcements')
  announce(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Body() dto: AnnouncementDto) {
    return this.classes.announce(user, id, dto.body);
  }

  @Roles('TEACHER', 'ADMIN')
  @Delete('classes/:id/announcements/:aid')
  deleteAnnouncement(@CurrentUser() user: AuthUser, @Param('id', ParseIntPipe) id: number, @Param('aid', ParseIntPipe) aid: number) {
    return this.classes.deleteAnnouncement(user, id, aid);
  }

  @Get('announcements')
  feed(@CurrentUser() user: AuthUser) {
    return this.classes.feed(user);
  }
}
