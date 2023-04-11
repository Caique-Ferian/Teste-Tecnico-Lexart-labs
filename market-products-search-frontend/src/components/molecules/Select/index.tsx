import React from "react";
import { SelectProps } from "./types";


const Select: React.FC<SelectProps> = ({ 
    types,
    defaultValue,
  }: SelectProps) => {
  return(
    <select>
      <option selected value= ''>{defaultValue}</option>
      {types.map((type,i) => <option key={i}>{type}</option>)}
    </select>
  );
}

export default Select;