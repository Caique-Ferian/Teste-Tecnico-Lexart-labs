import { Injectable } from '@nestjs/common';
import ProductRepository from '@app/repositories/products-repository';
import { PrismaService } from '../prisma.service';
import { ProductBuscape } from '@app/entities/productBuscape';
import { ProductMeli } from '@app/entities/productMeli';
import { PrismaProductsBuscapeMapper } from '../mappers/prisma-products-buscape-mapper';
import { PrismaProductsMeliMapper } from '../mappers/prisma-products-meli-mapper';

@Injectable()
export class PrismaProductsRepository implements ProductRepository {
  constructor(private prisma: PrismaService) {}

  async create(product: ProductBuscape | ProductMeli): Promise<void> {
    if (product instanceof ProductBuscape) {
      await this.prisma.productsBuscape.create({
        data: PrismaProductsBuscapeMapper.toPrisma(product),
      });
    } else if (product instanceof ProductMeli) {
      await this.prisma.productsMeli.create({
        data: PrismaProductsMeliMapper.toPrisma(product),
      });
    }
  }
  async filter(
    query: string,
    site: string,
  ): Promise<ProductBuscape[] | ProductMeli[]> {
    let products;
    if (site === 'buscape') {
      products = await this.prisma.productsBuscape.findMany({
        where: {
          title: {
            contains: query,
          },
        },
      });
      return products.map(PrismaProductsBuscapeMapper.toDomain);
    } else {
      products = await this.prisma.productsMeli.findMany({
        where: {
          title: {
            contains: query,
          },
        },
      });
      return products.map(PrismaProductsMeliMapper.toDomain);
    }
  }
}
