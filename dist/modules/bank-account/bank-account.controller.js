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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccountController = void 0;
const common_1 = require("@nestjs/common");
const bank_account_service_1 = require("./services/bank-account.service");
const create_bank_account_dto_1 = require("./dto/create-bank-account.dto");
const update_bank_account_dto_1 = require("./dto/update-bank-account.dto");
const CurrentUserId_1 = require("../../shared/decorators/CurrentUserId");
let BankAccountController = class BankAccountController {
    constructor(bankAccountService) {
        this.bankAccountService = bankAccountService;
    }
    create(userId, createBankAccountDto) {
        return this.bankAccountService.create(userId, createBankAccountDto);
    }
    findAll(userId) {
        return this.bankAccountService.findAllByUserId(userId);
    }
    update(userId, bankAccountId, updateBankAccountDto) {
        return this.bankAccountService.update(userId, bankAccountId, updateBankAccountDto);
    }
    remove(userId, bankAccountId) {
        return this.bankAccountService.remove(userId, bankAccountId);
    }
};
exports.BankAccountController = BankAccountController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, CurrentUserId_1.CurrentUserId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_bank_account_dto_1.CreateBankAccountDto]),
    __metadata("design:returntype", void 0)
], BankAccountController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, CurrentUserId_1.CurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BankAccountController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':bankAccountId'),
    __param(0, (0, CurrentUserId_1.CurrentUserId)()),
    __param(1, (0, common_1.Param)('bankAccountId', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_bank_account_dto_1.UpdateBankAccountDto]),
    __metadata("design:returntype", void 0)
], BankAccountController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':bankAccountId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, CurrentUserId_1.CurrentUserId)()),
    __param(1, (0, common_1.Param)('bankAccountId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], BankAccountController.prototype, "remove", null);
exports.BankAccountController = BankAccountController = __decorate([
    (0, common_1.Controller)('bank-account'),
    __metadata("design:paramtypes", [bank_account_service_1.BankAccountService])
], BankAccountController);
//# sourceMappingURL=bank-account.controller.js.map