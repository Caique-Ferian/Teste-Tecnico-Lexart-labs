import axios from 'axios';


const apiMeli = axios.create({
  baseURL: 'https://api.mercadolibre.com/sites/MLB/'
});

export const apiMeliRequestGet = async (endpoint:string) => {
  const {data} = await apiMeli.get(endpoint);
  return data.results;
}