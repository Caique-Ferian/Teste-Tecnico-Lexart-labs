import React, { BaseSyntheticEvent, useState } from "react";
import Container from "@atoms/Container";
import Select from "@molecules/Select";
import { webSelect, categorySelect } from './constants';
import Input from "@atoms/Input";
import Button from "@atoms/Button";
import Card from "@molecules/Card";
import { apiNestRequestGet } from "@utils/request";
import { inDatabaseCheck } from "@utils/inDatabaseCheck";
import { IProducts, IInDatabase } from "./types";

const MarketSearch: React.FC = () => {
  const [filter, setFilter] = useState<string>('');
  const [site,setSite] = useState<string>('');
  const [inDatabase, setInDatabase] = useState<IInDatabase[]>([
    {site: 'mercadoLivre', categories: []},{site: 'buscape', categories: []}]);
  const [category, setCategory] = useState<string>('');
  const [products, setProducts] = useState<IProducts[]>([]);
  const findProducts = async () => {
    setProducts([]);
    await inDatabaseCheck(site,category,filter,inDatabase,setInDatabase);
    let result;
    const meliEndpoint = filter ? `/products/filter/mercadoLivre/${category+"_"+filter}` 
      : `/products/filter/mercadoLivre/${category}`;
    const buscapeEndpoint = filter ? `/products/filter/buscape/${category+"_"+filter}` 
    : `/products/filter/buscape/${category}`;
    if(site === 'Todas') {
      const meliProducts = await apiNestRequestGet(meliEndpoint);
      const buscapeProducts = await apiNestRequestGet(buscapeEndpoint); 
      result = [...meliProducts, ...buscapeProducts];      
    } else {
      const endpoint = site === 'Mercado Livre' ? meliEndpoint : buscapeEndpoint;
      result = await apiNestRequestGet(endpoint);
    }
    setProducts(result);
  }
  return(
    <Container className="container">
      <Container className="filter-container">
        <Container className="select-container">
          <Select types={webSelect} defaultValue="Web" setTypes={setSite}/>
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
          src={product.image}
          alt={product.title}
          width="200px"
          height="200px"
          titleContent={product.title}
          priceContent={`R$: ${product.price}`}
          paragraphContent={product.details}
          href={product.permaLink}
      />)) : null}
    </Container>
  );
}


export default MarketSearch;