import { chromium } from "playwright"

//browser instance - chrome
const browser=await chromium.launch({headless:false,channel:"chrome"});

//context (in concept it is similar to profile)
const context= await browser.newContext();

//new tab
const page=await context.newPage();

await page.goto("https://opensource-demo.orangehrmlive.com/");

// cookies present sometimes and sometimes not
// if(await page.locator("//a[text()='OrangeHRM, Inc']").count()>0)
// {
//     //click
// }

//check for new popup event
let popup=page.waitForEvent("popup")

//click on OrangeHRM, Inc which opens new popup (tab or window)
await page.locator("//a[text()='OrangeHRM, Inc']").click();

//get the new popup page (tab or window details)
let newPage= await popup
await newPage.waitForLoadState()

//if present then we are clicking
if(await newPage.locator("xpath=//button[text()='Allow all']").count()>0)
{
    await newPage.locator("xpath=//button[text()='Allow all']").click();
}

console.log(await newPage.title())

//click on book a demo 
await newPage.locator("xpath=//button[text()='Book a Free Demo']/parent::a").click()

//enter firstname as john
await newPage.locator("xpath=//input[@name='FullName']").fill("synechron");

await page.waitForTimeout(5000);
await browser.close();
