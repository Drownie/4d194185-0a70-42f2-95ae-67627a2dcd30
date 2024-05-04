import {Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from '@prisma/client';
import { OrderDirection } from '../../common/common.enum';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { EmployeeOrderEnum } from './employees.enum';
import { EmployeesDto } from './employees.dto';
import { EmployeesEntity } from './employees.entities';
import { OrderByDecorator } from '../../common/orderBy.decorator';
import {
  SortingParam,
  SortingParams,
} from '../../common/sortingParams.decorator';

@Controller('employees')
@ApiTags('employees')
export class EmployeesController {
  constructor(private employeeService: EmployeesService) {}

  @Get()
  @OrderByDecorator(Object.values(EmployeeOrderEnum))
  @ApiOkResponse({ type: EmployeesEntity, isArray: true })
  async fetchEmployees(
    @SortingParams(Object.values(EmployeeOrderEnum)) sort?: SortingParam,
  ): Promise<Employee[]> {
    return await this.employeeService.fetchEmployees(sort);
  }

  @Post()
  @ApiOkResponse({ type: EmployeesEntity })
  async createEmployee(
    @Body() payload: EmployeesDto,
  ): Promise<EmployeesEntity> {
    return await this.employeeService.createEmployee(payload);
  }

  @Put(':id')
  @ApiOkResponse({ type: EmployeesEntity })
  async updateEmployeeById(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: EmployeesDto,
  ): Promise<EmployeesEntity> {
    return await this.employeeService.updateEmployeeById(id, payload);
  }
}
