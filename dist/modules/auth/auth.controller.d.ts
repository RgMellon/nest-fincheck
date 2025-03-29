import { AuthService } from './auth.service';
import { AuthenticateDto } from './dto/authenticate.dto';
import { SignUpDto } from './dto/signUp.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signin(authenticateDto: AuthenticateDto): Promise<{
        accesToken: string;
    }>;
    signup(signupDto: SignUpDto): Promise<{
        accesToken: string;
    }>;
}
