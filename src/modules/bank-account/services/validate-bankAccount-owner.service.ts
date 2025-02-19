import { Injectable, NotFoundException } from '@nestjs/common';
import { BankAccountRepositories } from 'src/shared/database/repositories/bank-account.repositories';

@Injectable()
export class ValidateBankAccountOwner {
  constructor(private readonly bankAccountRepo: BankAccountRepositories) {}

  async validate(userId: string, bankAccountId: string) {
    const isOwner = await this.bankAccountRepo.findFirst({
      where: {
        userId,
        id: bankAccountId,
      },
    });

    if (!isOwner) {
      throw new NotFoundException('BankAccount not found');
    }
  }
}
