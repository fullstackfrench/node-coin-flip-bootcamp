//User selects heads or tails 
//Coin is flipped
//Coin lands on heads or tails
//User wins or loses and result is printed to the DOM. 


document.querySelector('#heads').addEventListener('click', checkForHeads)
document.querySelector('#tails').addEventListener('click', checkForTails)

function checkForHeads() {
    fetch(`/api?headsortails=result`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            if(data.decision == 'Heads') {
                document.querySelector('p').innerText = 'Coin landed on heads! You win!'
            } else {
                document.querySelector('p').innerText = 'Coin landed on Tails! You lose!'
            }
        })
}

function checkForTails() {
    fetch(`/api?headsortails=result`)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            if(data.decision == 'Tails') {
                document.querySelector('p').innerText = 'Coin landed on Tails! You win!'
            } else {
                document.querySelector('p').innerText = 'Coin landed on Heads! You Lose!'
            }
        })
}