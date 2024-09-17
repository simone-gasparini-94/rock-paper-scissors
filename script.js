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
        return "It's a tie!";
    } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "Player wins!";
        humanScore++;
    } else {
        return "Computer wins!";
        computerScore++;
    }
}
console.log(determineWinner(player, computer));

console.log(`Score - Player: ${humanScore}, Computer: ${computerScore}`);
