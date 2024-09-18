import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { FilterProductDto } from './dto/filter-product.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Products")
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('compare')
  findAll(@Query() filter: FilterProductDto) {
    return this.productsService.findAll(filter);
  }
}
