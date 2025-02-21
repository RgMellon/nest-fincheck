import { Module } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { CategoriesController } from './categories.controller';
import { ValidateCategoriesOwner } from './services/validate-categories-owner.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, ValidateCategoriesOwner],
  exports: [ValidateCategoriesOwner],
})
export class CategoriesModule {}
