function getComputerChoice(){

    let choice = Math.random();
    if (choice >=0.666){
        return "Rock";
    }else if (choice >=0.333){
        return "Paper";
    }else{
        return "Scissors";
    }
}

function scores(){
    const divScores = document.querySelector("#scores");
    divScores.innerHTML = "";
    const contentScores = document.createElement("div");
    
    contentScores.classList.add("content");
    contentScores.textContent = ("Your Score: "+humanScore+"\nComputer Score: "+computerScore);
    divScores.appendChild(contentScores);
    if(humanScore == 5){
        const divWinner = document.querySelector("#winner");
        const contentWinner = document.createElement("div");
        contentWinner.classList.add("content");
        contentWinner.textContent = "You are the Winner!";
        divWinner.appendChild(contentWinner);
    }else if (computerScore == 5){
        const divWinner = document.querySelector("#winner");
        const contentWinner = document.createElement("div");
        contentWinner.classList.add("content");
        contentWinner.textContent = "The computer is the Winner!";
        divWinner.appendChild(contentWinner);
    }
}

function playRound(humanChoice,computerChoice){
    const div = document.querySelector("#results");
    div.innerHTML = "";
    const content = document.createElement("div");
    content.classList.add("content");
    switch(humanChoice){
        case "Rock":
            if(computerChoice == "Rock"){
                content.textContent = "Draw";
            }else if(computerChoice == "Paper"){
                content.textContent = "You Lose!";
                computerScore++;
            }else{
                content.textContent = "You Win!";
                humanScore++;
            }
            scores();
            break;
        case "Paper":
            if(computerChoice == "Rock"){
                content.textContent = "You Win!";
                humanScore++;
            }else if(computerChoice == "Paper"){
                content.textContent = "Draw";
            }else{
                content.textContent = "You Lose!";
                computerScore++;
            }
            scores();
            break;
        case "Scissors":
            if(computerChoice == "Rock"){
                content.textContent = "You Lose!";
                computerScore++;
            }else if(computerChoice == "Paper"){
                content.textContent = "You Win!";
                humanScore++;
            }else{
                content.textContent = "Draw";
            }
            scores();
            break;
    }
    div.appendChild(content);
}



let humanScore = 0;
let computerScore = 0;

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) {
        playRound("Rock", getComputerChoice());
    }
});

btnPaper.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) {
        playRound("Paper", getComputerChoice());
    }
});

btnScissors.addEventListener("click", () => {
    if (humanScore < 5 && computerScore < 5) {
        playRound("Scissors", getComputerChoice());
    }
});

