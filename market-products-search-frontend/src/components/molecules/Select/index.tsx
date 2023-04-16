import React from "react";
import { SelectProps } from "./types";


const Select: React.FC<SelectProps> = ({ 
    types,
    setTypes,
    defaultValue,
  }: SelectProps) => {
  return(
    <select 
      className="form-select form-select-sm select-container"
      onChange={({target}) => setTypes(target.value)}
    >
      <option defaultValue={defaultValue} value= ''>{defaultValue}</option>
      {types.map((type,i) => <option key={i}>{type}</option>)}
    </select>
  );
}

export default Select;