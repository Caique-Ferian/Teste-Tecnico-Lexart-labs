export interface Details {
  name:string;
  value:string;
}

export interface IProducts {
  thumbnail: string;
  thumbnailId: string;
  title: string;
  price: number;
  details: Details[];
  permalink: string;

}