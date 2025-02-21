import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepositories } from 'src/shared/database/repositories/transactions.repositories';

@Injectable()
export class ValidateTransactionOwner {
  constructor(private readonly transationRepo: TransactionsRepositories) {}

  async validate(userId: string, transactionId: string) {
    const isOwner = await this.transationRepo.findFirst({
      where: {
        userId,
        id: transactionId,
      },
    });

    if (!isOwner) {
      throw new NotFoundException('Transaction not found');
    }
  }
}
