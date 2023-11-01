import { Controller, Get,UseGuards } from '@nestjs/common';
import { AuthzService } from '../services/authz.service';
import { UserService } from 'src/user/services/user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthzController {
  constructor(
    private readonly authService: AuthzService,
    private readonly userService: UserService,
  ) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('protected')
  getProtected(): string {
    return this.authService.getProtected();
  }
}
