import { TransactionsRepositories } from 'src/shared/database/repositories/transactions.repositories';
export declare class ValidateTransactionOwner {
    private readonly transationRepo;
    constructor(transationRepo: TransactionsRepositories);
    validate(userId: string, transactionId: string): Promise<void>;
}
