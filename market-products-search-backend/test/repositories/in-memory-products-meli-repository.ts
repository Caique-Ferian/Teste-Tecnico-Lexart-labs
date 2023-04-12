import { ProductMeli } from '@app/entities/productMeli';
import ProductRepository from '@app/repositories/products-repository';

export class InMemoryProductsMeliRepository implements ProductRepository {
  public products: ProductMeli[] = [];

  async create(product: ProductMeli): Promise<void> {
    this.products.push(product);
  }
  async getAll(): Promise<ProductMeli[]> {
    return this.products;
  }
  async filter(query: string): Promise<ProductMeli[]> {
    return this.products.filter((e) => e.product.title.includes(query));
  }
}
