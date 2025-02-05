import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { hash } from 'bcryptjs';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UsersRepository) {}

  async create(createUserDto: CreateUserDto) {
    const emailTaken = this.userRepo.findByUnique({
      where: {
        email: createUserDto.email,
      },
    });

    if (emailTaken) throw new ConflictException('This email already taken');

    const hashedPassword = await hash(createUserDto.password, 12);

    const user = await this.userRepo.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
        categories: {
          createMany: {
            data: [
              { name: 'Salário', icon: 'travel', type: 'INCOME' },
              { name: 'Freelance', icon: 'freelance', type: 'INCOME' },
              { name: 'Outro', icon: 'other', type: 'INCOME' },

              { name: 'Casa', icon: 'home', type: 'EXPENSIVE' },
              { name: 'Alimentação', icon: 'food', type: 'EXPENSIVE' },
              { name: 'Educação', icon: 'education', type: 'EXPENSIVE' },
              { name: 'Transporte', icon: 'transport', type: 'EXPENSIVE' },
              { name: 'Mercado', icon: 'grocery', type: 'EXPENSIVE' },
              { name: 'Outro', icon: 'other', type: 'EXPENSIVE' },
            ],
          },
        },
      },
    });

    return user;
  }
}
