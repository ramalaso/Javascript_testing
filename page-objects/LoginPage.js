module.exports = {
    url: 'https://www.trello.com/login',
    elements: {
        txtUserName: '#user',
        txtPassword: '#password',
        btnLogin: '#login',
        btnGoogle: '#googleButton',
        txtGoogleUserName: '#identifierId',
        txtGooglePassword: 'input[type="password"]'
    },
    commands: [{
        setTxtValue(selector, value) {
            return this
                .setValue(selector, value);
        },
        logIn() {
            return this
                .click('@btnLogin');
        },
        googleBtn() {
            return this
                .click('@btnGoogle');
        },
        userGoogleOption() {
            return this
            .useXpath()  
            .click("//div[contains(text(),'Raúl Laredo')]")
        },
        pressEnter() {
            return this
            .keys(client.Keys.ENTER)
        }
    }]
};
