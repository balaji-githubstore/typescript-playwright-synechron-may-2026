import { chromium, Page } from "playwright"

const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://mc.login.exacttarget.com/hub-cas/login");

//get the header Get Salesforce


await page.waitForTimeout(5000);
await browser.close();
