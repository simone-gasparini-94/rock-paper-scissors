function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33333) {
        return "rock";
    } else if (randomNumber > 0.33333 && randomNumber < 0.66666) {
        return "paper";
    } else {
        return "scissors";
    }    
}
console.log(getComputerChoice());
