
const { test, expect }  = require ("@playwright/test");


test ("Dropdown Functionality", async function ({page}) {

  
    await page.goto ("https://freelance-learn-automation.vercel.app/signup");

    await page.locator ("//select[@name='state']").selectOption ({label:"Goa"});
    await page.waitForTimeout (5000)

/*
    let valueOfAll = await page.locator ("//select[@name='state']").textContent ();

    /*console.log("Display Value of all" + valueOfAll);

    expect (valueOfAll.includes ("Goa")).toBeTruthy ();

*/
    
  let state = await page.$("//select[@name='state']");// state is the parent 
  //The method finds an element matching the specified selector within the page. If no elements match the selector, the return value resolves to null. To wait for an element on the page, use locator.waitFor([options]).
  let allOption = await page.$$ ("option"); //inside state option will be listed all the value of option  //
//The method finds all elements matching the specified selector within the page. If no elements match the selector, the return value resolves to [].


let ddstatus = false;

  for (let i=0; i<allOption.length; i++)
  {
    let element =  allOption[i]; //convert all option value into element 
    let valueAll = await element.textContent(); // to print all value on element 

    

    if (valueAll.includes("Jharkhand")) { // valueall na naprint sa tass is walang jharkand it will fal and then pag okay it will passed
      console.log("PASSED");
      ddstatus=true;
      break;
    } else {
      console.log("Failed");
    }

    console.log("Value of Dropwdown using for loop " + valueAll);// print all the value 

  }

  await expect(ddstatus).toBeTruthy();

    //multiple dropdown
    await page.locator ("#hobbies").selectOption (['Playing','Swimming']);
    await page.waitForTimeout (5000);
  
   
  })


   