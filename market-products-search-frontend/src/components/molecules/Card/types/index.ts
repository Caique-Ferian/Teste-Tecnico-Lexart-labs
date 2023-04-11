import { Details } from "@organisms/MarketSearch/types";

export interface CardProps {
  src: string;
  alt: string;
  width: string;
  height?: string;
  titleContent: string;
  priceContent: string;
  paragraphContent: Details[];
  href: string;
}