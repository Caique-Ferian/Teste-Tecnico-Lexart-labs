export interface ProductBuscapeProps {
  type: 'Geladeira' | 'Celular' | 'TV';
  permaLink: string;
  image: string;
  title: string;
  rating: string;
  storeMostCheap: string;
  price: string;
}

export interface ProductMeliProps {
  type: 'Geladeira' | 'Celular' | 'TV';
  permaLink: string;
  image: string;
  title: string;
  model: string;
  brand: string;
  price: string;
}
