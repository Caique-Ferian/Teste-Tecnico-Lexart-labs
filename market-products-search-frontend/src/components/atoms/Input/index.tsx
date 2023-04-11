import React from "react";
import { InputProps } from "./types";


const Input: React.FC<InputProps> = ({
    onChange,
    className,
    placeholder,
    value,
  }: InputProps) => {
  return(
    <input 
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      value={value}
    />
  );
}

export default Input;