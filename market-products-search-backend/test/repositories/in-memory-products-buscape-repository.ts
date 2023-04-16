import { ProductBuscape } from '@app/entities/productBuscape';
import ProductRepository from '@app/repositories/products-repository';

export class InMemoryProductsBuscapeRepository implements ProductRepository {
  public products: ProductBuscape[] = [];

  async create(product: ProductBuscape): Promise<void> {
    this.products.push(product);
  }
  async filter(query: string, _site: string): Promise<ProductBuscape[]> {
    return this.products.filter((e) => e.product.title === query);
  }
}
