import { ProductBuscape } from '@app/entities/productBuscape';
import { ProductMeli } from '@app/entities/productMeli';
export default abstract class ProductRepository {
  abstract create(product: ProductBuscape | ProductMeli): Promise<void>;
  abstract getAll(site: string): Promise<ProductBuscape[] | ProductMeli[]>;
  abstract filter(
    query: string,
    site: string,
  ): Promise<ProductBuscape[] | ProductMeli[]>;
}
