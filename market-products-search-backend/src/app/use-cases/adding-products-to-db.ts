import ProductRepository from '@app/repositories/products-repository';
import { AddingProductsToDbRequest } from './types';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AddingProductsToDb {
  constructor(private productRepository: ProductRepository) {}

  public async execute(request: AddingProductsToDbRequest): Promise<void> {
    const { products } = request;
    await Promise.all(
      products.map((product) => this.productRepository.create(product)),
    );
  }
}
