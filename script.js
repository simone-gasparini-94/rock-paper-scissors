let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors?");
    return humanChoice;
}

function getComputerChoice() {
    let randomNumber = Math.random()*3;
    if (randomNumber < 1) {
        return "rock";
    } else if (randomNumber < 2) {
        return "paper";
    } else {
        return "scissors";
    }    
}

const player = getHumanChoice()
const computer = getComputerChoice();

console.log("Your choice: " + player);
console.log("Computer choice: " + computer);

function determineWinner(player, computer) {
    if (player === computer) {
        return "Tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}
console.log(determineWinner(player, computer));

console.log(`Score - Player: ${humanScore}, Computer: ${computerScore}`);
