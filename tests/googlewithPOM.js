module.exports = {
    '@tags': ['googlePOM'],
    'Google advanced search: Elon Musk' (browser) {
        const mainQuery = 'Elon Musk';
        const page = browser.page.googleAdvancedSearch();
        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`

        page
            .navigate()
            .setValue('@mainQueryInputSelector', mainQuery)
            .selectFilter('@languageDropdown', 'lang_it')
            .search();
        browser
            .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
            .assert.urlContains('lr=lang_it', 'Params: Language is italian')
            .saveScreenshot('test_output/google2.png')
        browser.expect.element(resultsPageQuerySelector).to.be.visible
    }
}