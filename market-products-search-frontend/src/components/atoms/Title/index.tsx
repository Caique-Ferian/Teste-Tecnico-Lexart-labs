import React from "react";
import { TitleProps } from "./types";


const Title: React.FC<TitleProps> = ({ content }: TitleProps) => {
  return(<h2>{content}</h2>);
}


export default Title;