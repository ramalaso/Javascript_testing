module.exports = {
    url: 'https://www.trello.com/login',
    elements: {
        txtUserName: '#user',
        txtPassword: '#password',
        btnLogin: '#login',
    },
    commands: [{
        setQuery(value) {
            return this
                .setValue('@mainQueryInput', value);
        },
        logIn() {
            return this
                .click('@btnLogin');
        }
    }]
};
