//iframe is nothing but a HTMLtag which will allow you to embed another application 


const {test , expect} = require ("@playwright/test");


test ("iFrame Testing", async function ({page}){


    //frame locator first before entering

    await page.goto ("https://the-internet.herokuapp.com/nested_frames");
    const iframe = await page.frameLocator ("//frame[@name='frame-middle']");
    console.log(await iframe.locator ("//*[text()='MIDDLE']")); 
  





})
    
    
    
    