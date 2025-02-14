import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { BankAccountService } from './bank-account.service';
import { CreateBankAccountDto } from './dto/create-bank-account.dto';
import { UpdateBankAccountDto } from './dto/update-bank-account.dto';
import { CurrentUserId } from 'src/shared/decorators/CurrentUserId';

@Controller('bank-account')
export class BankAccountController {
  constructor(private readonly bankAccountService: BankAccountService) {}

  @Post()
  create(
    @CurrentUserId() userId: string,
    @Body() createBankAccountDto: CreateBankAccountDto,
  ) {
    return this.bankAccountService.create(userId, createBankAccountDto);
  }

  @Get()
  findAll(@CurrentUserId() userId: string) {
    return this.bankAccountService.findAllByUserId(userId);
  }

  @Put(':bankAccountId')
  update(
    @CurrentUserId() userId: string,
    @Param('bankAccountId') bankAccountId: string,
    @Body() updateBankAccountDto: UpdateBankAccountDto,
  ) {
    return this.bankAccountService.update(
      userId,
      bankAccountId,
      updateBankAccountDto,
    );
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.bankAccountService.remove(+id);
  // }
}
