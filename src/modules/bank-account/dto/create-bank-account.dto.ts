import {
  IsEnum,
  IsHexColor,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { BankAccountType } from './entities/BankAccountType';

export class CreateBankAccountDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  initialBalance: number;

  @IsNotEmpty()
  @IsEnum(BankAccountType)
  type: BankAccountType;

  @IsHexColor()
  color: string;
}
