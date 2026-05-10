import { chromium } from "playwright"

const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.ilovepdf.com/pdf_to_word");

//register the event before opening the filechooser window
await page.on('filechooser',async filechooser=>{
    filechooser.setFiles("D:\\Balaji Dinakaran Trainer Profile AI 2026.pdf");
})

await page.locator("//a[@id='pickfiles']").click();

await page.waitForTimeout(5000);
await browser.close();

