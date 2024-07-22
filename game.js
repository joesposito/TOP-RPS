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

// Takes in input for user and computer choice and computes tic-tac-tie logic
function playRound(computerChoice, userChoice){
    if(computerChoice === "rock" && userChoice === "scissors"){
        displayRoundResults("You lose! Rock beats Scissors");
        computerScore++;
    }else if(computerChoice === "paper" && userChoice === "rock"){
        displayRoundResults("You lose! Paper beats Rock");
        computerScore++;
    }else if(computerChoice === "scissors" && userChoice === "paper"){
        displayRoundResults("You lose! Scissors beats Paper");
        computerScore++;
    }else if(userChoice === "rock" && computerChoice === "scissors"){
        displayRoundResults("You win! Rock beats Scissors");
        userScore++;
    }else if(userChoice === "paper" && computerChoice === "rock"){
        displayRoundResults("You win! Paper beats Rock");
        userScore++;
    }else if(userChoice === "scissors" && computerChoice === "paper"){
        displayRoundResults("You win! Scissors beats Paper");
        userScore++;
    }else{
        displayRoundResults("Tie!");
        computerScore++;
        userScore++;
    }
}

function updateScore(){
    user_score_p.textContent = "Your score is: " + userScore;
    computer_score_p.textContent = "Computer score is: " + computerScore;
}

function displayRoundResults(result){
    round_results_p.textContent = result;
}

function displayGameResults(result){
    console.log(document.getElementById("game_results_div") !== null);
    if(document.getElementById("game_results_div") !== null){
        return;
    }

    let div = document.createElement("div");
    div.setAttribute("id", "game_results_div");

    let p = document.createElement("p");
    div.setAttribute("id", "game_results_p");
    div.appendChild(p);

    let text = document.createTextNode(result);
    p.appendChild(text);
    p.style.color = "red";

    let insertionDiv = document.getElementById("round_results_div");
    insertionDiv.appendChild(div);
}

var userScore = 0;
var computerScore = 0;

var buttons = Array.from(document.getElementsByClassName("rps-button"));
var user_score_p = document.getElementById("user_score_p");
var computer_score_p = document.getElementById("computer_score_p");
var round_results_p = document.getElementById("round_results_p");

var gameIsActive = true;

// add click event for all buttons, executing game logic inside a lambda
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(!gameIsActive){
            return;
        }

        // uses the text of the button to determine user choice
        playRound(getComputerChoice(), button.textContent.toLowerCase());
        updateScore();

        if(userScore === 5 && computerScore === 5){
            displayGameResults("TIE");
            gameIsActive = false;
            return;
        }else if(userScore >= 5){
            displayGameResults("USER WINS");
            gameIsActive = false;
            return;
        }else if(computerScore >= 5){
            displayGameResults("COMPUTER WINS");
            gameIsActive = false;
            return;
        }
    })
});