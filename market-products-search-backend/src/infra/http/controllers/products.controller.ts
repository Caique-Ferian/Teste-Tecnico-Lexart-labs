import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { AddingProductsToDb } from '@app/use-cases/adding-products-to-db';
import { GetAllProducts } from '@app/use-cases/get-all-products';
import { FilterProducts } from '@app/use-cases/filter-products';
import { ProductBuscape } from '@app/entities/productBuscape';
import { ProductMeli } from '@app/entities/productMeli';

@Controller('products')
export class ProductsController {
  constructor(
    private addingProductsToDb: AddingProductsToDb,
    private getAllProducts: GetAllProducts,
    private filterProducts: FilterProducts,
  ) {}

  @Post()
  async create(@Body() body: ProductBuscape[] | ProductMeli[]): Promise<void> {
    await this.addingProductsToDb.execute({ products: body });
  }

  @Get(':site')
  async getAll(
    @Param('site') site: string,
  ): Promise<ProductBuscape[] | ProductMeli[]> {
    const { products } = await this.getAllProducts.execute({ site });
    return products;
  }

  @Get('filter/:site/:query')
  async filter(
    @Param('site') site: string,
    @Param('query') query: string,
  ): Promise<ProductBuscape[] | ProductMeli[]> {
    const { products } = await this.filterProducts.execute({ query, site });
    return products;
  }
}
