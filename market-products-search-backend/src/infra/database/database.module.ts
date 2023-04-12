import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import ProductRepository from '@app/repositories/products-repository';
import { PrismaProductsRepository } from './prisma/repositories/prisma-products-repository';

@Module({
  providers: [
    PrismaService,
    { provide: ProductRepository, useClass: PrismaProductsRepository },
  ],
  exports: [ProductRepository],
})
export class DatabaseModule {}
