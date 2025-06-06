"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateCategoriesOwner = void 0;
const common_1 = require("@nestjs/common");
const categories_repository_1 = require("../../../shared/database/repositories/categories.repository");
let ValidateCategoriesOwner = class ValidateCategoriesOwner {
    constructor(categoryRepo) {
        this.categoryRepo = categoryRepo;
    }
    async validate(userId, categoryId) {
        const isOwner = await this.categoryRepo.findFirst({
            where: {
                userId,
                id: categoryId,
            },
        });
        if (!isOwner) {
            throw new common_1.NotFoundException('BankAccount not found');
        }
    }
};
exports.ValidateCategoriesOwner = ValidateCategoriesOwner;
exports.ValidateCategoriesOwner = ValidateCategoriesOwner = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [categories_repository_1.CategoriesRepository])
], ValidateCategoriesOwner);
//# sourceMappingURL=validate-categories-owner.service.js.map