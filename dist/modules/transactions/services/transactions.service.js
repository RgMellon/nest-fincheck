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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const transactions_repositories_1 = require("../../../shared/database/repositories/transactions.repositories");
const validate_bankAccount_owner_service_1 = require("../../bank-account/services/validate-bankAccount-owner.service");
const validate_categories_owner_service_1 = require("../../categories/services/validate-categories-owner.service");
const validate_transaction_owner_service_1 = require("./validate-transaction-owner.service");
let TransactionsService = class TransactionsService {
    constructor(transactionRepo, validateAccountOwnerService, validateCategoryOwnerService, validateTransactionOwnerService) {
        this.transactionRepo = transactionRepo;
        this.validateAccountOwnerService = validateAccountOwnerService;
        this.validateCategoryOwnerService = validateCategoryOwnerService;
        this.validateTransactionOwnerService = validateTransactionOwnerService;
    }
    async create(userId, createTransactionDto) {
        const { bankAccountId, categoryId, date, name, type, value } = createTransactionDto;
        await this.validateEntityOwner({ bankAccountId, categoryId, userId });
        return this.transactionRepo.create({
            data: {
                userId,
                bankAccountId,
                categoryId,
                date,
                name,
                type,
                value,
            },
        });
    }
    findAllByUserId(userId, { month, year, bankAccountId, type, }) {
        return this.transactionRepo.findMany({
            where: {
                userId,
                type,
                bankAccountId,
                date: {
                    gte: new Date(Date.UTC(year, month)),
                    lt: new Date(Date.UTC(year, month + 1)),
                },
            },
            include: {
                category: {
                    select: {
                        icon: true,
                        id: true,
                        name: true,
                    },
                },
            },
        });
    }
    async update(userId, transactionId, updateTransactionDto) {
        const { bankAccountId, categoryId, name, value, date, type } = updateTransactionDto;
        await this.validateEntityOwner({
            bankAccountId,
            categoryId,
            userId,
            transactionId,
        });
        return this.transactionRepo.update({
            where: {
                id: transactionId,
            },
            data: {
                bankAccountId,
                categoryId,
                name,
                value,
                date,
                type,
            },
        });
    }
    async remove(transactionId, userId) {
        await this.validateEntityOwner({
            transactionId,
            userId,
        });
        await this.transactionRepo.delete({
            where: {
                id: transactionId,
            },
        });
        return null;
    }
    async validateEntityOwner({ bankAccountId, categoryId, userId, transactionId, }) {
        return Promise.all([
            transactionId &&
                this.validateTransactionOwnerService.validate(userId, transactionId),
            bankAccountId &&
                this.validateAccountOwnerService.validate(userId, bankAccountId),
            categoryId &&
                this.validateCategoryOwnerService.validate(userId, categoryId),
        ]);
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transactions_repositories_1.TransactionsRepositories,
        validate_bankAccount_owner_service_1.ValidateBankAccountOwner,
        validate_categories_owner_service_1.ValidateCategoriesOwner,
        validate_transaction_owner_service_1.ValidateTransactionOwner])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map