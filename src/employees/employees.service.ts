import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OrderDirection } from '../../common/common.enum';
import { EmployeesDto } from './employees.dto';
import { EmployeesEntity } from './employees.entities';
import { SortingParam } from '../../common/sortingParams.decorator';
import { Prisma } from '@prisma/client';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  async fetchEmployees(sort: SortingParam): Promise<EmployeesEntity[]> {
    const orderByObject: Prisma.EmployeeOrderByWithRelationInput = {
      ...(sort ? { [sort.property]: sort.direction } : { id: 'asc' }),
    };

    return this.prisma.employee.findMany({
      orderBy: orderByObject,
    });
  }

  async createEmployee(payload: EmployeesDto) {
    return this.prisma.employee.create({ data: payload });
  }

  async updateEmployeeById(id: number, payload: EmployeesDto) {
    return this.prisma.employee.update({ data: payload, where: { id: id } });
  }
}
