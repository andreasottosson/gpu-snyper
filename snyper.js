import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

function snyper(store, url, selectors) {

// add stealth plugin and use defaults (all evasion techniques)
puppeteer.use(StealthPlugin());

const red_text = "\x1b[31m%s%s\x1b[0m";
const green_text = "\x1b[32m%s%s\x1b[0m";

puppeteer
  .launch({
    executablePath: "google-chrome-unstable",
  })
  .then(async (browser) => {
    const page = await browser.newPage();

    await page.setRequestInterception(true);
    page.on("request", (r) => {
      if (
        ["image", "stylesheet", "font"].indexOf(r.resourceType()) !==
        -1
      ) {
        r.abort();
      } else {
        r.continue();
      }
    });
 
    try {

      await page.goto(url);
      //await page.screenshot({path: 'example.png'});

      const data = await page.evaluate(selectors => {
        
        let title = "";
        let price = "";
        let stock = "";

        try {
          title = document.querySelector(selectors.title).innerText;
        } catch (e) {
          title = "SCRAPE ERROR"
        }

        try {
          price = document.querySelector(selectors.price).innerText;
        } catch (e) {
          price = "SCRAPE ERROR"
        }
        try {
          stock = document.querySelector(selectors.stock).innerText;
        } catch (e) {
          stock = "SCRAPE ERROR";
        }

        return [
          title,
          price,
          stock
        ]
      }, selectors);
      
      function inStock(stock_val) {
        if (store === "INET" && stock_val.trim().toString() == "0 st") {
          return false;
        } else if (store === "INET" && stock_val.trim().toString() == "- st") {
          return false;
        } else if (store === "KOMPLETT" && stock_val.trim().startsWith("Inte i lager")) {
          return false
        } else if (store === "KOMPLETT" && stock_val.trim().startsWith("Beställningsvara")) {
          return false
        } else if (stock_val.trim().toString() == "0") {
          return false
        } else if (stock_val.trim().toString() == "") {
          return false
        } else {
          return true;
        }
      };
    
      console.log(inStock(data[2]) ? green_text : red_text, store, data, inStock(data[2]) ? page.url() : "");

    } catch (e) {
      console.log(e)
    }
    await browser.close();
  });
}

export default snyper;