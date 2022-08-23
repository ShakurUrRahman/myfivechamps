/* Functions for Interactions */

function getInputFieldValue(idName) {
    return parseFloat(document.getElementById(idName).value);
}

function getStringValue(idName) {
    return document.getElementById(idName).innerText;
}

function setResultIntoElement(idName, result) {
    document.getElementById(idName).innerText = result;
}
