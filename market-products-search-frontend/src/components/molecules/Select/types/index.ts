import { Dispatch, SetStateAction } from "react";

export interface SelectProps {
  types: string[];
  setTypes: Dispatch<SetStateAction<string>>;
  defaultValue: string;
}