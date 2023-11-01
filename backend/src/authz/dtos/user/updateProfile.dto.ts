import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateProfileDto {
  @IsString()
  @IsOptional()
  @Transform(({ value }) => value.trim())
  firstName?: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value.trim())
  lastName?: string;

  @IsString()
  @IsOptional()
  @Transform(({ value }) => value.trim())
  phone?: string;
}
