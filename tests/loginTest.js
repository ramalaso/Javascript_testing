// module.exports = {
//     '@tags': ['login'],
//     '@disabled': false,
//     'Log in into Trello with username and password'(browser) {
//         const page = browser.page.LoginPage();
//         require('dotenv').config()
//         page
//             .navigate()
//             .setTxtValue('@txtUserName', process.env.TRELLO_USERNAME)
//             .setTxtValue('@txtPassword', process.env.TRELLO_PASSWORD)
//             .logIn();
//         browser
//             .assert.urlContains('boards', 'Verify that we are in home page url')
//             .assert.visible('._3qwe2tMMFonNvf', 'Verify that web navigator is at Home')
//             .saveScreenshot('tests_output/login.png')
//     }}
module.exports = {
    '@tags': ['login'],
    '@disabled': false,
    'Log in into Trello with google account'(browser) {
        const login = browser.page.LoginPage();
        const googleAuthenticationPage = browser.page.googleAuthenticationPage();
        login
            .navigate()
            .googleBtn()
        googleAuthenticationPage
            .setTxtValue('@txtGoogleUserName', process.env.GOOGLE_USERNAME)
            .pressEnter()
            .setTxtValue('@txtGooglePassword', process.env.GOOGLE_PASSWORD)
            .pressEnter()

        browser
            .assert.urlContains('boards', 'Verify that we are in home page url')
            .assert.visible('._3qwe2tMMFonNvf', 'Verify that web navigator is at Home')
            .saveScreenshot('tests_output/login.png');
    }
}
