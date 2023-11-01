import { Injectable } from '@nestjs/common';
import { JwtStrategy } from '../strategies/jwt.strategy';

@Injectable()
export class AuthzService {
  constructor(private readonly authStrategy: JwtStrategy) {}
  getHello(): string {
    return 'Hello Auth!';
  }

  getProtected(): string {
    return 'Hello Protected!'
  }
}
