import { ProductBuscape } from '@app/entities/productBuscape';
import { ProductMeli } from '@app/entities/productMeli';

export interface AddingProductsToDbRequest {
  products: ProductBuscape[] | ProductMeli[];
}

export interface GetAllProductsResponse {
  products: ProductBuscape[] | ProductMeli[];
}

export interface FilterProductsRequest {
  query: string;
}

export interface FilterProductsResponse {
  products: ProductBuscape[] | ProductMeli[];
}
