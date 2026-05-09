import { chromium } from "playwright"

//browser instance - chrome
const browser=await chromium.launch({headless:false,channel:"chrome"});

//context (in concept it is similar to profile)
const context= await browser.newContext();

//new tab
const page=await context.newPage();

await page.goto("https://www.google.com/");

console.log(await page.title())

await page.waitForTimeout(5000);
browser.close();
