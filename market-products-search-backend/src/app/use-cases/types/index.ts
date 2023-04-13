import { ProductBuscape } from '@app/entities/productBuscape';
import { ProductMeli } from '@app/entities/productMeli';
import { ProductBuscapeProps, ProductMeliProps } from '@app/entities/types';

export interface ScrapeBuscapeRequest {
  endpoint: string;
}

// export interface ScrapeBuscapeResponse {}

export interface AddingProductsToDbRequest {
  site: string;
  products: ProductBuscapeProps[] | ProductMeliProps[];
}

export interface GetAllProductsRequest {
  site: string;
}

export interface GetAllProductsResponse {
  products: ProductBuscape[] | ProductMeli[];
}

export interface FilterProductsRequest {
  query: string;
  site: string;
}

export interface FilterProductsResponse {
  products: ProductBuscape[] | ProductMeli[];
}
