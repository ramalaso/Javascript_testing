module.exports = {
    url: 'https://www.trello.com/login',
    elements: {
        txtGooglePassword: '#password',
        btnNext: '.VfPpkd-RLmnJb'
    },
    commands: [{
        setTxtValue(selector, value) {
            return this
                .setValue(selector, value);
        },
        pressEnter(client) {
            return client
                .keys(client.Keys.ENTER)
        },
        NextBtn() {
            return this
                .click('@btnNext')
        }
    }]
};
