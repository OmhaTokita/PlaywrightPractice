const { expect } = require('@playwright/test');
const exp = require('constants');


class homePageSite {

    constructor (page){

        this.page=page;
        this.menu= "//*[@alt='menu']";
        this.logOut= "//*[text()='Practise']";


    }

    async logOutApllication(){

        y
        await this.page.click  (this.menu);
        await this.page.click (this.logOut);

    }

    async verification (){

        await expect(this.page.locator(this.menu)).toBeVisible ();
    }
}
module.exports = homePageSite ;

