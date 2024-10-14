let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const roundPlayerDiv = document.querySelector("#round-player");
const roundComputerDiv = document.querySelector("#round-computer");
const scorePlayerDiv = document.querySelector("#score-player");
const scoreComputerDiv = document.querySelector("#score-computer");
const finalDiv = document.querySelector("#final");
const restartButton = document.querySelector("#restart");

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
    let result = "";

    if (playerChoice === computerChoice) {
        result = "tie";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "win";
    } else {
        result = "lose";
    };

    roundPlayerDiv.textContent = `player: ${playerChoice}`;
    roundComputerDiv.textContent = `computer: ${computerChoice}`;
    updateScore(result);
};

function updateScore(result) {
    if (result === "win") {
        humanScore++;
    } else if (result === "lose") {
        computerScore++;
    };
    
    scorePlayerDiv.textContent = `player: ${humanScore}`;
    scoreComputerDiv.textContent = `computer: ${computerScore}`;
    
    if (humanScore === 5) {
        finalDiv.textContent = "YOU WON!";
        disableButtons();
        restartButton.style.display = "flex";
    } else if (computerScore === 5) {
        finalDiv.textContent = "YOU LOST!";
        disableButtons();
        restartButton.style.display = "flex";
    };
};

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
};

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    roundPlayerDiv.textContent = "";
    roundComputerDiv.textContent = "";
    scorePlayerDiv.textContent = "";
    scoreComputerDiv.textContent = "";
    finalDiv.textContent = "";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    restartButton.style.display = "none";
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

restartButton.addEventListener("click", restartGame);