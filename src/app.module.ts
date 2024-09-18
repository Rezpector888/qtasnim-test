import { Module } from '@nestjs/common';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { ProductsModule } from './modules/products/products.module';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    ProductsModule, 
    TransactionsModule
  ],
})
export class AppModule {}
