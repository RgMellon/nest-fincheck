import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UsersRepository } from './repositories/users.repositories';
import { CategoriesRepository } from './repositories/categories.repository';

import { BankAccountRepositories } from './repositories/bank-account.repositories';
import { TransactionsRepositories } from './repositories/transactions.repositories';

@Global()
@Module({
  providers: [
    UsersRepository,
    PrismaService,
    CategoriesRepository,
    BankAccountRepositories,
    TransactionsRepositories,
  ],
  exports: [
    UsersRepository,
    CategoriesRepository,
    BankAccountRepositories,
    TransactionsRepositories,
  ],
})
export class DatabaseModule {}
