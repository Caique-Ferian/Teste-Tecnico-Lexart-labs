import ProductRepository from '@app/repositories/products-repository';
import { FilterProductsRequest, FilterProductsResponse } from './types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FilterProducts {
  constructor(private productRepository: ProductRepository) {}

  public async execute(
    request: FilterProductsRequest,
  ): Promise<FilterProductsResponse> {
    const { query, site } = request;
    const products = await this.productRepository.filter(query, site);
    return { products };
  }
}
