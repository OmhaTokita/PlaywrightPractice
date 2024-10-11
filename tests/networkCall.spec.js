const {expect , test} = require ("@playwright/test");





        test ("Handling Dynamic Calls"  , async ({page})=> {


            await page.goto ("https://freelance-learn-automation.vercel.app/login");

            await page.locator ("//a[@class='subLink']").click ();

            await page.waitForLoadState ("networkidle") ; 

            let county = await page.locator ("//*[@class='interest']").count (); 

            expect (county).toBe(2);


            
        });

