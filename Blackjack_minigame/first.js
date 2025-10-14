let min = 2;
let max = 11;
Math.floor(Math.random() * (max-min)) + min;
let card1 = 0;
let card2 = 0;
let count = 0;
let has_started = false;
let hasBlackJack = false;
let isAlive = true;
let sum = card1 + card2;
let message = "";

document.getElementById("card1").innerText += card1;
document.getElementById("card2").innerText += card2;

document.getElementById("sum").textContent += sum;

function reset() {
    location.reload();
}

function start() {
    if(count===0 && !has_started) {
        has_started = true;
        card1 = Math.floor(Math.random() * (max-min)) + min;
        card2 = Math.floor(Math.random() * (max-min)) + min;

        sum = card1 + card2;

        document.getElementById("card1").innerText = card1;
        document.getElementById("card2").innerText = card2;
        document.getElementById("sum").textContent = sum;

        if(sum <= 20 && isAlive) {
            message = "You have to draw another card!";
            document.getElementById("message-el").innerText = message;
        }
        else if(sum === 21) {
            message = "You've got a blackjack";
            document.getElementById("message-el").innerText = message;
            hasBlackJack = true;
        }
        else {
            isAlive = false;
            message = "You're out of the game";
            document.getElementById("message-el").innerText = message;
        }
    }
}

function newgame() {
    count=0;
    isAlive = true;
    has_started = false;
    document.getElementById("cards").innerHTML = "Cards : " + `<span id="card1"></span> <span id="card2"></span> `
    document.getElementById("message-el").innerText = "";
    start();
}

function newcard() {  
    if(has_started) {
        count++;
        switch(count) {
        case 1:
            if(sum <= 20 && isAlive) {
                let card3 = Math.floor(Math.random() * (max-min)) + min;
                sum += card3;
                document.getElementById("cards").innerHTML += `<span id="card3"></span>`;
                document.getElementById("card3").innerHTML = card3;
                document.getElementById("sum").textContent = sum;
                if(sum > 21) {
                    isAlive = false;
                    message = "You're out of the game";
                    document.getElementById("message-el").innerText = message;
                }
                else if(sum === 21) {
                    message = "You've got a blackjack";
                    document.getElementById("message-el").innerText = message;
                }
                break;
            }
        case 2:
            if(sum <= 20 && isAlive) {
                let card4 = Math.floor(Math.random() * (max-min)) + min;
                sum += card4;
                document.getElementById("cards").innerHTML += ` <span id="card4"></span>`;
                document.getElementById("card4").innerHTML = card4;
                document.getElementById("sum").textContent = sum;
                if(sum > 21) {
                    isAlive = false;
                    message = "You're out of the game";
                    document.getElementById("message-el").innerText = message;
                }
                else if(sum === 21) {
                    message = "You've got a blackjack";
                    document.getElementById("message-el").innerText = message;
                }
                break;
            }
        case 3:
            if(sum <= 20 && isAlive) {
                let card5 = Math.floor(Math.random() * (max-min)) + min;
                sum += card5;
                document.getElementById("cards").innerHTML += ` <span id="card5"></span>`;
                document.getElementById("card5").innerHTML = card5;
                document.getElementById("sum").textContent = sum;
                if(sum > 21) {
                    isAlive = false;
                    message = "You're out of the game";
                    document.getElementById("message-el").innerText = message;
                }
                else if(sum === 21) {
                    message = "You've got a blackjack";
                    document.getElementById("message-el").innerText = message;
                }
                break;
            }
        case 4:
            if(sum <= 20 && isAlive) {
                let card6 = Math.floor(Math.random() * (max-min)) + min;
                sum += card6;
                document.getElementById("cards").innerHTML += ` <span id="card6"></span>`;
                document.getElementById("card6").innerHTML = card6;
                document.getElementById("sum").textContent = sum;
                if(sum > 21) {
                    isAlive = false;
                    message = "You're out of the game";
                    document.getElementById("message-el").innerText = message;
                }
                else if(sum === 21) {
                    message = "You've got a blackjack";
                    document.getElementById("message-el").innerText = message;
                }
                break;                
            }
        }
    }
    
}

document.getElementById("rules-btn").onclick = function() {
  document.getElementById("rules-popup").style.display = "flex";
}

document.getElementById("close-btn").onclick = function() {
  document.getElementById("rules-popup").style.display = "none";
}
