import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";

function inet(url) {


// add stealth plugin and use defaults (all evasion techniques)
puppeteer.use(StealthPlugin());

const red_text = "\x1b[31m%s\x1b[0m";
const green_text = "\x1b[32m%s\x1b[0m";

puppeteer
  .launch({
    executablePath: "google-chrome-unstable",
  })
  .then(async (browser) => {
    const page = await browser.newPage();

    await page.setRequestInterception(true);
    page.on("request", (r) => {
      if (
        ["image", "stylesheet", "font", "script"].indexOf(r.resourceType()) !==
        -1
      ) {
        r.abort();
      } else {
        r.continue();
      }
    });

    try {
      await page.goto(url);
      // await page.screenshot({path: 'example.png'});

      const data = await page.evaluate(() => {
        const title = document.querySelector(".product-description h1")
          .innerText;
        const price = document.querySelector(".price").innerText;
        const stock_web = document.querySelector(".stock > .qty-string")
          .innerText;
        // const stock_ringon;
        // const stock_sisjon;
        // const stock_sveavagen;
        // const stock_lillanygatan;
        return [
          title,
          price,
          stock_web
        ]
      });
      
      function inStock(stock_val) {
        if (stock_val.toString() == "0 st") {
          return false;
        } else if (stock_val.toString() == "- st") {
          return false;
        } else {
          return true;
        }
      };
    
      console.log(inStock(data[2]) ? green_text : red_text, data, inStock(data[2]) ? page.url() : "");

    } catch (e) {
      console.log(e)
    }
    await browser.close();
  });
}

export default inet;