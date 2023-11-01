import { IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class LogoutDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  token: string;
}
