import { chromium } from "playwright"

const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://opensource-demo.orangehrmlive.com/");


const [newPage,] = await Promise.all([
    page.waitForEvent("popup"), 
    page.locator("//a[text()='OrangeHRM, Inc']").click()
    ])

await newPage.waitForLoadState()

//if present then we are clicking
if (await newPage.locator("xpath=//button[text()='Allow all']").count() > 0) {
    await newPage.locator("xpath=//button[text()='Allow all']").click();
}

console.log(await newPage.title())

await newPage.locator("xpath=//button[text()='Book a Free Demo']/parent::a").click()
await newPage.locator("xpath=//input[@name='FullName']").fill("synechron");

await page.waitForTimeout(5000);
await browser.close();
