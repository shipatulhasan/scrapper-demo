const puppeteer = require("puppeteer");
const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    ignoreHTTPSErrors: false,
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
  });
  const page = await browser.newPage();
  const targetUrl = "https://www.couponbirds.com/codes/mykitsch.com";
  await page.goto(targetUrl);
  
  await page.click(".get-code a");
  const pages = await browser.pages();
  //   await console.log("NUMBER TABS:", pageList.length);
  await page.goto(pages[2].url())
//   const elementHandle = await page.waitForSelector(`.modal`);
const elementHandle = await page.waitForSelector(`.modal`)
            const coupon =
              elementHandle &&
              (await elementHandle.evaluate(() => {
                const code = document.querySelector(".cp-code input").getAttribute('value');
                return code
         
              }));

//   const cd = await elementHandle.$$eval(".cp-code #copy-code", (el) =>el.getAttribute('value'))
console.log(coupon)
  console.log(page.url())
};
main();
