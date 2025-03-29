import { TransactionsService } from './services/transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionType } from './entities/Transaction';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    create(userId: string, createTransactionDto: CreateTransactionDto): Promise<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.TransactionType;
        bankAccountId: string;
        categoryId: string | null;
        value: number;
        date: Date;
    }>;
    findAll(month: number, year: number, bankAccountId: string, type: TransactionType, userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.TransactionType;
        bankAccountId: string;
        categoryId: string | null;
        value: number;
        date: Date;
    }[]>;
    update(userid: string, id: string, updateTransactionDto: UpdateTransactionDto): Promise<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.TransactionType;
        bankAccountId: string;
        categoryId: string | null;
        value: number;
        date: Date;
    }>;
    remove(userId: string, id: string): Promise<any>;
}
