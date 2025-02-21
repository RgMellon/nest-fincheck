import { Module } from '@nestjs/common';
import { BankAccountService } from './services/bank-account.service';
import { BankAccountController } from './bank-account.controller';
import { ValidateBankAccountOwner } from './services/validate-bankAccount-owner.service';

@Module({
  controllers: [BankAccountController],
  providers: [BankAccountService, ValidateBankAccountOwner],
  exports: [ValidateBankAccountOwner],
})
export class BankAccountModule {}
