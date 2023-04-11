import Button from "@atoms/Button";
import Container from "@atoms/Container";
import Image from "@atoms/Image";
import Paragraph from "@atoms/Paragraph";
import Price from "@atoms/Price";
import Title from "@atoms/Title";
import React from "react";
import { CardProps } from "./types";
//https://api.mercadolibre.com/sites/MLB/search?q=$QUERY(MELI ENDPOINT GET)

const Card: React.FC<CardProps> = ({
    src,
    alt,
    width,
    height,
    titleContent,
    priceContent,
    paragraphContent,
    href,
}: CardProps) => {
  return(
    <Container className="cards-container">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <Container className="cards-details">
        <Title content={titleContent}/>
        {paragraphContent.map((content) => (
          <Paragraph content={`${content.name}: ${content.value}`} />))}
        
        <Price content={priceContent}/>
        <Button>
          <a target="_blank" href={href} rel="noreferrer">Ir a web</a>
        </Button>
      </Container>
    </Container>
  );
}

export default Card;