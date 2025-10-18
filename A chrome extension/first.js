let btn = document.getElementById("input-btn");
let inp = document.getElementById("input-el");
btn.addEventListener("click",savethislink);

function savethislink() {
    let link = inp.value;
    let words = document.getElementById("words");
    let url = window.location.href;
    words.href = url;
    words.innerHTML += link + "<br>";   
}