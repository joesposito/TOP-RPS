// Chooses computer's choice
function getComputerChoice(){
    let number = Math.round(Math.random() * 2);

    if(number === 0){
        return "rock";
    }else if(number === 1){
        return "paper";
    }else{
        return "scissors";
    }
}

// Obtains user's choice
function getUserChoice(){
    let input = prompt("Enter \"Rock\", \"Paper\", or \"Scissors\".");

    input = input.toLowerCase();

    // Only escape when we have valid input
    while(input !== "rock" && input !== "paper" && input !== "scissors"){
        input = prompt("Please enter a valid input: \"Rock\", \"Paper\", or \"Scissors\".");
    }

    return input;
}

// Takes in input for user and computer choice and computes tic-tac-tie logic
function playRound(computerChoice, userChoice){
    if(computerChoice === "rock" && userChoice === "scissors"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }else if(computerChoice === "paper" && userChoice === "rock"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }else if(computerChoice === "scissors" && userChoice === "paper"){
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }else if(userChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats Scissors");
        userChoice++;
    }else if(userChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats Rock");
        userChoice++;
    }else if(userChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats Paper");
        userChoice++;
    }else{
        console.log("Tie!")
        computerScore++;
        userScore++;
    }
}

var userScore = 0;
var computerScore = 0;

// Plays game for 5 rounds
for(let i = 0; i < 5; i++){
    playRound(getComputerChoice(), getUserChoice());
}

// Determines the winner out of the 5 rounds
if(userScore > computerScore){
    console.log("USER WINS");
}else{
    console.log("COMPUTER WINS");
}