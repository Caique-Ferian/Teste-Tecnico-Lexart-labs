import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
    className,
    onClick,
    content,
  }: ButtonProps) => {
  return(<button className={className} onClick={onClick}>{content}</button>);
}

export default Button;