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
exports.TransactionsRepositories = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let TransactionsRepositories = class TransactionsRepositories {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createDto) {
        return this.prismaService.transaction.create(createDto);
    }
    update(updateDto) {
        return this.prismaService.transaction.update(updateDto);
    }
    findMany(findManyDto) {
        return this.prismaService.transaction.findMany(findManyDto);
    }
    findFirst(findFirstDto) {
        return this.prismaService.transaction.findFirst(findFirstDto);
    }
    delete(deleteDto) {
        return this.prismaService.transaction.delete(deleteDto);
    }
};
exports.TransactionsRepositories = TransactionsRepositories;
exports.TransactionsRepositories = TransactionsRepositories = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionsRepositories);
//# sourceMappingURL=transactions.repositories.js.map