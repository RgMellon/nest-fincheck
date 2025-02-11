import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CurrentUserId } from 'src/shared/decorators/CurrentUserId';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(@CurrentUserId() userId: string) {
    return this.categoriesService.findAllByUserId(userId);
  }
}
