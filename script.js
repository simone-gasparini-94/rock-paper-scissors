let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors?");
    humanChoice = humanChoice.toLowerCase();
    while (!isValidChoice(humanChoice)) {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
        humanChoice = prompt("rock, paper, or scissors?").toLowerCase();
    }
    return humanChoice;
}

function isValidChoice(choice) {
    return choice === "rock" || choice === "paper" || choice === "scissors";
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

function playRound(player, computer) {
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

function playGame() {
    for (let i = 0; i <5; i++) {
        const player = getHumanChoice()
        const computer = getComputerChoice();
        console.log("Your choice: " + player);
        console.log("Computer choice: " + computer);
        console.log(playRound(player, computer));
        console.log(`Score - Player: ${humanScore}, Computer: ${computerScore}`);
    }
console.log("Final Score - Player: " + humanScore + ", Computer: " + computerScore);
}
playGame();