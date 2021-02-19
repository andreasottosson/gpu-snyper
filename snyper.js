import puppeteer from "puppeteer-extra";
import fetch from "node-fetch";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

const log = console.log;

function snyper(store, url, selectors, count, cards_count) {
  //log(store, url, selectors)

  // add stealth plugin and use defaults (all evasion techniques)
  puppeteer.use(StealthPlugin());

  puppeteer.launch().then(async (browser) => {
    const page = await browser.newPage();
    await page.setRequestInterception(true);

    page.on("request", (r) => {
      if (["image", "stylesheet", "font"].indexOf(r.resourceType()) !== -1) {
        r.abort();
      } else {
        r.continue();
      }
    });

    try {
      await page.goto(url, {
        //waitUntil: "networkidle2",
        timeout: 60000,
      });

      await page.waitForSelector(selectors.title, {
        visible: true,
      });

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

      async function sendNotification(store, data, page_url) {
        let api_url = "https://api.pushover.net/1/messages.json";
        let api_user = process.env.PUSHOVER_API_USER_KEY;
        let api_token = process.env.PUSHOVER_API_APP_TOKEN;

        let msg = {
          token: api_token,
          user: api_user,
          message: `GPU ${data[0]} found in stock @ ${store}! Price ${data[1]}.`,
          title: "GPU-Snyper",
          sound: "magic",
          device: "andy-iphone",
          url: page_url,
          url_title: "Go to store.",
        };

        await fetch(api_url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(msg),
        })
          .then((res) => {
            console.log("Notification sent via Pushover!");
            //console.log("Request complete! response:", res);
          })
          .catch((err) => {
            console.log(e);
          });
      }

      function inStock(stock_val) {
        if (store === "INET" && stock_val.trim().toString() == "0 st") {
          return false;
        } else if (store === "INET" && stock_val.trim().toString() == "- st") {
          return false;
        } else if (
          store === "KOMPLETT" &&
          stock_val.trim().startsWith("Inte i lager")
        ) {
          return false;
        } else if (
          store === "KOMPLETT" &&
          stock_val.trim().startsWith("Beställningsvara")
        ) {
          return false;
        } else if (
          store === "NETONNET" &&
          stock_val.trim().startsWith("Förväntat")
        ) {
          return false;
        } else if (
          store === "NETONNET" &&
          stock_val.trim().startsWith("Lev.tid")
        ) {
          return false;
        } else if (stock_val.trim().toString() == "0") {
          return false;
        } else if (stock_val.trim().toString() == "") {
          return false;
        } else {
          return true;
        }
      }

      //log(os.freemem());
      //log(url);

      log(
        chalk`{${
          inStock(data[2]) ? "bgGreen" : "dim"
        } ${store} ${count}/${cards_count} ${data[0]} ${data[1]} ${data[2]}} ${
          inStock(data[2]) ? page.url() : ""
        }`
      );

      if (inStock(data[2])) {
        sendNotification(store, data, page.url());
      }
    } catch (e) {
      console.error(e);
    } finally {
      await browser.close();
    }
  });
}

export default snyper;
