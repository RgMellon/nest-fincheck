import { BankAccountRepositories } from 'src/shared/database/repositories/bank-account.repositories';
export declare class ValidateBankAccountOwner {
    private readonly bankAccountRepo;
    constructor(bankAccountRepo: BankAccountRepositories);
    validate(userId: string, bankAccountId: string): Promise<void>;
}
