class ExtendedPageObject {
    get codeInput() { return $('#postform-text') }
    get syntaxHighlighting() { return $('#select2-postform-format-container') }
    get postformExpiration() { return $('#select2-postform-expiration-container') }
    get postformName() { return $('#postform-name') }
    get btnBig() { return $('button*=Create New Paste') }
    get machTitle(){return $('.info-top')}
    get checkBtnBash(){return $('a*=Bash')}
    get bashListItems(){return $$('ol.bash li')}


    async selectExpiration(expiration) {
        const expirationOption = await $(`//li[contains(text(), '${expiration}')]`);
        await expirationOption.click();
    }
    
     async checkMachTitle(title){
        const actualTitle = await this.machTitle.getText();
        expect(actualTitle).toEqual(title);
     }

    async checkBash(title){
        const actualTitle=await this.checkBtnBash.getText()
        expect(actualTitle).toEqual(title)
    }
    async verifyBashListContent(expectedParagraphs) {
        const itemTexts = [];
        const gitBash=await this.bashListItems
        for (const el of gitBash) {
            const text = await el.getText();
            itemTexts.push(text);
        }
        return itemTexts;
    }
}

module.exports = new ExtendedPageObject();