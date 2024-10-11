const {test , expected} = require ("@playwright/test");
const testdata = JSON.parse (JSON.stringify (require ("../testdataMultiple.json"))); 


// describe - You can declare a group of tests with a title. The title will be visible in the test report as a part of each test's title.
//anonymous function 
test.describe ("Data Driven" , function (){


        for (const data of testdata) {// of for loop is for object loop


                test.describe (`User Function ${data.id}` , function (){ //appended data from id

                    test("Unique" , async ({page})=>{


                        await page.goto ("https://freelance-learn-automation.vercel.app/login");
                
                
                        //IF array you should include [0][2][3] IF OBJECT you can used dot dot dot to call specfic data you want.
                        await page.locator ("//input[@name='email1']").type (data.uName, {delay:200});
                        await page.locator ("//input[@name='password1']").type (data.pWord, {delay : 200}); 
                    
                        
                    });
                })
        }

}) ;



