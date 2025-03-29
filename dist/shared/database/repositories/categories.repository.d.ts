import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class CategoriesRepository {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findMany(findManyDto: Prisma.CategoryFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        name: string;
        userId: string;
        icon: string;
        type: import(".prisma/client").$Enums.TransactionType;
    }[]>;
    findFirst(findFirstDto: Prisma.CategoryFindFirstArgs): Prisma.Prisma__CategoryClient<{
        id: string;
        name: string;
        userId: string;
        icon: string;
        type: import(".prisma/client").$Enums.TransactionType;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
}
