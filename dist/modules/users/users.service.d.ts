import { UsersRepository } from 'src/shared/database/repositories/users.repositories';
export declare class UsersService {
    private readonly userRepo;
    constructor(userRepo: UsersRepository);
    getUserById(userId: string): Promise<{
        name: string;
        email: string;
    }>;
}
