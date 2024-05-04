import { Module } from '@nestjs/common';
import { EmployeesController } from './employees/employees.controller';
import { EmployeesService } from './employees/employees.service';
import { EmployeesModule } from './employees/employees.module';
import { PrismaService } from './prisma/prisma.service';
// import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [EmployeesModule],
  controllers: [EmployeesController],
  providers: [EmployeesService, PrismaService],
})
export class AppModule {}
