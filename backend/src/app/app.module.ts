import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { AuthzModule } from '../authz/authz.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [AuthzModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
