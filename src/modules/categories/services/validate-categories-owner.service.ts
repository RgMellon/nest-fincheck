import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repository';

@Injectable()
export class ValidateCategoriesOwner {
  constructor(private readonly categoryRepo: CategoriesRepository) {}

  async validate(userId: string, categoryId: string) {
    const isOwner = await this.categoryRepo.findFirst({
      where: {
        userId,
        id: categoryId,
      },
    });

    if (!isOwner) {
      throw new NotFoundException('BankAccount not found');
    }
  }
}
