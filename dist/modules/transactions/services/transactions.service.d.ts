import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { TransactionsRepositories } from 'src/shared/database/repositories/transactions.repositories';
import { ValidateBankAccountOwner } from '../../bank-account/services/validate-bankAccount-owner.service';
import { ValidateCategoriesOwner } from '../../categories/services/validate-categories-owner.service';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { ValidateTransactionOwner } from './validate-transaction-owner.service';
import { TransactionType } from '../entities/Transaction';
export declare class TransactionsService {
    private readonly transactionRepo;
    private readonly validateAccountOwnerService;
    private readonly validateCategoryOwnerService;
    private readonly validateTransactionOwnerService;
    constructor(transactionRepo: TransactionsRepositories, validateAccountOwnerService: ValidateBankAccountOwner, validateCategoryOwnerService: ValidateCategoriesOwner, validateTransactionOwnerService: ValidateTransactionOwner);
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
    findAllByUserId(userId: string, { month, year, bankAccountId, type, }: {
        month: number;
        year: number;
        bankAccountId?: string;
        type?: TransactionType;
    }): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.TransactionType;
        bankAccountId: string;
        categoryId: string | null;
        value: number;
        date: Date;
    }[]>;
    update(userId: string, transactionId: string, updateTransactionDto: UpdateTransactionDto): Promise<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.TransactionType;
        bankAccountId: string;
        categoryId: string | null;
        value: number;
        date: Date;
    }>;
    remove(transactionId: string, userId: string): Promise<any>;
    private validateEntityOwner;
}
