module.exports = {
    '@tags': ['login'],
    '@disabled': false,
    'Log in into Trello with google account'(browser) {
        const login = browser.page.LoginPage();
        const googleAuthenticationPage = browser.page.GoogleAuthenticationPage();
        const googleAuthenticationPassword = browser.page.GoogleAuthenticationPassword();
        login
            .navigate()
            click(login, '@googleButton')
            setTxtValue(googleAuthenticationPage, '@txtGoogleUserName', process.env.GOOGLE_USERNAME)
            pressEnter(googleAuthenticationPage)
            setTxtValue(googleAuthenticationPassword, '#password', process.env.GOOGLE_PASSWORD)
            pressEnter(googleAuthenticationPassword)
        browser
            .assert.urlContains('boards', 'Verify that we are in home page url')
            .assert.visible('._3qwe2tMMFonNvf', 'Verify that web navigator is at Home')
            .saveScreenshot('tests_output/login.png');
    }
}
