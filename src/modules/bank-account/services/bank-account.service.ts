import { Injectable } from '@nestjs/common';
import { CreateBankAccountDto } from '../dto/create-bank-account.dto';

import { BankAccountRepositories } from 'src/shared/database/repositories/bank-account.repositories';
import { UpdateBankAccountDto } from '../dto/update-bank-account.dto';
import { ValidateBankAccountOwner } from './validate-bankAccount-owner.service';

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

  findAllByUserId(userId: string) {
    return this.bankAccountRepo.findMany({
      where: {
        userId,
      },
    });
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
