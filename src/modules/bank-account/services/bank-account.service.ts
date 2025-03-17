import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from '../dto/create-bank-account.dto';

import { BankAccountRepositories } from 'src/shared/database/repositories/bank-account.repositories';
import { UpdateBankAccountDto } from '../dto/update-bank-account.dto';
import { ValidateBankAccountOwner } from './validate-bankAccount-owner.service';
import { TransactionType } from 'src/modules/transactions/entities/Transaction';

@Injectable()
export class BankAccountService {
  constructor(
    private readonly bankAccountRepo: BankAccountRepositories,
    private readonly validateBanckAccountOwner: ValidateBankAccountOwner,
  ) {}

  create(userId: string, createBankAccountDto: CreateBankAccountDto) {
    const { color, initialBalance, name, type } = createBankAccountDto;

    return this.bankAccountRepo.create({
      data: {
        userId,
        color,
        initialBalance,
        name,
        type,
      },
    });
  }

  async findAllByUserId(userId: string) {
    const result = await this.bankAccountRepo.findMany({
      where: {
        userId,
      },
      include: {
        transactions: {
          select: {
            value: true,
            type: true,
          },
        },
      },
    });

    return result.map((bankAccount) => {
      const totalTransactions = bankAccount.transactions.reduce(
        (acc: number, current: { type: TransactionType; value: number }) => {
          if (current.type === 'INCOME') return acc + current.value;
          if (current.type === 'EXPENSE') return acc - current.value;
        },
        0,
      );

      const currentBalance = bankAccount.initialBalance + totalTransactions;

      return { ...bankAccount, totalTransactions, currentBalance };
    });

    return {};
  }

  async update(
    userId: string,
    bankAccountId: string,
    updateBankAccountDto: UpdateBankAccountDto,
  ) {
    const { color, initialBalance, name, type } = updateBankAccountDto;

    await this.validateBanckAccountOwner.validate(userId, bankAccountId);

    return this.bankAccountRepo.update({
      where: {
        id: bankAccountId,
      },
      data: { color, initialBalance, name, type },
    });
  }

  async remove(userId: string, bankAccountId: string) {
    await this.validateBanckAccountOwner.validate(userId, bankAccountId);

    await this.bankAccountRepo.delete({
      where: {
        id: bankAccountId,
      },
    });

    return null;
  }
}
