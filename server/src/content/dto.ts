import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsIn, IsInt, IsObject, IsOptional, IsString, Length, Max, MaxLength, Min } from 'class-validator';

export class CreateChapterDto {
  @Type(() => Number) @IsInt() subjectId: number;
  @Type(() => Number) @IsInt() examId: number;
  @IsString() @Length(2, 160) title: string;
}

export class UpdateChapterDto {
  @IsOptional() @IsString() @Length(2, 160) title?: string;
  @IsOptional() @IsArray() @IsString({ each: true }) objectives?: string[];
  @IsOptional() @Type(() => Number) @IsInt() @Min(5) @Max(600) estimatedMinutes?: number;
  @IsOptional() @IsBoolean() isFree?: boolean;
  @IsOptional() @IsIn(['DRAFT', 'REVIEW', 'PUBLISHED']) status?: 'DRAFT' | 'REVIEW' | 'PUBLISHED';
  @IsOptional() @IsString() @MaxLength(200_000) courseMd?: string;
  @IsOptional() @IsString() @MaxLength(50_000) summaryMd?: string;
  @IsOptional() @IsString() @MaxLength(200) officialRef?: string;
}

export class QuestionDto {
  @IsIn(['MCQ', 'NUMERIC', 'OPEN']) type: 'MCQ' | 'NUMERIC' | 'OPEN';
  @IsString() @Length(1, 5000) prompt: string;
  @IsOptional() @IsArray() @IsString({ each: true }) choices?: string[];
  @IsObject() answer: Record<string, unknown>;
  @IsOptional() @IsString() @MaxLength(5000) explanation?: string;
  @IsOptional() @Type(() => Number) @IsInt() orderIndex?: number;
}

export class AssessmentSettingsDto {
  @IsOptional() @IsBoolean() blocksNext?: boolean;
  @IsOptional() @Type(() => Number) @IsInt() @Min(0) @Max(20) passMark?: number;
}

export class ValidateChapterDto {
  @IsBoolean() validated: boolean;
}
