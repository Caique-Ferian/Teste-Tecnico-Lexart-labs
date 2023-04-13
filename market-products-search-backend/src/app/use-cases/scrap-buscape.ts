import { Injectable } from '@nestjs/common';
import scrapPage from '@src/utils/scrape';
import { ScrapBuscapeRequest, ScrapBuscapeResponse } from './types';

@Injectable()
export class ScrapBuscape {
  public async execute(
    request: ScrapBuscapeRequest,
  ): Promise<ScrapBuscapeResponse> {
    const { endpoint } = request;
    const products = await scrapPage(endpoint);

    return { products };
  }
}
