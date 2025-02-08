import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { SignUpDto } from './dto/signUp.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @SetMetadata('IS_PUBLIC', true)
  async signin(@Body() authenticateDto: AuthenticateDto) {
    return await this.authService.signin(authenticateDto);
  }

  @Post('signup')
  @SetMetadata('IS_PUBLIC', true)
  async signup(@Body() signupDto: SignUpDto) {
    return await this.authService.signup(signupDto);
  }
}
