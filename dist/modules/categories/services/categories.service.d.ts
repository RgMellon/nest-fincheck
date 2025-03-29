import { CategoriesRepository } from 'src/shared/database/repositories/categories.repository';
export declare class CategoriesService {
    private readonly categoriesRepo;
    constructor(categoriesRepo: CategoriesRepository);
    findAllByUserId(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        userId: string;
        icon: string;
        type: import(".prisma/client").$Enums.TransactionType;
    }[]>;
}
