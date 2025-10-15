let hand = ["rock","paper","scissor"];

function random_item() {
    let random_index = Math.floor(Math.random() * 3);
    return hand[random_index];
}

console.log(random_item());