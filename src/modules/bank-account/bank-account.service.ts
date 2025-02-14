import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';

import { BankAccountRepositories } from 'src/shared/database/repositories/bank-account.repositories';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';

@Injectable()
export class BankAccountService {
  constructor(private readonly bankAccountRepo: BankAccountRepositories) {}

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

    const isOwner = await this.bankAccountRepo.findFirst({
      where: {
        userId,
        id: bankAccountId,
      },
    });

    if (!isOwner) {
      throw new NotFoundException('BankAccount not found');
    }

    return this.bankAccountRepo.update({
      where: {
        id: bankAccountId,
      },
      data: { color, initialBalance, name, type },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} bankAccount`;
  }
}
