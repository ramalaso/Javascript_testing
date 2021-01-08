module.exports = {
    url: 'https://www.trello.com/login',
    elements: {
        txtUserName: '#user',
        txtPassword: '#password',
        btnLogin: '#login',
    },
    commands: [{
        setTxtValue(selector, value) {
            return this
                .setValue(selector, value);
        },
        logIn() {
            return this
                .click('@btnLogin');
        }
    }]
};
