import React from "react";
import { ImageProps } from "./types";


const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width,
    height,
  }: ImageProps) => {
  return(
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

export default Image;