const { expect } = require('@playwright/test');

class loginPage {


    constructor (page) {

        this.page=page; 
        this.userName = "//input[@name='email1']";
        this.pWord = "//input[@name='password1']"; 
        this.loginButton = "//button[@type='submit']"; 
    }

    async loginPageApplication() {


        await this.page.fill (this.userName, "admin"); 
        await this.page.fill (this.pWord, "passWord123");
        await this.page.click (this.loginButton);

    }
}   

module.exports=loginPage;
