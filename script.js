// creating function called computerPlay
// function random returns either rock, paper or scissors

function computerPlay(hand) {
    
    hand = Math.floor(Math.random()*3 + 1);


    if (hand === 1) {
        return "Rock"
    } else if (hand === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }

    
}


// function that plays a round with computer
// function takes 2 parameters
// parameter one for playerSelection
// parameter two for computerSelection
// returns string saying you lose or you win
// player selection is case insensitive

function oneRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "Rock") {
        return "Tie by rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        return "Tie by paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
        return "Tie by Scissors";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return "Lose to paper";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        return "Lose to scissors";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return "Lose to rock";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return "Win with rock";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return "Win with paper";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        return "Win with scissors";
    }

}

const playerSelection = "PapER";

const computerSelection = computerPlay();

console.log("You play " + playerSelection);
console.log("Computer plays " + computerSelection);

console.log(oneRound(playerSelection, computerSelection));