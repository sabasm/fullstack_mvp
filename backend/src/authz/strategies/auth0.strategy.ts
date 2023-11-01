import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-auth0';
import { RegisterDto } from 'src/authz/dtos/user/register.dto';
import config from 'src/config';
import axios from 'axios';

@Injectable()
export class Auth0Strategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      domain: config.auth0.domain,
      clientID: config.auth0.clientId,
      clientSecret: config.auth0.clientSecret,
      callbackURL: config.auth0.allowedCallbackUrls[0],
      audience: `https://${config.auth0.domain}/api/v2/`,
      scope: 'openid profile email',
    });
  }
  
  async validate(accessToken: string, refreshToken: string, profile: any, done: Function) {
    // Store user information in session or create user in database
    // This is where you could utilize your UserService and register.dto.ts
    // ...
    done(null, profile);
  }
}
