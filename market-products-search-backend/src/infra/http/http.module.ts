import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { AddingProductsToDb } from '@app/use-cases/adding-products-to-db';
import { GetAllProducts } from '@app/use-cases/get-all-products';
import { FilterProducts } from '@app/use-cases/filter-products';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [AddingProductsToDb, GetAllProducts, FilterProducts],
})
export class HttpModule {}
