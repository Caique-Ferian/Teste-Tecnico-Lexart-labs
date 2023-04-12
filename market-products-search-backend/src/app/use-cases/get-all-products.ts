import ProductRepository from '@app/repositories/products-repository';
import { GetAllProductsResponse, GetAllProductsRequest } from './types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllProducts {
  constructor(private productRepository: ProductRepository) {}

  public async execute(
    request: GetAllProductsRequest,
  ): Promise<GetAllProductsResponse> {
    const { site } = request;
    const products = await this.productRepository.getAll(site);
    return { products };
  }
}
