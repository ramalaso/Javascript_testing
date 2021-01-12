module.exports = setTxtValue=(client, selector, value) => {
    return client
        .setValue(selector, value);
}

module.exports = clickOption = (client, selector) => {
    return client
            .click(selector);
}