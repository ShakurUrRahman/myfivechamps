// function addPlayer(element) {
//     const playerName = element.parentNode.children[0].innerText;
//     console.log(playerName);
// }

// const playerArray = [];


// function display(playerArray) {
//     for (let i = 0; i < playerArray.length; i++) {

//         console.log(playerArray[i])
//         // const playerArray = '';
//     }
// }

// const players = document.getElementsByClassName('player');
// for (const player of players) {
//     player.addEventListener('click', function (event) {
//         const player = event.target.parentNode.children[0].innerText;

//         playerArray.push(player);


//         display(playerArray);

//     })
// }

// const playerArray = [];

// document.getElementById('btn-add-player').addEventListener('click', function () {
//     const listContainPlayer = document.getElementById('list-contain-player');

//     const li = document.createElement('li');
//     li.innerText = getStringValue('lionel');

//     listContainPlayer.appendChild(li);
//     document.getElementById('btn-add-player').disabled = true;
//     playerArray.push(li.innerText);
// })

// document.getElementById('btn-add-player2').addEventListener('click', function () {
//     const listContainPlayer = document.getElementById('list-contain-player');

//     const li = document.createElement('li');
//     li.innerText = getStringValue('neymar');

//     listContainPlayer.appendChild(li);
//     document.getElementById('btn-add-player2').disabled = true;
// })

// document.getElementById('btn-add-player3').addEventListener('click', function () {
//     const listContainPlayer = document.getElementById('list-contain-player');

//     const li = document.createElement('li');
//     li.innerText = getStringValue('kylian');

//     listContainPlayer.appendChild(li);
//     document.getElementById('btn-add-player3').disabled = true;
// })

// document.getElementById('btn-add-player4').addEventListener('click', function () {
//     const listContainPlayer = document.getElementById('list-contain-player');

//     const li = document.createElement('li');
//     li.innerText = getStringValue('vitor');

//     listContainPlayer.appendChild(li);
//     document.getElementById('btn-add-player4').disabled = true;
// })

// document.getElementById('btn-add-player5').addEventListener('click', function () {
//     const listContainPlayer = document.getElementById('list-contain-player');

//     const li = document.createElement('li');
//     li.innerText = getStringValue('sergio');

//     listContainPlayer.appendChild(li);
//     document.getElementById('btn-add-player5').disabled = true;
// })

// document.getElementById('btn-add-player6').addEventListener('click', function () {
//     const listContainPlayer = document.getElementById('list-contain-player');

//     const li = document.createElement('li');
//     li.innerText = getStringValue('renato');

//     listContainPlayer.appendChild(li);
//     document.getElementById('btn-add-player6').disabled = true;
// })





































































// document.getElementById('player').addEventListener('click', function () {

//     const messi = getStringValue("lionel-messi");

//     setResultIntoElement("messi", messi);

//     console.log(messi)
// })
// document.getElementById('player2').addEventListener('click', function () {

//     const neymar = getStringValue("neymar-jr");

//     setResultIntoElement("neymar", neymar);

//     console.log(messi)
// })
// document.getElementById('player3').addEventListener('click', function () {

//     const kylian = getStringValue("kylian-embappe");

//     setResultIntoElement("kylian", kylian);

//     console.log(messi)
// })
// document.getElementById('player2').addEventListener('click', function () {

//     const neymar = getStringValue("neymar-jr");

//     setResultIntoElement("neymar", neymar);

//     console.log(messi)
// })
// document.getElementById('player2').addEventListener('click', function () {

//     const neymar = getStringValue("neymar-jr");

//     setResultIntoElement("neymar", neymar);

//     console.log(messi)
// })








const playerArray = [];
document.getElementById('player-cards').addEventListener('click', function (event) {
    if (event.target.classList[0] == 'player') {
        const playerName = event.target.parentNode.children[0].innerText;
        if (playerArray.length < 5) {
            playerArray.push(playerName);

            const newAddedPlayer = document.getElementById('new-added-player');

            const li = document.createElement('li');
            li.innerText = playerName;


            // const ol = document.createElement('ol');
            // ol.classList.add('list-decimal');

            // ol.appendChild(li);
            newAddedPlayer.appendChild(li);

            event.target.disabled = true;
            event.target.classList.add('bg-yellow-700')
        }
        else if (playerArray.length == 5) {
            alert("Don't add more than five player")
        }

    }
    else {
        event.target.disabled = false;
    }


})