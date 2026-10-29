import { Type } from 'class-transformer';
import { IsBoolean, IsInt, IsOptional, IsUUID, Min } from 'class-validator';

export class StepDto {
  @IsOptional() @IsBoolean() courseDone?: boolean;
  @IsOptional() @IsBoolean() summaryDone?: boolean;
}

export class QuizResultDto {
  @IsUUID() id: string;
  @Type(() => Number) @IsInt() chapterId: number;
  @Type(() => Number) @IsInt() @Min(0) score: number;
  @Type(() => Number) @IsInt() @Min(1) total: number;
}
