/* My Budget Calculation */

document.getElementById('count-btn').addEventListener('click', function () {
    const perPlayerCost = getInputFieldValue('per-player-field');

    if (isNaN(perPlayerCost) || perPlayerCost < 0) {
        alert('Put a valid number')
        return;
    }
    const totalPlayerCost = perPlayerCost * playerArray.length;

    setResultIntoElement('player-expenses', totalPlayerCost)
})


/* Total Calculation */

document.getElementById('total-btn').addEventListener('click', function () {
    const managerCost = getInputFieldValue('manager-cost');
    const coachCost = getInputFieldValue('coach-cost');
    const perPlayerCost = getInputFieldValue('per-player-field');
    const totalPlayerCost = perPlayerCost * playerArray.length;

    if (isNaN(managerCost) || isNaN(coachCost) || managerCost < 0 || coachCost < 0) {
        alert('Put a valid number')
        return;
    }

    const totalCost = managerCost + coachCost + totalPlayerCost;

    setResultIntoElement('total-expenses', totalCost)

    document.getElementById('per-player-field').value = '';
    document.getElementById('manager-cost').value = '';
    document.getElementById('coach-cost').value = '';

})