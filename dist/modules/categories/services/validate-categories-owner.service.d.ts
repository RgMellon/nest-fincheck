import { CategoriesRepository } from 'src/shared/database/repositories/categories.repository';
export declare class ValidateCategoriesOwner {
    private readonly categoryRepo;
    constructor(categoryRepo: CategoriesRepository);
    validate(userId: string, categoryId: string): Promise<void>;
}
