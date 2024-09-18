import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        id: 1,
        name: 'Kopi',
        stock: 100,
      },
      {
        id: 2,
        name: 'Teh',
        stock: 100,
      },
      {
        id: 3,
        name: 'Pasta gigi',
        stock: 100,
      },
      {
        id: 4,
        name: 'Sabun mandi',
        stock: 100,
      },
      {
        id: 5,
        name: 'Sampo',
        stock: 100,
      },
    ],
  });

  await prisma.category.createMany({
    data: [
      {
        id: 1,
        name: 'Konsumsi',
      },
      {
        id: 2,
        name: 'Pembersih',
      },
    ],
  });

  await prisma.transaction.createMany({
    data: [
      {
        categoryId: 1,
        productId: 1,
        quantitySold: 10,
        transactionDate: new Date("05-01-2021")
      },
      {
        categoryId: 1,
        productId: 2,
        quantitySold: 19,
        transactionDate: new Date("05-05-2021")
      },
      {
        categoryId: 1,
        productId:1,
        quantitySold: 15,
        transactionDate: new Date("05-10-2021")
      },
      {
        categoryId: 2,
        productId: 3,
        quantitySold: 20,
        transactionDate: new Date("05-11-2021")
      },
      {
        categoryId: 2,
        productId: 4,
        quantitySold: 30,
        transactionDate: new Date("05-11-2021"),
      },
      {
        categoryId: 2,
        productId:5,
        quantitySold: 25,
        transactionDate: new Date("05-12-2021")
      },
      {
        categoryId: 1,
        productId: 2,
        quantitySold: 5,
        transactionDate: new Date("05-12-2021")
      }
    ],
  });
}

main().finally(async () => await prisma.$disconnect);
