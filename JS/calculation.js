document.getElementById('count-btn').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValue('per-player-field');

    setResultIntoElement('player-expenses', perPlayerCost * 5)

})

document.getElementById('total-btn').addEventListener('click', function () {
    console.log('jee')

})