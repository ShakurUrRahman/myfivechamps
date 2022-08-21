const playerList = [];
function selectPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;

    playerList.push(playerName)
    document.getElementById('added-player').innerText = playerList.length;
}