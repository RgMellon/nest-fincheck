import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';
export declare class TransactionsRepositories {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createDto: Prisma.TransactionCreateArgs): Prisma.Prisma__TransactionClient<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.TransactionType;
        bankAccountId: string;
        categoryId: string | null;
        value: number;
        date: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    update(updateDto: Prisma.TransactionUpdateArgs): Prisma.Prisma__TransactionClient<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.TransactionType;
        bankAccountId: string;
        categoryId: string | null;
        value: number;
        date: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    findMany(findManyDto: Prisma.TransactionFindManyArgs): Prisma.PrismaPromise<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.TransactionType;
        bankAccountId: string;
        categoryId: string | null;
        value: number;
        date: Date;
    }[]>;
    findFirst(findFirstDto: Prisma.TransactionFindFirstArgs): Prisma.Prisma__TransactionClient<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.TransactionType;
        bankAccountId: string;
        categoryId: string | null;
        value: number;
        date: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
    delete(deleteDto: Prisma.TransactionDeleteArgs): Prisma.Prisma__TransactionClient<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.TransactionType;
        bankAccountId: string;
        categoryId: string | null;
        value: number;
        date: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
}
