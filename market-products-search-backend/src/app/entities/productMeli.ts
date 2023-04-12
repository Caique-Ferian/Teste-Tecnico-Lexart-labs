import { ProductMeliProps } from './types';

export class ProductMeli {
  private props: ProductMeliProps;
  constructor(props: ProductMeliProps) {
    this.props = props;
  }
  public get product(): ProductMeliProps {
    return this.props;
  }
}
