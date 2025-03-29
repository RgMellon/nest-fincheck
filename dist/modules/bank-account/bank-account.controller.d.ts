import { BankAccountService } from './services/bank-account.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
export declare class BankAccountController {
    private readonly bankAccountService;
    constructor(bankAccountService: BankAccountService);
    create(userId: string, createBankAccountDto: CreateBankAccountDto): import(".prisma/client").Prisma.Prisma__BankAccountClient<{
        id: string;
        name: string;
        userId: string;
        type: import(".prisma/client").$Enums.BankAccountType;
        initialBalance: number;
        color: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(userId: string): Promise<{}>;
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
