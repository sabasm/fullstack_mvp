// src/authz/dtos/user/register.dto.ts

import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  @Transform(({ value }) => value.toLowerCase().trim())
  email: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  password: string;

//   @IsString()
//   @IsOptional()
//   @Transform(({ value }) => value.trim())
//   name?: string;

//   @IsString()
//   @IsOptional()
//   @Transform(({ value }) => value.trim())
//   given_name?: string;

//   @IsString()
//   @IsOptional()
//   @Transform(({ value }) => value.trim())
//   family_name?: string;

  // ... any other fields you need
}
