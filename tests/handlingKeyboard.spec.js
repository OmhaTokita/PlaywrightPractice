//handling keyboard

const {test , expect} = require ("@playwright/test");


test ("handling keyboard", async function ({page}) {


    let pages = await page.goto("https://www.google.com/"); // to go on the link of the website

    page.reload({delay:200}); // to load the page's

    
    await page.locator ("textarea[name='q']").focus (); // focus just in case the page is refresh // css is no double "//"

    await page.keyboard.type ("Rommelie Larin"); // to type Rommelie larin
    await page.keyboard.press ("ArrowLeft") ; //to perform arrow left just incase

    await page.keyboard.down ("Shift"); //to perform arrow left the shift to highlight// it means holding down the key

    for (let i=0; i<7; i++) {

        await page.keyboard.press ("ArrowLeft", {delay:200})// to iterate arrow 7 to left to hightlight it means 7 character will be higlighted'
    }

})