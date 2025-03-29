import { AuthenticateDto } from './dto/authenticate.dto';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signUp.dto';
export declare class AuthService {
    private readonly userRepo;
    private readonly jwtService;
    constructor(userRepo: UsersRepository, jwtService: JwtService);
    signin(authenticateDto: AuthenticateDto): Promise<{
        accesToken: string;
    }>;
    signup(signupDto: SignUpDto): Promise<{
        accesToken: string;
    }>;
    private generateAccessToken;
}
