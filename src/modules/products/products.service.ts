import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'nestjs-prisma';
import { FilterProductDto } from './dto/filter-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  async  findAll(filter: FilterProductDto) {
    const  {dateFrom, dateTo} = filter;
    const transactions = await this.prismaService.transaction.groupBy(
      {
        by: ['categoryId'],
        where: {
          transactionDate: {
            gte: new Date(dateFrom),
            lte: new Date(dateTo),
          },
        },
        _sum: {
          quantitySold: true,
        },
        orderBy: {
          _sum: {
            quantitySold: 'desc',
          },
        },
      }
    )
    const result = await Promise.all(
      transactions.map(async (transaction) => {
        const category = await this.prismaService.category.findUnique({
          where: { id: transaction.categoryId },
        });
        return {
          category: category.name,
          totalSold: transaction._sum.quantitySold,
        };
      }),
    );

    return result;
  }
}
