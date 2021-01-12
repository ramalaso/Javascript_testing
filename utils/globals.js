module.exports = setTxtValue=(client, selector, value) => {
    return client
        .setValue(selector, value);
}