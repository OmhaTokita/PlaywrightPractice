const {test , expect} = require ("@playwright/test");


test ("Handling Auto Suggestion", async function ({page}){


    await page.goto ("https://www.google.com/");

    await page.locator ("textarea[name='q']").type("Mukesh Otwani", {delay:200});

    await page.waitForSelector ("//li[@role='presentation']") // wait for option to appear

    const element = await page.$$(("//li[@role='presentation']")) //The method finds all elements matching the specified selector within the page. If no elements match the selector, the return value resolves to [].


    for (let i=0; i<element.length; i++){

        const valueAll = await element[i].textContent();// iterate and print all value of element 
      

        if (valueAll.includes("playwright")){ // if overallValue includes youtube it will paseed 
            await element[i].click(); // get the element that consist of youtube and this will click
            break;
            
        } 

        await page.waitForTimeout (200)
    }

    
})