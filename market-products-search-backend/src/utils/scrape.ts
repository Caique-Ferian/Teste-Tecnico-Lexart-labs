import * as rp from 'request-promise';
import * as cheerio from 'cheerio';
import { BASE_URL } from '../constants';
const scrapPage = async (endpoint: string) => {
  const options = {
    uri: BASE_URL + endpoint,
    transform: (body) => cheerio.load(body),
  };
  const data = [];
  const $ = await rp(options);
  try {
    $('div.Paper_Paper__HIHv0').each((i, item) => {
      if (i < 6) {
        data.push({
          permaLink: $(item).find('a').attr('href'),
          image: $(item).find('img').attr('src'),
          title: $(item).find('h2').text(),
          rating: $(item)
            .find('div.SearchCard_ProductCard_Rating__5LXFU')
            .text()
            .slice(0, 3),
          storeMostCheap: $(item).find('h3').text(),
          price: $(item).find('p.Text_MobileHeadingS__Zxam2').text(),
        });
      }
    });
  } catch (err: any) {
    console.log(err);
  }
  return data;
};
export default scrapPage;
