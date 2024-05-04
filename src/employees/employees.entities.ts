import { Employee } from '@prisma/client';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmployeesEntity implements Employee {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  first_name: string;

  @IsString()
  @IsOptional()
  last_name: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
    required: true,
    description: 'Employee email',
    uniqueItems: true,
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  position: string;

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  @ApiProperty()
  phone: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  id: number;
}
