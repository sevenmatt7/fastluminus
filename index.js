const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://luminus.nus.edu.sg');
  await page.click('.btn-login')
  await page.waitForSelector('#userNameInput')
  await page.$eval('input[name=UserName]', el => el.value = 'nusstu\\');
  await page.$eval('input[name=Password]', el => el.value = '')
  await page.screenshot({path: 'example.png'});
  await page.click('#submitButton')
  await page.waitForSelector('.select-row')
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();