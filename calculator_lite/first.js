let num1 = 12;
let num2 = 12;

document.getElementById("elem-1").textContent = num1;
document.getElementById("elem-2").textContent = num2;

function add() {
    let sum = num1 + num2;
    document.getElementById("sum").textContent = sum;
}

function subtract() {
    let sum = num1 - num2;
    document.getElementById("sum").textContent = sum;
}
function multiply() {
    let sum = num1 * num2;
    document.getElementById("sum").textContent = sum;
}

const divide = () => {
    let sum = num1/num2;
    document.getElementById("sum").textContent = sum;
}
document.getElementById("divide").addEventListener("click", divide);