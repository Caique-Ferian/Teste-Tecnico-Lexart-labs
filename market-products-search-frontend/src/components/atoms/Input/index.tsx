import React from "react";
import { InputProps } from "./types";


const Input: React.FC<InputProps> = ({
    onChange,
    className,
    placeholder,
  }: InputProps) => {
  return(
    <input 
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
}

export default Input;