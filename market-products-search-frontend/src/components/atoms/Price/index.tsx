import React from "react";
import { PriceProps } from "./types";

const Price: React.FC<PriceProps> = ({ content }: PriceProps) => {
  return(<h2>{content}</h2>);
}


export default Price;