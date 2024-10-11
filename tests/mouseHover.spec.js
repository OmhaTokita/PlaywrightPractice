const {test, expect} = require ("@playwright/test");




test ("mOuse Hover Test" , async function ({page}){

await page.goto ("https://freelance-learn-automation.vercel.app/login")



await page.getByPlaceholder ("Enter Email").type ("admin@email.com" , {delay:200});
await page.locator ("//input[@placeholder='Enter Password']").type("admin@123", {delay:200});


await page.locator ("//*[@class='submit-btn']").click ();

await page.locator ("//span[text()='Manage']").hover();

await page.locator ("//*[text()='Manage Categories']").click ();




})