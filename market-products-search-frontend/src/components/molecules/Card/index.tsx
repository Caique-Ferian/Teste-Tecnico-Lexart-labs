import Button from "@atoms/Button";
import Container from "@atoms/Container";
import Image from "@atoms/Image";
import Paragraph from "@atoms/Paragraph";
import Price from "@atoms/Price";
import Title from "@atoms/Title";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import { CardProps } from "./types";

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
    <Container className="cards-container" key={ uuidv4() }>
      <Image
        key={ uuidv4() }
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <Container className="cards-details" key={ uuidv4() }>
        <Title key={ uuidv4() } content={titleContent}/>
        {paragraphContent.map((content) => (
          <Paragraph key={ uuidv4() } content={`${content.name}: ${content.value}`} />))}
        
        <Price key={ uuidv4() } content={priceContent}/>
        <Button>
          <a key={ uuidv4() } target="_blank" href={href} rel="noreferrer">Ir a web</a>
        </Button>
      </Container>
    </Container>
  );
}

export default Card;