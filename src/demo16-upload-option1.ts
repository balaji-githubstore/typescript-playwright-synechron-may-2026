import { chromium, Page } from "playwright"

const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://smallpdf.com/pdf-to-word");

//always check for //input[@type='file']

await page.locator("xpath=//input[@type='file']").setInputFiles("D:\\Balaji Dinakaran Trainer Profile AI 2026.pdf")


await page.waitForTimeout(5000);
await browser.close();


