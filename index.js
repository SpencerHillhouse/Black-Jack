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
let currentMoney = 100
let currentMoneyEl = document.getElementById("current-money-el");
currentMoneyEl.textContent = "Current Money: $" + currentMoney
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")
let startButtonEl = document.getElementById("start-button-el");
let hitButtonEl = document.getElementById("hit-button-el");
let dealerEl = document.getElementById("dealer-el");
let newGameButtonEl = document.getElementById("new-game-button-el");
let dealerCardEl = document.getElementById("dealers-cards-el");
let standButtonEl = document.getElementById("stand-button-el");
let choose1El = document.getElementById("choose-1-el");
let choose11El = document.getElementById("choose-11-el");
let betAmount = document.getElementById("bet-amount-el");
let bet5DollarButtonEl = document.getElementById("five-dollar-bet-button-el");
let bet10DollarButtonEl = document.getElementById("ten-dollar-bet-button-el");
let betHalfCurrentAmountButtonEl = document.getElementById("half-current-money-bet-button-el");
let betFullCurrentAmountButtonEl = document.getElementById("full-current-money-bet-button-el");

// function trackMoney() {
//     currentMoneyEl.textContent = "Current Money: $" + currentMoney
// }

function startGame() {
    startButtonEl.style.display = 'none';
    // betAmountButton()
    hitButtonEl.style.display = "block";
    standButtonEl.style.display = "block";
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    dealerEl.textContent = "Dealer: " +" ?";
    dealerCardEl.textContent = "Dealers Cards: " + dealerFirstCard  + " ?";
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack! You Win!";
        gameOver = true;
        hitButtonEl.style.display = "none";
        standButtonEl.style.display = "none";
        newGameButtonEl.style.display = 'block';
    } else {
        message = "You're out of the game! You Lose!";
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (!gameOver) {
        let nextCard = Math.floor(Math.random() * (max - min +1)) +min;
        console.log(nextCard)
        cardsEl.textContent += " " + nextCard;
        sum += nextCard;
        sumEl.textContent = "Sum: " + sum;
        if (sum <= 20) {
            message = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "You've got Blackjack! You Win!";
            gameOver = true;
            hitButtonEl.style.display = "none";
            standButtonEl.style.display = "none";
            newGameButtonEl.style.display = 'block';
        } else {
            message = "You're out of the game! You Lose!";
            isAlive = false;
            gameOver = true;
            hitButtonEl.style.display = "none";
            standButtonEl.style.display = "none";
            newGameButtonEl.style.display = 'block';
        }
        messageEl.textContent = message
    }
}

function newGame(){
    gameOver = false
    newGameButtonEl.style.display = 'none'
    hitButtonEl.style.display = 'block'
    firstCard = Math.floor(Math.random() * (max - min +1)) +min;
    secondCard = Math.floor(Math.random() * (max - min +1)) +min;
    dealerFirstCard = Math.floor(Math.random() * (max - min +1)) +min;
    dealerSecondCard = Math.floor(Math.random() * (max - min +1)) +min;
    sum = firstCard + secondCard;
    dealerSum = dealerFirstCard + dealerSecondCard;
    startGame()
}

function stand(){
    hitButtonEl.style.display = "none";
    dealerCardEl.textContent = "Dealers Cards: " + dealerFirstCard + " " + dealerSecondCard;
    let dealerNextCard = Math.floor(Math.random() * (max - min +1)) +min;
    while (dealerSum <= 16){
        dealerCardEl.textContent += " " + dealerNextCard;
        dealerSum += dealerNextCard;
        dealerNextCard = Math.floor(Math.random() * (max - min +1)) +min;
    }
    if (sum <= 21 && sum > dealerSum || dealerSum > 21){
        dealerEl.textContent = "Dealer: " + dealerSum;
        message = "You Win!";
        gameOver = true;
        hitButtonEl.style.display = "none";
        standButtonEl.style.display = "none";
        newGameButtonEl.style.display = 'block';
    }
    else if (sum <21 && sum == dealerSum){
        message = "You Tie.";
        gameOver = true;
        hitButtonEl.style.display = "none";
        standButtonEl.style.display = "none";
        newGameButtonEl.style.display = 'block';
    }
    else if (sum <21 && sum==dealerSum){
        message = "You Lose!";
        gameOver = true;
        hitButtonEl.style.display = "none";
        standButtonEl.style.display = "none";
        newGameButtonEl.style.display = 'block';
    }
    else {
        dealerEl.textContent = "Dealer: " + dealerSum;
        message = "You Lose!";
        gameOver = true;
        hitButtonEl.style.display = "none";
        standButtonEl.style.display = "none";
        newGameButtonEl.style.display = 'block';
    }
    messageEl.textContent = message
}

// function betAmountButton() {
//     // hitButtonEl.style.display = "none";
//     // standButtonEl.style.display = "none";
//     bet5DollarButtonEl.style.display = "block";
//     bet10DollarButtonEl.style.display = "block";
//     betHalfCurrentAmountButtonEl.style.display = "block";
//     betFullCurrentAmountButtonEl.style.display = "block";
    
// }