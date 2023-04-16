export interface Details {
  name:string;
  value:string;
}

export interface IProducts {
  image: string;
  title: string;
  price: number;
  details: Details[];
  permaLink: string;

}

export interface IInDatabase {
  site:string;
  categories:string[];
}