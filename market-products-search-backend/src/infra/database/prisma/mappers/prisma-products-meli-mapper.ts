import { ProductsMeli } from '@prisma/client';
import { ProductMeli } from '@app/entities/productMeli';

export class PrismaProductsMeliMapper {
  static toPrisma(product: ProductMeli) {
    return {
      type: product.product.type,
      permaLink: product.product.permaLink,
      image: product.product.image,
      title: product.product.title,
      model: product.product.model,
      brand: product.product.brand,
      price: product.product.price,
    };
  }

  static toDomain(raw: ProductsMeli): ProductMeli {
    return new ProductMeli({
      type: raw.type as 'Geladeira' | 'Celular' | 'TV',
      permaLink: raw.permaLink,
      image: raw.image,
      title: raw.title,
      model: raw.model,
      brand: raw.brand,
      price: raw.price,
    });
  }
}
