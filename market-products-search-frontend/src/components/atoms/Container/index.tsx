import React from "react";
import { ContainerProps } from "./types";


const Container: React.FC<ContainerProps> = ({
    className,
    children,
  }: ContainerProps) => {
  return(<div className={className}>{children}</div>);
}

export default Container;