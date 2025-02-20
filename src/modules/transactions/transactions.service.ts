import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { TransactionsRepositories } from 'src/shared/database/repositories/transactions.repositories';

@Injectable()
export class TransactionsService {
  constructor(private readonly transactionRepo: TransactionsRepositories) {}

  create(createTransactionDto: CreateTransactionDto) {
    return 'This action adds a new transaction';
  }

  findAllByUserId(userId: string) {
    return this.transactionRepo.findMany({
      where: {
        userId,
      },
    });
  }

  update(id: string, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
