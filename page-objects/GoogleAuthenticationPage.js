module.exports = {
    url: 'https://www.trello.com/login',
    elements: {
        txtGoogleUserName: '#identifierId',
        txtGooglePassword: 'input[type="password"]',
        btnNext: '.VfPpkd-RLmnJb'
    },
    commands: [{
        setTxtValue(selector, value) {
            return this
                .setValue(selector, value);
        },
        pressEnter() {
            return this
            .keys(client.Keys.ENTER)
        },
        NextBtn() {
            return this
                .click('@btnNext')
        }
    }]
};
