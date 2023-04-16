import { IInDatabase } from "@organisms/MarketSearch/types";
import { Dispatch, SetStateAction } from 'react';
import { apiMeliRequestGet, apiNestRequestScrap } from "./request";

export const inDatabaseCheck = async (
  site:string,
  category:string,
  inDatabase: IInDatabase[],
  setInDatabase:Dispatch<SetStateAction<IInDatabase[]>>) => {
    if(site === 'Todas') {
    if(!inDatabase[0].categories.includes(category)
      && !inDatabase[1].categories.includes(category)) {
      setInDatabase((prev) => {
        const result = [{
          site: prev[0].site,
          categories: [category,...prev[0].categories]
        },{
          site: prev[1].site,
          categories: [category,...prev[1].categories]
        }]
        return result;
      });
      await apiMeliRequestGet(`search?q=${category}`);
      await apiNestRequestScrap(category);
    }
  }
  if(site === 'Mercado Livre') {
    if(!inDatabase[0].categories.includes(category)) {
      setInDatabase((prev) => {
        const result = [{
          site: prev[0].site,
          categories: [category,...prev[0].categories]
        }, prev[1]]
        return result;
      });
      await apiMeliRequestGet(`search?q=${category}`);
    }
  }
  else if(site === 'Buscapé') {
    if(!inDatabase[1].categories.includes(category)) {
      setInDatabase((prev) => {
        const result = [prev[0],{
          site: prev[1].site,
          categories: [category,...prev[1].categories]
        }]
        return result;
      });
      await apiNestRequestScrap(category);
    }
  }
 
}