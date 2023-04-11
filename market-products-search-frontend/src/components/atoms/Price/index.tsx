import React from "react";
import { PriceProps } from "./types";

const Price: React.FC<PriceProps> = ({ content }: PriceProps) => {
  return(<h4>{content}</h4>);
}


export default Price;