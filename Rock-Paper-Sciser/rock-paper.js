let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg")
let userScorePara = document.querySelector(".user-score")
let compScorePara = document.querySelector(".comp-score")

let genCompChoice =()=>{
    let options = ['Rock','Paper','Scissors'];
    //rock,paper,scissors
    let randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];

}

let drawGame = () =>{
    // console.log("Game Was Draw")
    msg.innerText = "Game Was Draw! Play Again"
    msg.style.background = " #081b31";
}


let playGame = (userChoice) => {
    // console.log("userChoice = ", userChoice);
    //generate computer choce
    let compChoice = genCompChoice();
    // console.log("compChoice = ", compChoice);

    if(userChoice===compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissors,paper
            userWin  = compChoice==="paper"?false: true;
        }
        else if(userChoice==="paper"){
           //scissors,rock
           userWin  = compChoice==="scissors"?false: true;
        }
        else{
             //paper,rock
             userWin  = compChoice==="rock"?false: true;
        }
        showWinner(userWin ,userChoice,compChoice)
    }

}
let showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You Win");
        msg.innerText = `You Win Your ${userChoice} beats Computer ${compChoice}`
        msg.style.background = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You Lose")
        msg.innerText = `You lose Computer ${compChoice} beats Your ${userChoice}`
        msg.style.background = "red";
    }
};
choices.forEach((choice) => {
    choice.addEventListener('click', () => {

        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
       
    });
});



