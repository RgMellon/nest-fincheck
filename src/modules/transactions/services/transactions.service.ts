import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from '../dto/create-transaction.dto';
import { TransactionsRepositories } from 'src/shared/database/repositories/transactions.repositories';
import { ValidateBankAccountOwner } from '../../bank-account/services/validate-bankAccount-owner.service';
import { ValidateCategoriesOwner } from '../../categories/services/validate-categories-owner.service';
import { UpdateTransactionDto } from '../dto/update-transaction.dto';
import { ValidateTransactionOwner } from './validate-transaction-owner.service';
import { TransactionType } from '../entities/Transaction';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly transactionRepo: TransactionsRepositories,
    private readonly validateAccountOwnerService: ValidateBankAccountOwner,
    private readonly validateCategoryOwnerService: ValidateCategoriesOwner,
    private readonly validateTransactionOwnerService: ValidateTransactionOwner,
  ) {}

  async create(userId: string, createTransactionDto: CreateTransactionDto) {
    const { bankAccountId, categoryId, date, name, type, value } =
      createTransactionDto;

    await this.validateEntityOwner({ bankAccountId, categoryId, userId });

    return this.transactionRepo.create({
      data: {
        userId,
        bankAccountId,
        categoryId,
        date,
        name,
        type,
        value,
      },
    });
  }

  findAllByUserId(
    userId: string,
    {
      month,
      year,
      bankAccountId,
      type,
    }: {
      month: number;
      year: number;
      bankAccountId?: string;
      type?: TransactionType;
    },
  ) {
    return this.transactionRepo.findMany({
      where: {
        userId,
        type,
        bankAccountId,
        date: {
          gte: new Date(Date.UTC(year, month)),
          lt: new Date(Date.UTC(year, month + 1)),
        },
      },
    });
  }

  async update(
    userId: string,
    transactionId: string,
    updateTransactionDto: UpdateTransactionDto,
  ) {
    const { bankAccountId, categoryId, name, value, date, type } =
      updateTransactionDto;

    await this.validateEntityOwner({
      bankAccountId,
      categoryId,
      userId,
      transactionId,
    });

    return this.transactionRepo.update({
      where: {
        id: transactionId,
      },
      data: {
        bankAccountId,
        categoryId,
        name,
        value,
        date,
        type,
      },
    });
  }

  async remove(transactionId: string, userId: string) {
    await this.validateEntityOwner({
      transactionId,
      userId,
    });

    await this.transactionRepo.delete({
      where: {
        id: transactionId,
      },
    });

    return null;
  }

  private async validateEntityOwner({
    bankAccountId,
    categoryId,
    userId,
    transactionId,
  }: {
    userId: string;
    categoryId?: string;
    bankAccountId?: string;
    transactionId?: string;
  }) {
    return Promise.all([
      transactionId &&
        this.validateTransactionOwnerService.validate(userId, transactionId),

      bankAccountId &&
        this.validateAccountOwnerService.validate(userId, bankAccountId),

      categoryId &&
        this.validateCategoryOwnerService.validate(userId, categoryId),
    ]);
  }
}
