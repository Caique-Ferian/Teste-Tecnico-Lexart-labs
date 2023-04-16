import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { AddingProductsToDb } from '@app/use-cases/adding-products-to-db';
import { FilterProducts } from '@app/use-cases/filter-products';
import { ScrapBuscape } from '@app/use-cases/scrap-buscape';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [AddingProductsToDb, FilterProducts, ScrapBuscape],
})
export class HttpModule {}
