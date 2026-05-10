import { chromium, Page } from "playwright"

const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.nasscom.in/nasscom-membership");

//register the event upfront to handle the alert. 
await page.on("dialog", async dialog => {
    console.log(dialog.message())
    await dialog.accept();
})

await page.locator("xpath=//a[text()='Calculate Fee']").click();

await page.waitForTimeout(5000);
await browser.close();

