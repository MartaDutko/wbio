const { By, until } = require('selenium-webdriver');

class GoogleCloudHomePage {
    constructor(driver) {
        this.driver = driver;
    }
    // get searchIconBtn() { return this.driver.findElement(By.css('div.YSM5dfxgfxgfcgfcgfS')); }
    get searchIconBtn() { return this.driver.findElement(By.css('div.YSM5S')); }
    get searchBtn() { return this.driver.findElement(By.css('i[jsname=Z5wyCf]')) }
    // get googleCalculator(){return  this.driver.findElement(By.css('div.x9K9hf'))}

    // 3
    async setInputSearch(value) {
        const inputSearch = this.driver.findElement(By.css('input[jsname="YPqjbf"]'))
        inputSearch.clear()
        inputSearch.sendKeys(value)
    }
    // 4
    async waitForGoogleCalculator(timeout = 5000) {
        const googleCalculator = await this.driver.wait(until.elementLocated(By.css('div.x9K9hf')), timeout);
        googleCalculator.click()
    }
}

module.exports = GoogleCloudHomePage;