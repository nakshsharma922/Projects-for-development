let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newgameBtn = document.querySelector("#new_game");
let hide = document.querySelector(".hide");
let enabled = true;
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(!enabled) return;

        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1_val = boxes[pattern[0]].innerText;
        let pos2_val = boxes[pattern[1]].innerText;
        let pos3_val = boxes[pattern[2]].innerText;

        if(pos1_val != "" && pos2_val != "" && pos3_val != "") {
            if(pos1_val === pos2_val && pos2_val === pos3_val) {
                console.log("winner", pos1_val);
                enabled = false;
                show_winner(pos1_val);
            }
        }
    }
}

const show_winner = (val) => {
    hide.style.display = "block";
    let result = document.querySelector(".result");
    result.innerText = `Congratulations, Winner is ${val}`;
};

const enable_boxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const reset_game = () => {
    turnO = true;
    enable_boxes();
    enabled = true;
    hide.style.display = "none";
}

newgameBtn.addEventListener("click", reset_game);
resetBtn.addEventListener("click", reset_game);