const {test , expected} = require ("@playwright/test");


// [1] stringify - Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
// [2] JSON.parse - Converts a JavaScript Object Notation (JSON) string into an object.
// [3] Convert JSON file into testdata ; 
const testdata = JSON.parse (JSON.stringify (require ("../testdata.json"))); 


    test ("Data Driven Single" , async ({page})=>{


        await page.goto ("https://freelance-learn-automation.vercel.app/login");


        //IF array you should include [0][2][3] IF OBJECT you can used dot dot dot to call specfic
        await page.locator ("//input[@name='email1']").type (testdata.address.area, {delay:200});
        await page.locator ("//input[@name='password1']").type (testdata.password, {delay : 200}); 

     



        
    })