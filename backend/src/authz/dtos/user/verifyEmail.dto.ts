import { IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class VerifyEmailDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  token: string;
}
