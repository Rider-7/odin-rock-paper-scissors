//  1. getComputerChoice() -> script returns a random shape
//  2. round(playerSelection, computerSelection) -> plays a round of rock-paper-scissors with inputted parameter selections,
//                                                  returns a string declaring the user a winner or loser
//  3. game() -> plays five rounds of rock-paper-scissors while keeping track of scores


let shapes = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    idx = Math.floor(Math.random() * 3);
    return shapes[idx];
}

function getPlayerChoice() {
    let playerChoice = prompt("Please input a shape: 'Rock', 'Paper', or 'Scissors' (Case-insensitive).");
     playerChoice = playerChoice.toLocaleLowerCase();

     return shapes.includes(playerChoice) ? playerChoice : "Invalid shape. Please try again";
}

function round(playerSelection, computerSelection) {

    let result;
    
    if (playerSelection === computerSelection) result = 0;

    switch(playerSelection) {
        case 'rock':
            if (computerSelection === 'scissors')
                result = 1;
                break;
        case 'paper':
            if (computerSelection === 'rock')
                result = 1;
                break;
        case 'scissors':
            if (computerSelection === 'paper')
                result = 1;
                break;
    }
    if (result === undefined) result = -1;

    return result;
}