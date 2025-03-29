import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class UsersRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.UserCreateArgs): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        password: string;
        email: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    findByUnique(findDto: Prisma.UserFindUniqueArgs): Prisma.Prisma__UserClient<{
        id: string;
        name: string;
        password: string;
        email: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
}
