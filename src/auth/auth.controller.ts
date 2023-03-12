import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //   @UseGuards(AuthGuard('local'))
  @Post()
  login(@Body() body: any) {
    return this.authService.login(body.name, body.password);
  }
}
