import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
    onClick,
    content,
  }: ButtonProps) => {
  return(
    <button 
      className="btn btn-primary" 
      onClick={onClick}
    >{content}
    </button>
  );
}

export default Button;