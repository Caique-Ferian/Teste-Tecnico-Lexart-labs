import Button from "@atoms/Button";
import Container from "@atoms/Container";
import Image from "@atoms/Image";
import Paragraph from "@atoms/Paragraph";
import Price from "@atoms/Price";
import Title from "@atoms/Title";
import React from "react";
import { CardProps } from "./types";


const Card: React.FC<CardProps> = ({
    src,
    alt,
    width,
    height,
    classNameImage,
    titleContent,
    classNameContainer,
    priceContent,
    paragraphContent,
    onClick,
}: CardProps) => {
  return(
    <Container className={classNameContainer}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={classNameImage}
      />
      <Title content={titleContent}/>
      <Paragraph content={paragraphContent}/>
      <Price content={priceContent}/>
      <Button content="Ir a web" onClick={onClick} />
    </Container>
  );
}

export default Card;