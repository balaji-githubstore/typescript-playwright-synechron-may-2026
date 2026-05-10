import { chromium, Page } from "playwright"

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


// let pages= context.pages()
// let pageGoogle:Page

// for(let page of pages)
// {
//     if(await page.title()=="Google")
//     {
//         pageGoogle=page;
//         break;
//     }
// }
// //here it will point to pageGoogle

await page.waitForTimeout(5000);
await browser.close();
