const puppeteer = require("puppeteer");
const coupons = []
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
  const codes = await page.$$eval("article .get-code a", el=>el.map(a=>a.getAttribute('data-oid')))
  const filterCodes = codes.filter(el=>el!==null)
  for(const code of filterCodes){
    // await page.goto(`${targetUrl}?key=${code}`)
    await page.goto(`${targetUrl}?key=${code}`, {
        waitUntil: "networkidle0",
      });
    console.log(page.url())
    const elementHandle = await page.waitForSelector(`.modal`)
    console.log(elementHandle)
    const coupon =
    elementHandle &&
    (await elementHandle.evaluate(() => {
      const couponCode = document.querySelector(".cp-code input").getAttribute('value');
      return {
        couponCode,
      };

    }));
    if (coupon?.couponCode) coupons.push(coupon);
}
console.log(coupons)
// for (const link of links) {
//     await page.goto(link);
//     console.log(page.url())
//     // const pages = await browser.pages();
//     // await page.goto(pages[2].url())
//     // const elementHandle = await page.waitForSelector(`.modal`)
//     // const coupon =
//     // elementHandle &&
//     // (await elementHandle.evaluate(() => {
//     //   const couponCode = document.querySelector(".cp-code input").getAttribute('value');
//     //   return {
//     //     couponCode,
//     //   };

//     // }));
//     // if (coupon?.couponCode) coupons.push(coupon);
//   }
//   console.log(page.url())
//   console.log(coupons)
};
main();

