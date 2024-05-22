    let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newGameBtn =  document.querySelector(".new-btn");
let msgContainer =  document.querySelector(".msg-container");
let msg =  document.querySelector(".msg");
let container = document.querySelector(".container")
let body = document.querySelector("body");

let turnO = true; //plyrX, //plyrO

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerHTML = "O";
            box.style.color="red";
            box.style.backgroundColor = "black"; // Set background color to black for O
            turnO = false;
        } else {
            box.innerHTML = "X";
            box.style.color="yellow";
            box.style.backgroundColor = "green"; // Set background color to green for X
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

let disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
        box.style.backgroundColor = ""; // Reset background color when disabling boxes
    }
};

let enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = ""; // Reset background color when enabling boxes
    }
};

let resetGame = () => {
    turnO = true;
    enablebox();
    msgContainer.classList.add("hide")
    
};

let gameon =()=>{
        container.classList.remove("hide");
        turnO = true;
        enablebox();
        msgContainer.classList.add("hide")
        container.classList.remove("hide");
}


let checkWinner = ()=>{
    let isDraw = true;
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                showWinner(pos1Val);

                return;
            }
        }
        else{
            isDraw = false;
        }
    }
    if(isDraw){
        msg.innerText ="Oops! It's Draw Play Again";
        msgContainer.classList.remove("hide");
        container.classList.add("hide");
        disablebox();
    }
};
let showWinner = (winner) =>{
    msg.innerText =`Congratulations Player ${winner} You Win The Game`;
    msgContainer.classList.remove("hide");
    container.classList.add("hide");
   
    disablebox();
} 
 resetbtn.addEventListener("click",resetGame);
 newGameBtn.addEventListener("click",gameon);

