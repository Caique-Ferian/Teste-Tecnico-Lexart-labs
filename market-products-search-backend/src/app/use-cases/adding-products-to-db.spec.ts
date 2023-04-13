import { AddingProductsToDb } from './adding-products-to-db';
import { InMemoryProductsBuscapeRepository } from '@test/repositories/in-memory-products-buscape-repository';
import { InMemoryProductsMeliRepository } from '@test/repositories/in-memory-products-meli-repository';

describe('Testing use-case Adding Products To Db', () => {
  it('should be able to add Buscape Products in Db', async () => {
    const inMemoryProductsBuscapeRepository =
      new InMemoryProductsBuscapeRepository();
    const addingProductsToDb = new AddingProductsToDb(
      inMemoryProductsBuscapeRepository,
    );
    const product = {
      permaLink: 'fake-link',
      image: 'fake-image',
      title: 'fake-title',
      rating: 'fake-rating',
      storeMostCheap: 'teste',
      price: 'fake-price',
    };
    await addingProductsToDb.execute({
      products: [product, product],
      site: 'buscape',
    });
    expect(inMemoryProductsBuscapeRepository.products).toHaveLength(2);
  });
  it('should be able to add MELI Products in Db', async () => {
    const inMemoryProductsMeliRepository = new InMemoryProductsMeliRepository();
    const addingProductsToDb = new AddingProductsToDb(
      inMemoryProductsMeliRepository,
    );
    const product = {
      permaLink: 'fake-link',
      image: 'fake-image',
      title: 'fake-title',
      model: 'fake-model',
      brand: 'fake-brand',
      price: 'fake-price',
    };
    await addingProductsToDb.execute({
      products: [product, product],
      site: 'mercadoLivre',
    });
    expect(inMemoryProductsMeliRepository.products).toHaveLength(2);
  });
});
