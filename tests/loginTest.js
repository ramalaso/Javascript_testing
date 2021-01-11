module.exports = {
    '@tags': ['login'],
    '@disabled': false,
    'Log in into Trello with username and password'(browser) {
        const page = browser.page.LoginPage();
        page
            .navigate()
            .setTxtValue('@txtUserName', 'osalamar@gmail.com')
            .setTxtValue('@txtPassword', 'ramalaso')
            .logIn();
        browser
            .assert.urlContains('boards', 'Verify that we are in home page url')
            .assert.visible('._3qwe2tMMFonNvf', 'Verify that web navigator is at Home')
            .saveScreenshot('tests_output/login.png')
    }}
module.exports = {
    '@tags': ['login'],
    '@disabled': false,
    'Log in into Trello with google account'(browser) {
        const page = browser.page.LoginPage();
        page
            .navigate()
            .googleBtn()
            .setTxtValue('@txtGoogleUserName', 'ramalaso45')
            .pressEnter()
            .setTxtValue('@txtGooglePassword', 'ramalaso')
            .pressEnter()

        browser
            .assert.urlContains('boards', 'Verify that we are in home page url')
            .assert.visible('._3qwe2tMMFonNvf', 'Verify that web navigator is at Home')
            .saveScreenshot('tests_output/login.png');
    }
}
