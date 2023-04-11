export interface CardProps {
  src: string;
  alt: string;
  width: string;
  height?: string;
  titleContent: string;
  priceContent: string;
  paragraphContent: string;
  onClick: () => void;
}