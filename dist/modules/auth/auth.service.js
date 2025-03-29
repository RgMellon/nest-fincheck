"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_repositories_1 = require("../../shared/database/repositories/users.repositories");
const bcryptjs_1 = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userRepo, jwtService) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
    }
    async signin(authenticateDto) {
        const { email, password } = authenticateDto;
        const user = await this.userRepo.findByUnique({
            where: {
                email,
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isValidPassword = await (0, bcryptjs_1.compare)(password, user.password);
        if (!isValidPassword) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const accesToken = await this.generateAccessToken(user.id);
        return { accesToken };
    }
    async signup(signupDto) {
        const emailTaken = await this.userRepo.findByUnique({
            where: {
                email: signupDto.email,
            },
        });
        if (!!emailTaken) {
            throw new common_1.ConflictException('This email already taken');
        }
        const hashedPassword = await (0, bcryptjs_1.hash)(signupDto.password, 12);
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
                            { name: 'Casa', icon: 'home', type: 'EXPENSE' },
                            { name: 'Alimentação', icon: 'food', type: 'EXPENSE' },
                            { name: 'Educação', icon: 'education', type: 'EXPENSE' },
                            { name: 'Transporte', icon: 'transport', type: 'EXPENSE' },
                            { name: 'Mercado', icon: 'grocery', type: 'EXPENSE' },
                            { name: 'Outro', icon: 'other', type: 'EXPENSE' },
                        ],
                    },
                },
            },
        });
        const accesToken = await this.generateAccessToken(user.id);
        return { accesToken };
    }
    generateAccessToken(userId) {
        return this.jwtService.signAsync({ sub: userId });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repositories_1.UsersRepository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map