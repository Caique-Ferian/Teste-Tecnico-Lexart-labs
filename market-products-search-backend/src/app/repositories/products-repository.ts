import { ProductBuscape } from '@app/entities/productBuscape';
import { ProductMeli } from '@app/entities/productMeli';
export default abstract class ProductRepository {
  abstract create(product: ProductBuscape | ProductMeli): Promise<void>;
  abstract getAll(): Promise<ProductBuscape[] | ProductMeli[]>;
  abstract filter(type: string): Promise<ProductBuscape[] | ProductMeli[]>;
}
