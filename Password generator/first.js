let btn = document.getElementById("gen-pass");
let count = false;
let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

btn.addEventListener("click", generate_password);

function generate_password() {
    if (!count) {
        count = true;
        let pass_1 = document.getElementById("pass-1");
        let pass_2 = document.getElementById("pass-2");

        for (let i = 0; i < 15; i++) {
            pass_1.textContent += generate_word();
            pass_2.textContent += generate_word();
        }
    }
}

function generate_word() {
    let rand_index = Math.floor(Math.random() * 9)
    return arr[rand_index];
}

function copied() {
    let copy = getElementById("pass-1");
    copy.addEventListener("click",)
}
