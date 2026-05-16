import { chromium } from "playwright"

const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://datatables.net/extensions/select/examples/checkbox/checkbox.html");


//try printing all names (from page 1 to 6)
let rowCount:number= await page.locator("xpath=//table[@id='example']/tbody/tr").count()
for (let i = 1; i <= rowCount; i++) {
    let name = await page.locator(`xpath=//table[@id='example']/tbody/tr[${i}]/td[2]`).innerText();
    console.log(name)
}
await page.waitForTimeout(5000);
await browser.close();
