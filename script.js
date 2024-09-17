function getHumanChoice() {
    let playerChoice = prompt("rock, paper, or scissors?");
    return playerChoice;
}
console.log("Your choice: " + getHumanChoice());

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
console.log("Computer choice: " + getComputerChoice());

