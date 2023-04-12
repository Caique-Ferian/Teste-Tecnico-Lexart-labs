import { FilterProducts } from './filter-products';
import { InMemoryProductsBuscapeRepository } from '@test/repositories/in-memory-products-buscape-repository';
import { InMemoryProductsMeliRepository } from '@test/repositories/in-memory-products-meli-repository';
import { ProductBuscape } from '@app/entities/productBuscape';
import { ProductMeli } from '@app/entities/productMeli';

describe('Testing use-case Adding Products To Db', () => {
  it('should be able to filter Buscape Products in Db', async () => {
    const inMemoryProductsBuscapeRepository =
      new InMemoryProductsBuscapeRepository();
    const filterProducts = new FilterProducts(
      inMemoryProductsBuscapeRepository,
    );
    const product = new ProductBuscape({
      permaLink: 'fake-link',
      image: 'fake-image',
      title: 'fake-title',
      rating: 'fake-rating',
      storeMostCheap: 'teste',
      price: 'fake-price',
    });
    inMemoryProductsBuscapeRepository.products.push(product);
    inMemoryProductsBuscapeRepository.products.push(product);
    inMemoryProductsBuscapeRepository.products.push(
      new ProductBuscape({
        permaLink: 'fake-link',
        image: 'fake-image',
        title: 'title-2',
        rating: 'fake-rating',
        storeMostCheap: 'teste',
        price: 'fake-price',
      }),
    );
    const { products } = await filterProducts.execute({
      query: 'fake-title',
      site: 'fake-site',
    });
    expect(products).toHaveLength(2);
  });
  it('should be able to add MELI Products in Db', async () => {
    const inMemoryProductsMeliRepository = new InMemoryProductsMeliRepository();
    const filterProducts = new FilterProducts(inMemoryProductsMeliRepository);
    const product = new ProductMeli({
      permaLink: 'fake-link',
      image: 'fake-image',
      title: 'fake-title',
      model: 'fake-model',
      brand: 'fake-brand',
      price: 'fake-price',
    });
    inMemoryProductsMeliRepository.products.push(product);
    inMemoryProductsMeliRepository.products.push(product);
    inMemoryProductsMeliRepository.products.push(
      new ProductMeli({
        permaLink: 'fake-link',
        image: 'fake-image',
        title: 'title-2',
        model: 'fake-model',
        brand: 'fake-brand',
        price: 'fake-price',
      }),
    );
    const { products } = await filterProducts.execute({
      query: 'title-2',
      site: 'fake-site',
    });
    expect(products).toHaveLength(1);
  });
});
