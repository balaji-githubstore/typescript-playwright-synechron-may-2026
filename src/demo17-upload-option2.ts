import { chromium, Page } from "playwright"

const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.ilovepdf.com/pdf_to_word");

const [fileChooser,] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.locator("//a[@id='pickfiles']").click()
])

fileChooser.setFiles("D:\\Balaji Dinakaran Trainer Profile AI 2026.pdf")

await page.waitForTimeout(5000);
await browser.close();

