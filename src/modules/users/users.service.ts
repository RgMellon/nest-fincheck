import { Injectable } from '@nestjs/common';

import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UsersRepository) {}

  async getUserById(userId: string) {
    const user = await this.userRepo.findByUnique({
      where: {
        id: userId,
      },
    });

    return {
      name: user.name,
      email: user.email,
    };
  }
}
