import { Module } from '@nestjs/common';
import { TransactionsService } from './services/transactions.service';
import { TransactionsController } from './transactions.controller';

import { BankAccountModule } from '../bank-account/bank-account.module';
import { CategoriesModule } from '../categories/categories.module';
import { ValidateTransactionOwner } from './services/validate-transaction-owner.service';

@Module({
  imports: [BankAccountModule, CategoriesModule],
  controllers: [TransactionsController],
  providers: [TransactionsService, ValidateTransactionOwner],
})
export class TransactionsModule {}
