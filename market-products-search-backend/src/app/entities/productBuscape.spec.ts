import { ProductBuscape } from './productBuscape';

describe('Product Buscape', () => {
  it('should be able to create a new product', () => {
    const product = new ProductBuscape({
      permaLink: 'fake-link',
      image: 'fake-image',
      title: 'fake-title',
      rating: 'fake-rating',
      storeMostCheap: 'teste',
      price: 'fake-price',
    });

    expect(product).toBeInstanceOf(ProductBuscape);
  });
});
