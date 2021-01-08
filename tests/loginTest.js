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
            .assert.urlContains('boards', 'Verify that we are in home page url');
            browser.assert.visible('._3qwe2tMMFonNvf', 'Home')
            .saveScreenshot('tests_output/login.png');
    }
};