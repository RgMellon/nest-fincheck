import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CurrentUserId } from 'src/shared/decorators/CurrentUserId';
import { IsPublic } from 'src/shared/decorators/IsPublic';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  me(@CurrentUserId() userId: string) {
    return this.usersService.getUserById(userId);
  }

  @IsPublic()
  @Get('/ping')
  ping() {
    return 'ping2';
  }
}
