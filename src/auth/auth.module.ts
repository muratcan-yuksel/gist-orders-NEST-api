import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, JwtService, ConfigService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
