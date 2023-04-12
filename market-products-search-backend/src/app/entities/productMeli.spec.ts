import { ProductMeli } from './productMeli';

describe('Product MELI', () => {
  it('should be able to create a new product', () => {
    const product = new ProductMeli({
      permaLink: 'fake-link',
      image: 'fake-image',
      title: 'fake-title',
      model: 'fake-model',
      brand: 'fake-brand',
      price: 'fake-price',
    });

    expect(product).toBeInstanceOf(ProductMeli);
  });
});
