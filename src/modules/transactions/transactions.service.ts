import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'nestjs-prisma';
import { FilterTransactionDto } from './dto/filter-transaction.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransactionsService {
 constructor(private prismaService: PrismaService) {}

 async findAll(filter: FilterTransactionDto) {
  const { search, sortBy}  = filter;
  const where: Prisma.TransactionWhereInput = {

  }
  if(search) {
    where['OR'] = [
      {
        product: {
          name: {
            contains: search,
            mode: 'insensitive'
          }
        }
      },
      {
        category: {
          name: {
            contains: search,
            mode: 'insensitive'
          }
        }
      },
    ]
  }
  const orderBy: Prisma.TransactionOrderByWithRelationInput = {}
  if(sortBy) {
    if(sortBy == 'name') {
      orderBy.product = {
        name: 'asc'
      }
    }else if(sortBy == 'transactionDate') {
      orderBy.transactionDate = 'desc'
    }
  }
  return await this.prismaService.transaction.findMany({
    where,
    orderBy,
    include: {
      category: true,
      product: true
    }
  })
 }
}
