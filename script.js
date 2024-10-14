let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const roundDiv = document.querySelector("#round");
const scoreDiv = document.querySelector("#score");
const finalDiv = document.querySelector("#final");

function getComputerChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber < 1) {
        return "rock";
    } else if (randomNumber < 2) {
        return "paper";
    } else {
        return "scissors";
    };
};

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = "";
    let result = "";

    if (playerChoice === computerChoice) {
        resultMessage = "It's a tie!";
        result = "tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = "You win!";
        result = "win";
    } else {
        resultMessage = "You lose!";
        result = "lose";
    };

    roundDiv.textContent = `Player chose: ${playerChoice}, Computer chose: ${computerChoice}. ${resultMessage}`;

    updateScore(result);
};

function updateScore(result) {
    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    };
    
    scoreDiv.textContent = `Player: ${humanScore},  Computer: ${computerScore}`;

    if (humanScore === 5) {
        finalDiv.textContent = "YOU WON!";
    } else if (computerScore === 5) {
        finalDiv.textContent = "YOU LOST!";
    };
};

rockButton.addEventListener("click", function() {
    playGame("rock");
});

paperButton.addEventListener("click", function() {
    playGame("paper");
});

scissorsButton.addEventListener("click", function() {
    playGame("scissors");
});