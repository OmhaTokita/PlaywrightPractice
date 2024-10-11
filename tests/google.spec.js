const { test, expect } = require('@playwright/test');

test('My First Automation', async ({ page }) => {

  //await whenever call playwright method


  await page.goto ("https://www.google.com/"); // on this line , I want to go in google, please don't forget to include https
 
 
  const url = await page.url (); // convert the page url to url variable
  console.log( `Your page URL is: ${url}`); // print url variable na mag rereturn sa conversion

  const title = await page.title (); // convert the time to tilee variable sa page
  console.log(`your page Title ks ${title}`); //I used backtick and print the title of the page

  await expect(page).toHaveTitle ("Google")  // asking the automation if the page title contain google.




});