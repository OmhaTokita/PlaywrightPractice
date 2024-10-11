const {test , expect } = require ("@playwright/test")



        test('Working with multiple tabs', async ({ browser }) => {
            
            const context =  await browser.newContext (); // Creates a new browser context. It won't share cookies/cache with other browser contexts.

            const pagee  = await context.newPage (); // creating first page 


            await pagee.goto("https://freelance-learn-automation.vercel.app/login");

           const [newPage]=  await Promise.all ( // this is like an array // if below condition are met we will proceed on the next page or tab
            [
                // once this 2 promises will resolved will get to another browser which is newPage/tab
                context.waitForEvent ("page") , //once the the promises is reolve it will proceed to the new Page , this page loading after click below
                pagee.locator ("//div/div/div/div/div/div/div/a[4]").click() //click the locator to vercel app on pagee link
            ]
               
        )

            await pagee.waitForTimeout(2000);
            await newPage.locator ("//div/input[@name='email']").fill ("LarsPogi"); // in new tab we are typeing

            await pagee.waitForTimeout (2000);
            await newPage.locator ("//div/input[@name='pass']").type ("password", {delay:200})
            
            await newPage.close();

            



        });