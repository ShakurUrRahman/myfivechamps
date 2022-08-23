/* JS for Selecting Players */

const playerArray = [];
document.getElementById('player-cards').addEventListener('click', function (event) {
    if (event.target.classList[0] == 'player') {
        const playerName = event.target.parentNode.children[0].innerText;
        if (playerArray.length < 5) {
            playerArray.push(playerName);

            const newAddedPlayer = document.getElementById('new-added-player');

            const li = document.createElement('li');
            li.innerText = playerName;

            newAddedPlayer.appendChild(li);

            event.target.disabled = true;
            event.target.classList.add('bg-yellow-700')
        }
        else if (playerArray.length == 5) {
            alert("Don't add more than five players")
        }
    }
    else {
        event.target.disabled = false;
    }
})