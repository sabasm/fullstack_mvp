// src/user/services/user.service.ts
import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/authz/dtos/user/register.dto';

@Injectable()
export class UserService {
  async register(registerDto: RegisterDto): Promise<any> {
    // Todo: registration logic here
    return console.warn(
      'TODO at register userService with registerDto: ',
      registerDto,
    );
  }
}
