import React, { BaseSyntheticEvent, useState } from "react";
import Container from "@atoms/Container";
import Select from "@molecules/Select";
import { webSelect, categorySelect } from './constants';
import Input from "@atoms/Input";
import Button from "@atoms/Button";
import Card from "@molecules/Card";



const MarketSearch: React.FC = () => {
  const [product, setProduct] = useState<string>('');
  return(
    <Container className="container">
      <Container className="filter-container">
        <Select types={webSelect} defaultValue="Web"/>
        <Select types={categorySelect} defaultValue="Categorias"/>
        <Input 
          onChange={({ target }: BaseSyntheticEvent) => setProduct(target.value)}
          value={product}
          className="product-input"
          placeholder="Produto"
          />
        <Button content="Search" onClick={() => console.log("CLICOU")}/>
      </Container>
      <Card
        src="Fake-card-src"
        alt="Fake-card-alt"
        width="200px"
        titleContent="Fake Card Title"
        classNameContainer="cards-container"
        priceContent="$ 120"
        paragraphContent="conteúdo do paragrafo"
        onClick={() => console.log("CLICOU")}
      />
    </Container>
  );
}


export default MarketSearch;