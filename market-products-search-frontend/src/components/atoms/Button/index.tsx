import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
  }: ButtonProps) => {
  return(
    <button 
      className="btn btn-primary" 
      onClick={onClick}
    >{children}
    </button>
  );
}

export default Button;