const {test , expect} = require ("@playwright/test");



test ("Login Page Error" , async function ({page}) {

  //Login Page
  await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  //Enter Username and Password

  await page.locator ("//input[@name='username']").type ("Admin");
  await page.locator ("//input[@name='password']").type ("Admin1234");
  await page.locator ("//button[@type='submit']").click();

  //Enter Us 

 const errorMessage = await page.locator ("//*[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent (); // convert into variable the error message in ordr to ask print

 
 console.log("Error Message Return is: ", errorMessage); //to print text
 expect(errorMessage.includes("Invalid1")).toBeTruthy ();// get errorMessage and ask if the error message contains the invalid
 expect (errorMessage ==="Invalid credentials").toBeTruthy();// get errorMessage and ask if the error message contains the invalid
 
})