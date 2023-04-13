import { ProductBuscapeProps, ProductMeliProps } from '@app/entities/types';

export interface AddingProductsToDbDTO {
  products: ProductBuscapeProps[] | ProductMeliProps[];
  site: string;
}
