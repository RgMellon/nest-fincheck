import { CreateBankAccountDto } from '../dto/create-bank-account.dto';
import { BankAccountRepositories } from 'src/shared/database/repositories/bank-account.repositories';
import { UpdateBankAccountDto } from '../dto/update-bank-account.dto';
import { ValidateBankAccountOwner } from './validate-bankAccount-owner.service';
export declare class BankAccountService {
    private readonly bankAccountRepo;
    private readonly validateBanckAccountOwner;
    constructor(bankAccountRepo: BankAccountRepositories, validateBanckAccountOwner: ValidateBankAccountOwner);
    create(userId: string, createBankAccountDto: CreateBankAccountDto): import(".prisma/client").Prisma.Prisma__BankAccountClient<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.BankAccountType;
        initialBalance: number;
        color: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAllByUserId(userId: string): Promise<{}>;
    update(userId: string, bankAccountId: string, updateBankAccountDto: UpdateBankAccountDto): Promise<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.BankAccountType;
        initialBalance: number;
        color: string;
    }>;
    remove(userId: string, bankAccountId: string): Promise<any>;
}
