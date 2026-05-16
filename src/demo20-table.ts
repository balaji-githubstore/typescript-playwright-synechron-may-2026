import { chromium } from "playwright"

const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://datatables.net/extensions/select/examples/checkbox/checkbox.html");

//get firstname and print it

//print all 10 names
//create for loop 1 to 10 
// for (let i = 1; i <= 10; i++) {
//     let name = await page.locator("xpath=//table[@id='example']/tbody/tr["+i+"]/td[2]").innerText();
//     console.log(name)
// }
//when name==Brenden Wagner --> click on checkbox
for (let i = 1; i <= 10; i++) {
    let name = await page.locator(`xpath=//table[@id='example']/tbody/tr[${i}]/td[2]`).innerText();
    console.log(name)
    if(name=="Brenden Wagner")
    {
        await page.locator(`xpath=//table[@id='example']/tbody/tr[${i}]/td[1]`).click();
        break;
    }
}
await page.waitForTimeout(5000);
await browser.close();
