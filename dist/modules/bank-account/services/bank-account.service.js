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
exports.BankAccountService = void 0;
const common_1 = require("@nestjs/common");
const bank_account_repositories_1 = require("../../../shared/database/repositories/bank-account.repositories");
const validate_bankAccount_owner_service_1 = require("./validate-bankAccount-owner.service");
let BankAccountService = class BankAccountService {
    constructor(bankAccountRepo, validateBanckAccountOwner) {
        this.bankAccountRepo = bankAccountRepo;
        this.validateBanckAccountOwner = validateBanckAccountOwner;
    }
    create(userId, createBankAccountDto) {
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
    async findAllByUserId(userId) {
        const result = await this.bankAccountRepo.findMany({
            where: {
                userId,
            },
            include: {
                transactions: {
                    select: {
                        value: true,
                        type: true,
                    },
                },
            },
        });
        return result.map((bankAccount) => {
            const totalTransactions = bankAccount.transactions.reduce((acc, current) => {
                if (current.type === 'INCOME')
                    return acc + current.value;
                if (current.type === 'EXPENSE')
                    return acc - current.value;
            }, 0);
            const currentBalance = bankAccount.initialBalance + totalTransactions;
            return { ...bankAccount, totalTransactions, currentBalance };
        });
        return {};
    }
    async update(userId, bankAccountId, updateBankAccountDto) {
        const { color, initialBalance, name, type } = updateBankAccountDto;
        await this.validateBanckAccountOwner.validate(userId, bankAccountId);
        return this.bankAccountRepo.update({
            where: {
                id: bankAccountId,
            },
            data: { color, initialBalance, name, type },
        });
    }
    async remove(userId, bankAccountId) {
        await this.validateBanckAccountOwner.validate(userId, bankAccountId);
        await this.bankAccountRepo.delete({
            where: {
                id: bankAccountId,
            },
        });
        return null;
    }
};
exports.BankAccountService = BankAccountService;
exports.BankAccountService = BankAccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [bank_account_repositories_1.BankAccountRepositories,
        validate_bankAccount_owner_service_1.ValidateBankAccountOwner])
], BankAccountService);
//# sourceMappingURL=bank-account.service.js.map