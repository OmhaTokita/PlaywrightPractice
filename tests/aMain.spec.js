const {expect, test} = require ("@playwright/test");

const lpage = require ("../Page/LoginPOM")
const homePage = require ("../Page/homePage")

    test ("Main File", async ({page})=>{


        await page.goto ("https://freelance-learn-automation.vercel.app/login"); 

        const loginPages = new lpage (page) ;
        await loginPages.loginPageApplication() ;// dont' forget always the login 'x`()'

        await page.waitForLoadState("networkidle");

        const hoPages = new homePage(page);
        await  hoPages.logOutApllication ();
        
        
        

    });
