import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async signup(name: string, password: string) {
    const user = await this.usersService.create(name, password);
    return user;
  }

  async login(name: string, password: string) {
    const user = await this.usersService.findOneByName(name);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    } else if (user.password !== password || user.name !== name) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { name: user.name, sub: user._id };
    return {
      user,
      access_token: this.jwt.sign(payload),
    };
  }
}
