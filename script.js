
let humanScore = 1;
let computerScore = 1;

const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

const resultContainer = document.querySelector(".container-result");
const humanScoreContainer = document.querySelector(".human-score");
const computerScoreContainer = document.querySelector(".computer-score");










function getComputerChoice() {
    numAleatorio = Math.floor((Math.random() * (4 - 1)) + 1);

    if (numAleatorio == 1) {
        return "piedra";
    } 
    else if (numAleatorio == 2) {
        return "papel";
    }
    else {
        return "tijera";
    }
}







function playRound(humanChoice, computerChoice) {
    

    if (humanChoice == `piedra` && computerChoice == `tijera`) {
        resultContainer.textContent = `Ganaste!! La piedra vence a las tijeras`;
        humanScoreContainer.textContent = `Human Score: ${humanScore++}`
    }
    else if (humanChoice == `papel` && computerChoice == `piedra`) {
        resultContainer.textContent = `Ganaste!! El papel vence a la piedra`;
        humanScoreContainer.textContent = `Human Score: ${humanScore++}`
    }
    else if (humanChoice == `tijera` && computerChoice == `papel`) {
        resultContainer.textContent = `Ganaste!! Las tijeras vencen al papel`;
        humanScoreContainer.textContent = `Human Score: ${humanScore++}`
    }
    else if (humanChoice == `piedra` && computerChoice == `piedra`) {
        resultContainer.textContent = `Empate!`
    }
    else if (humanChoice == `papel` && computerChoice == `papel`) {
        resultContainer.textContent = `Empate!`
    }
    else if (humanChoice == `tijera` && computerChoice == `tijera`) {
        resultContainer.textContent = `Empate!`
    }
    else {
        resultContainer.textContent = `Perdiste!! ${computerChoice} vence a ${humanChoice}`;
        computerScoreContainer.textContent = `Computer Score: ${computerScore++}`
    }

}






piedra.addEventListener("click", () => {
    let computerAnswer = getComputerChoice();
    playRound("piedra", computerAnswer);
})

papel.addEventListener("click", () => {
    let computerAnswer = getComputerChoice();
    playRound("papel", computerAnswer);
})

tijera.addEventListener("click", () => {
    let computerAnswer = getComputerChoice();
    playRound("tijera", computerAnswer);
})


