import cheerio from 'cheerio';
import got from 'got';
import logger from './logger.js';

const snypergot = (store, url, selectors, count, cards_count) => {
  (async () => {
    const response = await got(url);
    const $ = cheerio.load(response.body);
  
    const data = [
      $(selectors.title).first().text(),
      $(selectors.price).text(),
      $(selectors.stock).first().text()
    ]

    logger(store, count, cards_count, data, url)
  })();
}

export default snypergot;