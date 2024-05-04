import { PrismaClient } from '@prisma/client';
import * as process from 'process';

const prisma = new PrismaClient();

async function main() {
  await prisma.employee.upsert({
    update: {},
    where: {
      email: 'john.doe@gmail.com',
    },
    create: {
      email: 'john.doe@gmail.com',
      first_name: 'john',
      last_name: 'doe',
      position: 'CEO',
      phone: '+62812441234',
    },
  });

  await prisma.employee.upsert({
    where: {
      email: 'jane.toe@gmail.com',
    },
    update: {},
    create: {
      email: 'jane.toe@gmail.com',
      first_name: 'jane',
      last_name: 'toe',
      position: 'CTO',
      phone: '+62812441236',
    },
  });

  await prisma.employee.upsert({
    create: {
      email: 'joe.foo@gmail.com',
      first_name: 'joe',
      last_name: 'foo',
      position: 'Product Manager',
      phone: '+62812441238',
    },
    update: {},
    where: {
      email: 'joe.foo@gmail.com',
    },
  });
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
