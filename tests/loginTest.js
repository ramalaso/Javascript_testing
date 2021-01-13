// const common = require('../utils/common')
module.exports = {
    '@tags': ['login'],
    '@disabled': false,
    'Log in into Trello with username and password'(browser) {
        const page = browser.page.LoginPage();
        require('dotenv').config()
        page
            .navigate()
            setTxtValue(page, '@txtUserName', process.env.TRELLO_USERNAME)
            setTxtValue(page, '@txtPassword', process.env.TRELLO_PASSWORD)
            clickOption(page, '@btnLogin')
        browser
            .assert.urlContains('boards', 'Verify that we are in home page url')
            .assert.visible('._3qwe2tMMFonNvf', 'Verify that web navigator is at Home')
            .saveScreenshot('tests_output/login.png')
    }
}
