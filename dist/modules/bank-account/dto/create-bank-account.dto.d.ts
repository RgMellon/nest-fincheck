import { BankAccountType } from './entities/BankAccountType';
export declare class CreateBankAccountDto {
    name: string;
    initialBalance: number;
    type: BankAccountType;
    color: string;
}
