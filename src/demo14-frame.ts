import { chromium, Page } from "playwright"

const browser = await chromium.launch({ headless: false, channel: "chrome" });
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://mc.login.exacttarget.com/hub-cas/login", { waitUntil: "networkidle" });

// await page.waitForTimeout(5000);
const marketingFrame = page.frameLocator("xpath=//iframe[@id='marketing']")

//get the header Get Salesforce
let actualHeader = await marketingFrame.locator("xpath=//h2[contains(text(),'Get Salesforce for free')]").innerText();
console.log(actualHeader)

//click on get your free crm 
const [newPage,] = await Promise.all([
    page.waitForEvent("popup"),
    marketingFrame.locator("//a[normalize-space()='Get free CRM']").click()
])
await newPage.waitForLoadState();

console.log(await newPage.title())

//shadow root element
await newPage.locator("css=input[name='firstName']").fill("jack")
//
//enter lastname
//enter jobtitle 
//Next

await page.waitForTimeout(5000);
await browser.close();