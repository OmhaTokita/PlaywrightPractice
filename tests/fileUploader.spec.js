const { test, expect } = require("@playwright/test");



test ("File Upload" , async function ({page}){



    await page.goto ("https://the-internet.herokuapp.com/upload");

    await page.locator ("#file-upload").setInputFiles ("./Upload/eme.png")
    await page.locator ("#file-submit").click ();

    expect (await page.locator ("//h3[text()='File Uploaded!']")).toHaveText ("File")







})