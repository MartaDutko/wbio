class CreateNewPastePage {
    get codeInput() { return $('#postform-text') }
    get postformExpiration() { return $('#select2-postform-expiration-container') }
    get postformName() { return $('#postform-name') }

    async selectExpiration(expiration) {
        const expirationOption = await $(`//li[contains(text(), '${expiration}')]`);
        await expirationOption.click();
    }
}

module.exports = new CreateNewPastePage()