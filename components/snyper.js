import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import logger from './logger.js';

function snyper(store, url, selectors, count, cards_count) {
  // add stealth plugin and use defaults (all evasion techniques)
  puppeteer.use(StealthPlugin());

  puppeteer.launch({executablePath: 'google-chrome-unstable'}).then(async (browser) => {

    const page = (await browser.pages())[0];

    await page.setRequestInterception(true);

    //await page.setDefaultNavigationTimeout(0);

    page.on("request", (r) => {
      if (["image", "stylesheet", "font"].indexOf(r.resourceType()) !== -1) {
        r.abort();
      } else {
        r.continue();
      }
    });

    try {
      await page.goto(url, {
        waitUntil: "networkidle2",
        timeout: 60000,
      });

      // await page.waitForSelector(selectors.title, {
      //   visible: true,
      //   timeout: 60000,
      // });

    // await page.screenshot({path: 'example.png'});

      const data = await page.evaluate(
        (store, selectors) => {
          let title = "";
          let price = "";
          let stock = "";

          try {
            title = document.querySelector(selectors.title).innerText;
          } catch (e) {
            console.error(e);
            title = "SCRAPE ERROR";
          }

          try {
            price = document.querySelector(selectors.price).innerText;
          } catch (e) {
            console.error(e);
            price = "SCRAPE ERROR";
          }
          try {
            stock = document.querySelector(selectors.stock).innerText;
          } catch (e) {
            console.error(e);
            if (store === "KOMPLETT") {
              stock = "0";
            } else {
              stock = "SCRAPE ERROR";
            }
          }

          return [title, price, stock];
        },
        store,
        selectors
      );

      logger(store, count, cards_count, data, page.url());

    } catch (e) {
      console.error(e);
    } finally {
      await browser.close();
    }
  });
}

export default snyper;
