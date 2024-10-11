const {test , expect} = require ("@playwright/test")


test ("Login Page", async function ({page}) {

    //Go to page 
    await page.goto ("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //login Username and Password

    await page.locator ("input[Placeholder='Username']").type ("Admin", {delay:200});
    await page.locator ("input[Placeholder='Password']").type ("admin123", {delay:200});

    //login button
    await page.locator ("button[type='submit']").click();

    //await expect (page).toHaveTitle (/Dashboard/);


    await page.locator ("span[class='oxd-userdropdown-tab']").click()
    await page.getByText ('Logout').click();

   // await expect (page).toHaveTitle (/login/)

})