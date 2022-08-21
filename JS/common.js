function getInputFieldValue(idName) {
    return parseFloat(document.getElementById(idName).value);
}

function setResultIntoElement(idName, result) {
    document.getElementById(idName).innerText = result;
}