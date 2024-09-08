const min = 2;
const max = 11;
let firstCard = Math.floor(Math.random() * (max - min +1)) + min;
let secondCard = Math.floor(Math.random() * (max - min +1)) +min;
let dealerFirstCard = Math.floor(Math.random() * 11) +1;
let dealerSecondCard = Math.floor(Math.random() * 11) +1;
let dealerSum = dealerFirstCard + dealerSecondCard;
let sum = firstCard + secondCard;
let gameOver = false;
let isAlive = true;
let message = "";
let bust = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")
let startButtonEl = document.getElementById("start-button-el");
let newCardButtonEl = document.getElementById("new-card-button-el");
let dealerEl = document.getElementById("dealer-el");
let newGameButtonEl = document.getElementById("new-game-button-el");
let dealerCardEl = document.getElementById("dealers-cards-el");
let standButtonEl = document.getElementById("stand-button-el");
let choose1El = document.getElementById("choose-1-el");
let choose11El = document.getElementById("choose-11-el");

// function chooseValue1(){
//     if (firstCard=11) {
//         firstCard=1
//     }
//     else if (secondCard=11) {
//         secondCard=1
//     }
// }

// function chooseValue11(){
//     if (firstCard=11)   {
//         firstCard=11
//         return firstCard
//     }
//     else if (secondCard=11) {
//         secondCard=11
//         return secondCard
//     }
//     return secondCard
// }

function startGame() {
    startButtonEl.style.display = 'none';
    newCardButtonEl.style.display = "block";
    standButtonEl.style.display = "block";
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    dealerEl.textContent = "Dealer: " + dealerFirstCard;
    dealerCardEl.textContent = "Dealers Cards: " + dealerFirstCard 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack! You Win!"
        gameOver = true
        newCardButtonEl.style.display = "none"
        standButtonEl.style.display = "none"
        newGameButtonEl.style.display = 'block'
    } else {
        message = "You're out of the game! You Lose!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (!gameOver) {
        let nextCard = Math.floor(Math.random() * 11)+1;
        console.log(nextCard)
        cardsEl.textContent += " " + nextCard;
        sum += nextCard;
        sumEl.textContent = "Sum: " + sum;
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "You've got Blackjack! You Win!"
            gameOver = true
            newCardButtonEl.style.display = "none"
            standButtonEl.style.display = "none"
            newGameButtonEl.style.display = 'block'
        } else {
            message = "You're out of the game! You Lose!";
            isAlive = false
            gameOver = true
            newCardButtonEl.style.display = "none"
            standButtonEl.style.display = "none"
            newGameButtonEl.style.display = 'block'
            // startButtonEl.style.display = "block"
            // newGameButtonEl.style.display = "align"
        }
        messageEl.textContent = message
    }
}

function newGame(){
    gameOver = false
    newGameButtonEl.style.display = 'none'
    newCardButtonEl.style.display = 'block'
    firstCard = Math.floor(Math.random() * 11) +1;
    secondCard = Math.floor(Math.random() * 11) +1;
    dealerFirstCard = Math.floor(Math.random() * 11) +1;
    dealerSecondCard = Math.floor(Math.random() * 11) +1;
    sum = firstCard + secondCard;
    dealerSum = dealerFirstCard + dealerSecondCard
    startGame()
}

function stand(){
    newCardButtonEl.style.display = "none";
    dealerCardEl.textContent = "Dealers Cards: " + dealerFirstCard + " " + dealerSecondCard;
    let dealerNextCard = Math.floor(Math.random() * 11)+1;
    while (dealerSum <= 16){
        dealerCardEl.textContent += " " + dealerNextCard;
        dealerSum += dealerNextCard;
        // dealerEl.textContent = "Dealer: " + dealerSum;
    }
    // if (dealerSum <= 16){
    //     dealerCardEl.textContent += " " + dealerNextCard;
    //     dealerSum += dealerNextCard;
    //     dealerEl.textContent = "Dealer: " + dealerSum;
    // }
    if (sum <= 21 && sum > dealerSum || dealerSum > 21){
        dealerEl.textContent = "Dealer: " + dealerSum;
        message = "You Win!"
        gameOver = true
        newCardButtonEl.style.display = "none"
        standButtonEl.style.display = "none"
        newGameButtonEl.style.display = 'block'
    }
    else if (sum <21 && sum==dealerSum){
        message = "You Lose!"
        gameOver = true
        newCardButtonEl.style.display = "none"
        standButtonEl.style.display = "none"
        newGameButtonEl.style.display = 'block'
    }
    else {
        dealerEl.textContent = "Dealer: " + dealerSum;
        message = "You Lose!"
        gameOver = true
        newCardButtonEl.style.display = "none"
        standButtonEl.style.display = "none"
        newGameButtonEl.style.display = 'block'
    }
    messageEl.textContent = message

}