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
        <Container className="select-container">
          <Select types={webSelect} defaultValue="Web"/>
          <Select types={categorySelect} defaultValue="Categorias"/>
        </Container>
        <Container className="input-container">
          <Input 
            onChange={({ target }: BaseSyntheticEvent) => setProduct(target.value)}
            value={product}
            className="form-control form-control-lg"
            placeholder="Produto"
          />
        </Container>
        <Button content="Search" onClick={() => console.log("CLICOU")}/>
      </Container>
      <Card
        src="Fake-card-src"
        alt="Fake-card-alt"
        width="200px"
        titleContent="Geladeira Frost-free"
        priceContent="$ 120"
        paragraphContent="Geladeira Frost-free"
        onClick={() => console.log("CLICOU")}
      />
    </Container>
  );
}


export default MarketSearch;