const setTxtValue = require('../utils/common')

module.exports = {
    url: 'https://www.trello.com/login',
    elements: {
        txtUserName: '#user',
        txtPassword: '#password',
        btnLogin: '#login',
        btnGoogle: '#googleButton',
    },
    commands: [{
        userGoogleOption() {
            return this
            .useXpath()  
            .click("//div[contains(text(),'Raúl Laredo')]")
        },
    }]
};
