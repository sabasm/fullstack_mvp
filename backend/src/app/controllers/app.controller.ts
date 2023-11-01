import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from '../services/app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('protected')
  getProtected(): string {
    let message='from protected route';
    return this.appService.getHello(message);
  }
}