import { chromium } from "playwright"

//browser instance - chrome
const browser1=await chromium.launch({headless:false,channel:"chrome"});


//context (in concept it is similar to profile)
//profile 1
const context1= await browser1.newContext();

//new tab
const page1=await context1.newPage();

//login with hello1@gmail.com
await page1.goto("https://www.facebook.com/");

console.log(await page1.title());


//profile 2
const context2= await browser1.newContext()
const pagec2_1=await context2.newPage()
await pagec2_1.goto("http://facebook.com");

const pagec2_2=await context2.newPage()
await pagec2_2.goto("https://playwright.dev/docs/browsers");

await page1.waitForTimeout(5000);
browser1.close();

