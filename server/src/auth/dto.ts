import { Type } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class OtpRequestDto {
  @IsString() phone: string;
  @IsIn(['REGISTER', 'RESET']) purpose: 'REGISTER' | 'RESET';
}

export class RegisterDto {
  @IsString() phone: string;
  @Matches(/^\d{6}$/, { message: 'Le code doit contenir 6 chiffres' }) code: string;
  @IsString() @MinLength(8, { message: 'Le mot de passe doit faire au moins 8 caractères' }) password: string;
  @IsString() @Length(1, 60) firstName: string;
  @IsString() @Length(1, 60) lastName: string;
  @IsIn(['STUDENT', 'TEACHER']) role: 'STUDENT' | 'TEACHER';
  @IsOptional() @IsEmail() email?: string;
  @IsOptional() @Type(() => Number) @IsInt() examId?: number;
  @IsOptional() @Type(() => Number) @IsInt() seriesId?: number;
  @IsOptional() @IsString() @MaxLength(120) schoolName?: string;
  @IsOptional() @IsString() @MaxLength(80) city?: string;
  @IsOptional() @IsString() parentPhone?: string;
  @IsOptional() @IsArray() @IsString({ each: true }) subjects?: string[];
}

export class LoginDto {
  @IsString() phone: string;
  @IsString() password: string;
}

export class ResetPasswordDto {
  @IsString() phone: string;
  @Matches(/^\d{6}$/) code: string;
  @IsString() @MinLength(8) password: string;
}

export class UpdateMeDto {
  @IsOptional() @IsString() @Length(1, 60) firstName?: string;
  @IsOptional() @IsString() @Length(1, 60) lastName?: string;
  @IsOptional() @IsString() @MaxLength(120) schoolName?: string;
  @IsOptional() @IsString() @MaxLength(80) city?: string;
  @IsOptional() @Type(() => Number) @IsInt() seriesId?: number;
  @IsOptional() @Type(() => Number) @IsNumber() @Min(0) @Max(20) targetAverage?: number;
  @IsOptional() @IsIn(['fr', 'en', 'bci', 'dyu']) locale?: 'fr' | 'en' | 'bci' | 'dyu';
}

/** Connexion Google : le jeton d'identité suffit si le compte existe ; sinon le profil est requis pour l'inscription. */
export class GoogleAuthDto {
  @IsString() @MaxLength(4096) idToken: string;
  @IsOptional() @IsIn(['STUDENT', 'TEACHER']) role?: 'STUDENT' | 'TEACHER';
  @IsOptional() @Type(() => Number) @IsInt() examId?: number;
  @IsOptional() @Type(() => Number) @IsInt() seriesId?: number;
  @IsOptional() @IsString() @MaxLength(120) schoolName?: string;
  @IsOptional() @IsString() @MaxLength(80) city?: string;
  @IsOptional() @IsString() parentPhone?: string;
  @IsOptional() @IsArray() @IsString({ each: true }) subjects?: string[];
}
