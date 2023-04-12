import ProductRepository from '@app/repositories/products-repository';
import { GetAllProductsResponse } from './types';

export class GetAllProducts {
  constructor(private productRepository: ProductRepository) {}

  public async execute(): Promise<GetAllProductsResponse> {
    const products = await this.productRepository.getAll();
    return { products };
  }
}
