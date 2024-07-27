
let humanScore = 0;
let computerScore = 0;




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




function getHumanChoice() {
    return prompt("Piedra, papel o tijera?");
}


function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == `piedra` && computerChoice == `tijeras`) {
        console.log(`Ganaste!! La piedra vence a las tijeras`);
        return humanScore++
    }
    else if (humanChoice == `papel` && computerChoice == `piedra`) {
        console.log(`Ganaste!! El papel vence a la piedra`);
        return humanScore++
    }
    else if (humanChoice == `tijeras` && computerChoice == `papel`) {
        console.log(`Ganaste!! Las tijeras vencen al papel`);
        return humanScore++
    }
    else {
        console.log(`Perdiste!! ${computerChoice} vence a ${humanChoice}`);
        return computerScore++
    }

}



function playGame() {
    let humanSelection;
    let computerSelection;
    
    for (let i = 0; i <= 4; i++) {
        
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`Computer Score: ${computerScore}`);
    console.log(`Human Score: ${humanScore}`);
}









playGame();
