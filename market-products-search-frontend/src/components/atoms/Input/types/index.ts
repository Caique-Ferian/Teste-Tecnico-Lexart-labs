import { BaseSyntheticEvent } from 'react';
export interface InputProps {
  onChange: (event: BaseSyntheticEvent) => void;
  className: string;
  placeholder: string;
  value: string;
}