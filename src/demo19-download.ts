import { chromium } from "playwright"

const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://www.selenium.dev/downloads/");

//download and save it C:\ folder
const [download,] = await Promise.all([
    page.waitForEvent("download"),
    page.locator("xpath=//a[text()='64 bit Windows IE']").click()
])

// console.log(await download.path())

download.saveAs(download.suggestedFilename())
await page.waitForTimeout(5000);
await browser.close();
