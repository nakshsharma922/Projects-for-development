let card1 = 10;
let card2 = 5;
let hasBlackJack = false;
let isAlive = true;
let sum = card1 + card2;

let message = "";

function startgame() {
    if(sum <= 20) {
        console.log("Want to draw another card?");  
    }
    else if(sum === 21) {
        console.log("Yohoo!!,you've got a blackjack");
        isAlive = false;
    }
    else {
        console.log("You're out of the game");
    }
}