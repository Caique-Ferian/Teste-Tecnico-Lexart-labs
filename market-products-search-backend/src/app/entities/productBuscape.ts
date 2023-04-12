import { ProductBuscapeProps } from './types';

export class ProductBuscape {
  private props: ProductBuscapeProps;
  constructor(props: ProductBuscapeProps) {
    this.props = props;
  }
  public get product(): ProductBuscapeProps {
    return this.props;
  }
}
