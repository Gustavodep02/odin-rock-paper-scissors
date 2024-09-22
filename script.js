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

function getHumanChoice(){
    while(true){
    let choice = prompt("Rock, paper or scissors?");
    
    if (choice.toLowerCase() =="rock"){
        return "Rock";
    }else if (choice.toLowerCase() =="paper"){
        return "Paper";
    }else if (choice.toLowerCase() == "scissors"){
        return "Scissors"
    }else{
        alert("Invalid Input!\nChoose rock, paper or scissors!")
    }
}
}

function scores(){
    console.log("Your Score: "+humanScore+"\nComputer Score: "+computerScore);
}

function playRound(humanChoice,computerChoice){
    switch(humanChoice){
        case "Rock":
            if(computerChoice == "Rock"){
                console.log("Draw!");
            }else if(computerChoice == "Paper"){
                console.log("You Lose!");
                computerScore++;
            }else{
                console.log("You Win!")
                humanScore++;
            }
            scores();
            break;
        case "Paper":
            if(computerChoice == "Rock"){
                console.log("You Win!");
                humanScore++;
            }else if(computerChoice == "Paper"){
                console.log("Draw!");
            }else{
                console.log("You Lose!")
                computerScore++;
            }
            scores();
            break;
        case "Scissors":
            if(computerChoice == "Rock"){
                console.log("You Lose!");
                computerScore++;
            }else if(computerChoice == "Paper"){
                console.log("You Win!");
                humanScore++;
            }else{
                console.log("Draw!")
            }
            scores();
            break;
    }
}

function playGame(){


    for(let i = 0; i<=5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection);
    }
}

let humanScore = 0;
let computerScore = 0;
playGame();
