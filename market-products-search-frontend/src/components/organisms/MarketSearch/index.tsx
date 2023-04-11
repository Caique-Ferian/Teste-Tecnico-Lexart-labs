import React, { BaseSyntheticEvent, useState } from "react";
import Container from "@atoms/Container";
import Select from "@molecules/Select";
import { webSelect, categorySelect } from './constants';
import Input from "@atoms/Input";
import Button from "@atoms/Button";
import Card from "@molecules/Card";
import { apiMeliRequestGet } from "@utils/request";
import { IProducts } from "./types";

const MarketSearch: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [products, setProducts] = useState<IProducts[]>([]);
  const findProducts = async () => {
    setProducts([]);
    const data = await apiMeliRequestGet(`search?q=${category+"_"+filter}`);
    data.map(({ 
        attributes,
        thumbnail,
        thumbnail_id,
        title,
        price,
        permalink,
        shipping }: any) => {
      const details = [
        {name: attributes[0].name, value: attributes[0].value_name},
        {name: attributes[1].name, value: attributes[1].value_name},
        {name: 'Frete Grátis', value: shipping.free_shipping ? 'Sim' : 'Não'},
      ];
      return setProducts((prev) => [...prev,{
        thumbnail,
        thumbnailId: thumbnail_id,
        title,
        price,
        details,
        permalink,
      }]);
    })
  }
  return(
    <Container className="container">
      <Container className="filter-container">
        <Container className="select-container">
          <Select types={webSelect} defaultValue="Web" setTypes={setCategory}/>
          <Select 
            types={categorySelect}
            defaultValue="Categorias"
            setTypes={setCategory}
          />
        </Container>
        <Container className="input-container">
          <Input 
            onChange={({ target }: BaseSyntheticEvent) => setFilter(target.value)}
            value={filter}
            className="form-control form-control-lg"
            placeholder="Produto"
          />
        </Container>
        <Button onClick={findProducts}>Search</Button>
      </Container>
      {products.length ? products.map((product,i) => (
        <Card
          key={i}
          src={product.thumbnail}
          alt={product.thumbnailId}
          width="200px"
          height="200px"
          titleContent={product.title}
          priceContent={`R$: ${product.price}`}
          paragraphContent={product.details}
          href={product.permalink}
      />)) : null}
    </Container>
  );
}


export default MarketSearch;