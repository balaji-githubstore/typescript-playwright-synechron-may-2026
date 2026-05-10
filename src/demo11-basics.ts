import { chromium } from "playwright"

//browser instance - chrome
const browser=await chromium.launch({headless:false,channel:"chrome"});

//context (in concept it is similar to profile)
const context= await browser.newContext();

//new tab
const page=await context.newPage();

await page.goto("https://www.salesforce.com/in/form/signup/sales-ee/",{timeout:50000});

// page.setDefaultTimeout(50000);

await page.locator("xpath=//input[@name='UserFirstName']").fill("jack@gmail.com");
await page.locator("xpath=//input[@name='UserLastName']").fill("jack123");
await page.locator("xpath=//input[contains(@id,'UserTitle')]").fill("trainer");

//click on next 
await page.locator("xpath=//span[text()='Next']").click();

await page.locator("xpath=//select[@name='CompanyEmployees']").selectOption({label:"201 - 10,000 employees"})

await page.locator("xpath=//input[@name='CompanyName']").fill("synechron");

// select united kingdom
await page.locator("xpath=//select[@name='CompanyCountry']").selectOption({value:"GB"})

//click on next 
await page.locator("xpath=//span[text()='Next']").click();

//don't enter phone number

//enter email address jack@gmail.com
await page.locator("xpath=//input[@name='UserEmail']").fill("synechron@gmail.com");

//click on checkbox 0 with xpath - xpath count
// await page.locator("xpath=(//div[@class='checkbox-ui'])[2]").click();

//element in 1st index - nth index starts at 0
// await page.locator("xpath=//div[@class='checkbox-ui']").nth(1).click();

// (//input[@name='UserEmail']/following::div[@class='checkbox-ui'])[1]
// //input[@id='SubscriptionAgreement']/following-sibling::div[@class='checkbox-ui']
// //div[@class='msaCheckbox checkboxInput section']//div[@class='checkbox-ui']
await page.locator("xpath=//div[@class='msaCheckbox checkboxInput section']//div[@class='checkbox-ui']").click()

//click on submit 
//button[text()='Submit']

//get the error and print
let actualError:string= await page.locator("xpath=//span[contains(text(),'valid phone')]").innerText()
console.log(actualError)

await page.waitForTimeout(5000);
await browser.close();
