const {test , expect} = require ("@playwright/test");


test ("Handling Alert", async function ({page}) {

    //Note please remember the page.on before the click scenario below 

// Enter the website

await page.goto ("https://the-internet.herokuapp.com/javascript_alerts");

//Listener first before click method. 

    page.on ('Dialog' , async (diag) =>{

        expect (diag.type()).toContain ("alert"); // the type of dialog shoud contain "Alert"
        expect (diag.message ()).toContain ("I am JS Alert"); // the message of type alert contains (I am JS Alert)
        await diag.accept (); // Accept or to click OK

        
    })


    await page.locator ("//*[text()='Click for JS Alert']").click (); // To click Locator the alert button
    await page.waitForTimeout (2000); // timeout for 2 seconds.


})

test ("Handling Confirm", async function ({page}) {


    // Enter the website
    
    await page.goto ("https://the-internet.herokuapp.com/javascript_alerts");
    
    //Listener first before click method. 
    
        page.on ('Dialog' , async (diag) =>{
    
            expect (diag.type()).toContain ("confirm"); 
            expect (diag.message ()).toContain ("I am JS Alert");
            await diag.dismiss;
    
            
        })
    
    
        await page.locator ("//*[text()='Click for JS Alert']").click ();
        await page.waitForTimeout (2000)
    
    
    })


test ("Handling Prompt", async function ({page}) {


    // Enter the website
    
    await page.goto ("https://the-internet.herokuapp.com/javascript_alerts");
    
    //Listener first before click method. 
    
        page.on ('Prompt' , async (prompt) =>{
    
            expect (diag.type()).toContain ("prompt"); 
            expect (diag.message ()).toContain ("I am JS prompt");
            var confrm =  await diag.accept ("Lars") // Input Lars then accept

    
            
        })
    
     
        await page.locator ("//*[text()='Click for JS Alert']").click ();
        await page.waitForTimeout (2000)
    
    
    })