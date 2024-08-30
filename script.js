let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;//player x & player o
let count = 0; //to track draw

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
const resetgame=()=>{
    turn0 = true;
    enableBoxes();
    count = 0;
    msgContainer.classList.add("hide");
}
const draw=()=>{
    if (count === 9){
        msg.innerText = `It's a Draw!`;
        msgContainer.classList.remove("hide");
    }
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {

        if (turn0) {
            box.innerText = "O";
            box.style.color = "blue";
            turn0 = false;
            count++;
            console.log(count);
        }
        else {
            box.innerText = "X";
            turn0 = true;
            count++;
            console.log(count);
        }
        box.disabled = true;
        checkWinner();
        draw();
    })
})
const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulations ${winner} is the winner`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner = () => {
    for (patterns of winPatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showwinner(pos1val);
            }
        }
    }
}
newGameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);