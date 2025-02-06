import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthenticateDto } from './dto/authenticate.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { compare, hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signUp.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepo: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signin(authenticateDto: AuthenticateDto) {
    const { email, password } = authenticateDto;

    const user = await this.userRepo.findByUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accesToken = await this.generateAccessToken(user.id);

    return { accesToken };
  }

  async signup(signupDto: SignUpDto) {
    const emailTaken = await this.userRepo.findByUnique({
      where: {
        email: signupDto.email,
      },
    });

    if (!!emailTaken) {
      throw new ConflictException('This email already taken');
    }

    const hashedPassword = await hash(signupDto.password, 12);

    const user = await this.userRepo.create({
      data: {
        ...signupDto,
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

    const accesToken = await this.generateAccessToken(user.id);
    return { accesToken };
  }

  private generateAccessToken(userId: string) {
    return this.jwtService.signAsync({ sub: userId });
  }
}
