let min = 1;
let max = 11;

let count = 0;
let has_started = false;
let hasBlackJack = false;
let isAlive = true;

let message = "";

//document.getElementById("card1").innerText += card1;
//document.getElementById("card2").innerText += card2;

//document.getElementById("sum").textContent += sum;

function random_number() { // 
    return Math.floor(Math.random() * (max-min) + 0.3) + min;
}

function reset() {
    location.reload();
}

function start() {
    if(count===0 && !has_started) {
        has_started = true;
        let card1 = random_number();
        let card2 = random_number();

        if(card1 === 1) {
            card1 = 11;
        }

        if(card2 === 1) {
            card2 = 11;
        }

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
                let card3 = random_number();

                if(card3 === 1) {
                    card3 = 11;
                }

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
                let card4 = random_number();

                if(card4 === 1) {
                    card4 = 11;
                }

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
                let card5 = random_number();

                if(card5 === 1) {
                    card5 = 11;
                }

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
                let card6 = random_number();

                if(card6 === 1) {
                    card6 = 11;
                }

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
