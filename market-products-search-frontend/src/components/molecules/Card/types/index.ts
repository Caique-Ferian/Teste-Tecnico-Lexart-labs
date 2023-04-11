export interface CardProps {
  src: string;
  alt: string;
  width: string;
  height?: string;
  classNameImage?: string;
  titleContent: string;
  classNameContainer: string;
  priceContent: string;
  paragraphContent: string;
  onClick: () => void;
}