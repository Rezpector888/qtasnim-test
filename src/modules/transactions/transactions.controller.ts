import { Controller, Get, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { FilterTransactionDto } from './dto/filter-transaction.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Transactions")
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  findAll(@Query() filter: FilterTransactionDto) {
    return this.transactionsService.findAll(filter);
  }

}
