let in_txt = document.getElementById("inp-txt");
let sav_btn = document.getElementById("sav-btn");
let fch_btn = document.getElementById("fch-btn")
let ulEl = document.getElementById("ul-el");
let arr = [""];

sav_btn.addEventListener("click" , save_input);


function save_input() {
    let link = in_txt.value;
    arr += link;
    for(let i=0;i<arr.length;i++) {
        ulEl.innerHTML += `<li>${arr}</li>`;
    }
}
