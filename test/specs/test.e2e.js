// const CreateNewPastePage = require('../pageobjects/createNewPastePage')
// const ExtendedPageObject = require('../pageobjects/extendedPageObject')

// describe('Test https://pastebin.com', () => {

//     it('I Can Win', async () => {
//         await browser.url('https://pastebin.com')
//         await CreateNewPastePage.codeInput.setValue('Hello from WebDriver')
//         await CreateNewPastePage.postformExpiration.click()
//         await CreateNewPastePage.selectExpiration('10 Minutes')
//         await CreateNewPastePage.postformName.setValue('helloweb')
//     })

//     it('Bring It On', async () => {
//         await browser.url('https://pastebin.com')
//         await ExtendedPageObject.codeInput.setValue('git config --global user.name \"New Sheriff in Town\"git reset $(git commit-tree HEAD^{tree} -m \"Legacy code\")git push origin master --force')
//         await ExtendedPageObject.syntaxHighlighting.click()
//         await ExtendedPageObject.selectExpiration('Bash')
//         await ExtendedPageObject.postformExpiration.click()
//         await ExtendedPageObject.selectExpiration('10 Minutes')
//         await ExtendedPageObject.postformName.setValue('how to gain dominance among developers')
//         // save
//         await ExtendedPageObject.btnBig.click()
//         //check
//         await ExtendedPageObject.checkMachTitle('how to gain dominance among developers')
//         await ExtendedPageObject.checkBash('Bash')
//         await ExtendedPageObject.verifyBashListContent('git config --global user.name \"New Sheriff in Town\"git reset $(git commit-tree HEAD^{tree} -m \"Legacy code\")git push origin master --force')

//     })
// })


const { Builder } = require('selenium-webdriver');
const GoogleCloudHomePage = require('../../page_objects/GoogleCloudHomePage')
const testData = require('../../data/test_data')

describe('Test -> https://cloud.google.com/', () => {
    it('Hurt Me Plenty', async () => {
        const driver = await new Builder().forBrowser('chrome').build();
        await driver.get(`https://cloud.google.com/`);

        const cloudPage = await new GoogleCloudHomePage(driver)
        await cloudPage.searchIconBtn.click()
        await cloudPage.setInputSearch(testData.searchCalculatorStr)
        await cloudPage.searchBtn.click()
        await cloudPage.waitForGoogleCalculator()

        await driver.quit();
    });
    it('should fail and take a screenshot', async () => {
        await browser.url('https://example.com');
        expect(false).toBe(true); // Це завжди призведе до помилки
    });
})
