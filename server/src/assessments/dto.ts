import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsInt,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';

export class AnswerInputDto {
  @Type(() => Number) @IsInt() itemId: number;
  @IsOptional() @IsObject() response?: { choice?: number; value?: string; work?: string; text?: string };
  @IsOptional() @IsString() @MaxLength(120) photoUrl?: string;
}

export class SubmitAttemptDto {
  /** UUID généré sur le téléphone : la remise est idempotente. */
  @IsUUID() id: string;
  @Type(() => Number) @IsInt() assessmentId: number;
  @IsDateString() startedAt: string;
  @IsOptional() @IsDateString() submittedAt?: string;
  @IsArray() @ValidateNested({ each: true }) @Type(() => AnswerInputDto) answers: AnswerInputDto[];
}

export class GradeAnswerDto {
  @Type(() => Number) @IsInt() answerId: number;
  @Type(() => Number) @IsNumber() @Min(0) points: number;
  @IsOptional() @IsString() @MaxLength(1000) comment?: string;
}

export class GradeAttemptDto {
  @IsArray() @ValidateNested({ each: true }) @Type(() => GradeAnswerDto) answers: GradeAnswerDto[];
  @IsOptional() @IsString() @MaxLength(2000) comment?: string;
}
