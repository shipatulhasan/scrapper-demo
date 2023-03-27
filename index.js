const puppeteer = require('puppeteer');
const main = async () => {
    const browser = await puppeteer.launch({
        headless: false, ignoreHTTPSErrors: false, defaultViewport: {
            width: 1920,
            height: 1080
        }
    });
    const page = await browser.newPage();

//  const targetUrl= await page.goto('https://www.hotdeals.com/coupons/hand-held-legend/');
 const targetUrl= 'https://www.couponbirds.com/codes/mykitsch.com';
 await page.goto(targetUrl)
//  const codes = await page.$$eval('.offer-list-item-button_hidden-code',el => el.map(n => n.getAttribute("data-code")))
    // await page.type('#search', 'JK Beauty')
    // await page.waitForSelector('#search')
    // await page.click('.couper-btn')
    // const pages = await browser.pages();
    // await page.goto(pages[2].url())
    // console.log(pages)
    // console.log(page)

    await page.click(".get-code a");
    // const element = await browser.newPage()
    console.log(page)
    // console.log(page)
    // const elementHandle = await page.waitForSelector(`.modal`)
    const cd = await page.$$eval('.cp-code #copy-code',el =>el.value)

    // const coupon = await page.evaluate(() => {
    //             const couponCode = document.querySelector(".cp-code #copy-code")?.getAttribute('value');
    //           return couponCode
    //         })
    console.log(cd)
  // await page.goto(`https://www.hotdeals.com/coupons/hand-held-legend/?popcid=122878787&ads=1`, {
  //         waitUntil: "networkidle0",
  // const coupon = await elementHandle.evaluate(() => {
  //           const couponCode = document.querySelector(".code")?.innerText;
  //         return couponCode
  //       })
  // const textSelector = await page.waitForSelector(
  //     '.code-box .code'
  //   );
  //   const cupon = await textSelector.evaluate(el => el.innerText);
    // console.log(coupon)
}
main()