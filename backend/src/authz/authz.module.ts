import { Module } from '@nestjs/common';
import { AuthzController } from './controllers/authz.controller';
import { AuthzService } from './services/authz.service';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  providers: [AuthzService, JwtStrategy],
  controllers: [AuthzController]
})
export class AuthzModule {}
