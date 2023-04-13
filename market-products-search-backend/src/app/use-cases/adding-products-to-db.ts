import ProductRepository from '@app/repositories/products-repository';
import { AddingProductsToDbRequest } from './types';
import { Injectable } from '@nestjs/common';
import { ProductBuscape } from '@app/entities/productBuscape';
import { ProductMeli } from '@app/entities/productMeli';

@Injectable()
export class AddingProductsToDb {
  constructor(private productRepository: ProductRepository) {}

  public async execute(request: AddingProductsToDbRequest): Promise<void> {
    const { site, products } = request;
    const productsToAdd = [];
    if (site === 'buscape') {
      products.map((product) =>
        productsToAdd.push(new ProductBuscape(product)),
      );
    } else {
      products.map((product) => productsToAdd.push(new ProductMeli(product)));
    }
    await Promise.all(
      productsToAdd.map((product) => this.productRepository.create(product)),
    );
  }
}
