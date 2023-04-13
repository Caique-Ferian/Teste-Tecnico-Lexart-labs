import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { AddingProductsToDb } from '@app/use-cases/adding-products-to-db';
import { GetAllProducts } from '@app/use-cases/get-all-products';
import { FilterProducts } from '@app/use-cases/filter-products';
import { ProductBuscape } from '@app/entities/productBuscape';
import { ProductMeli } from '@app/entities/productMeli';
import { AddingProductsToDbDTO } from '../dtos/';
import { ScrapBuscape } from '@app/use-cases/scrap-buscape';
import { ProductBuscapeProps } from '@app/entities/types';

@Controller('products')
export class ProductsController {
  constructor(
    private addingProductsToDb: AddingProductsToDb,
    private getAllProducts: GetAllProducts,
    private scrapBuscape: ScrapBuscape,
    private filterProducts: FilterProducts,
  ) {}

  @Post()
  async create(@Body() body: AddingProductsToDbDTO): Promise<void> {
    const { products, site } = body;
    await this.addingProductsToDb.execute({ products, site });
  }

  @Get('all/:site')
  async getAll(
    @Param('site') site: string,
  ): Promise<ProductBuscape[] | ProductMeli[]> {
    const { products } = await this.getAllProducts.execute({ site });
    return products;
  }

  @Get('scrap-buscape/:endpoint')
  async scrap(
    @Param('endpoint') endpoint: string,
  ): Promise<ProductBuscapeProps[]> {
    const { products } = await this.scrapBuscape.execute({ endpoint });
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
