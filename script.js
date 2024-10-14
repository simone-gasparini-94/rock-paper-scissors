let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const resultDiv = document.querySelector("#result");

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

    resultDiv.textContent = `Player chose: ${playerChoice}, Computer chose: ${computerChoice}. ${resultMessage}`;

    updateScore(result);
};

function updateScore(result) {
    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    };
resultDiv.textContent += `Player: ${humanScore},  Computer: ${computerScore}`;
}

rockButton.addEventListener("click", function() {
    playGame("rock");
});

paperButton.addEventListener("click", function() {
    playGame("paper");
});

scissorsButton.addEventListener("click", function() {
    playGame("scissors");
});