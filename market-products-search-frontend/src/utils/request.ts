import axios from 'axios';
import { Details } from '@organisms/MarketSearch/types';

const apiMeli = axios.create({
  baseURL: 'https://api.mercadolibre.com/sites/MLB/search?q='
});

export const apiMeliRequestGet = async (endpoint: string) => {
  const { data: { results } } = await apiMeli.get(endpoint);
  const products = results.map(({
    attributes,
    thumbnail,
    title,
    price,
    permalink,
  }: any) => {
    const details: Details[] = [];
    attributes.forEach(({name, value_name}: any) => {
      if(name === 'Marca') details.push({name:'Brand',value:value_name})
      if(name === 'Modelo') details.push({name:'Model',value:value_name})
    });
    return {
      type: endpoint,
      image: thumbnail,
      title,
      price,
      details,
      permaLink: permalink,
    };
  });
  await apiNestRequestPost(products, 'mercadoLivre');
}

const apiNest = axios.create({
  baseURL: process.env.REACT_APP_API_HOST || 'http://localhost:3001',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export const apiNestRequestGet = async (endpoint: string) => {
  const { data } = await apiNest.get(endpoint);
  let result;
  if (endpoint.includes('mercadoLivre')) {
    result = data.map(({ props }:any) => ({
      image: props.image,
      title: props.title,
      price: props.price,
      permaLink: props,
      details: [{ name: 'Model', value: props.model }, { name: 'Brand', value: props.brand }]
    }))
  } else {
    const baseUrl = 'https://www.buscape.com.br/';
    result = data.map(({ props }: any) => ({
        image: props.image,
        title: props.title,
        price: props.price,
        permaLink: baseUrl + props.permaLink,
        details: [
          { name: 'Rating', value: props.rating.length ? props.rating : 'Não possui avaliações' },
          { name: 'Store Most Cheap', value: props.storeMostCheap }
        ],
      }))
  }
  return result;
}
export const apiNestRequestScrap = async (endpoint: string) => {
  const { data } = await apiNest.get(`/products/scrap-buscape/${endpoint}`);
  await apiNestRequestPost(data, 'buscape');
}

export const apiNestRequestPost = async (body: any[], site: string) => {
  let products;
  if (site === 'mercadoLivre') {
    products = body.map(({ type,image, title, price, details, permaLink }) => ({
      type,
      image,
      title,
      price: price.toString(),
      permaLink,
      brand: details[0].value,
      model: details[1].value,
    }));
  } else {
    products = body;
  }
  await apiNest.post('products/', { products, site });
}