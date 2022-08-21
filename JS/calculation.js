document.getElementById('count-btn').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValue('per-player-field');
    const totalPlayerCost = perPlayerCost * 5;

    setResultIntoElement('player-expenses', totalPlayerCost)

})

document.getElementById('total-btn').addEventListener('click', function () {
    const managerCost = getInputFieldValue('manager-cost');
    const coachCost = getInputFieldValue('coach-cost');
    const perPlayerCost = getInputFieldValue('per-player-field');
    const totalPlayerCost = perPlayerCost * 5;

    const totalCost = managerCost + coachCost + totalPlayerCost;

    setResultIntoElement('total-expenses', totalCost)

})