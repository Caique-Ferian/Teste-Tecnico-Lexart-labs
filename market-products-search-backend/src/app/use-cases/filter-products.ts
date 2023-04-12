import ProductRepository from '@app/repositories/products-repository';
import { FilterProductsRequest, FilterProductsResponse } from './types';

export class FilterProducts {
  constructor(private productRepository: ProductRepository) {}

  public async execute(
    request: FilterProductsRequest,
  ): Promise<FilterProductsResponse> {
    const { query } = request;
    const products = await this.productRepository.filter(query);
    return { products };
  }
}
