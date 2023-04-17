import { ProductsBuscape } from '@prisma/client';
import { ProductBuscape } from '@app/entities/productBuscape';

export class PrismaProductsBuscapeMapper {
  static toPrisma(product: ProductBuscape) {
    return {
      type: product.product.type,
      permaLink: product.product.permaLink,
      image: product.product.image,
      title: product.product.title,
      rating: product.product.rating,
      storeMostCheap: product.product.storeMostCheap,
      price: product.product.price,
    };
  }

  static toDomain(raw: ProductsBuscape): ProductBuscape {
    return new ProductBuscape({
      type: raw.type as 'Geladeira' | 'Celular' | 'TV',
      permaLink: raw.permaLink,
      image: raw.image,
      title: raw.title,
      rating: raw.rating,
      storeMostCheap: raw.storeMostCheap,
      price: raw.price,
    });
  }
}
