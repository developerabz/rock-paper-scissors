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
        return `Tie by rock, you = ${playerPoint} computer = ${computerPoint}`;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Paper") {
        return `Tie by paper, you = ${playerPoint} computer = ${computerPoint}`;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors") {
        return `Tie by Scissors, you = ${playerPoint} computer = ${computerPoint}`;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper") {
        return `Lose to paper, you = ${playerPoint} computer = ${++computerPoint}`;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors") {
        return `Lose to scissors, you = ${playerPoint} computer = ${++computerPoint}`;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock") {
        return `Lose to rock, you = ${playerPoint} computer = ${++computerPoint}`;
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") {
        return `Win with rock, you = ${++playerPoint} computer = ${computerPoint}`;
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock") {
        return `Win with paper, you = ${++playerPoint} computer = ${computerPoint}`;
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") {
        return `Win with scissors, you = ${++playerPoint} computer = ${computerPoint}`;
    }

}

    let playerSelection = prompt("Choose Rock, Paper or Scissors!", "");

    let computerSelection = computerPlay();


//create new function game(). call playRound inside this
// to play a five round game that keeps score

//stop game from looping computer randomised rock paper scissors 
//game stops looping once prompt added to for loop, i.e. line 73

let playerPoint = 0;
let computerPoint = 0;

function game() {
    

    for (let i=0; i < 5; i++) {
       
        playerSelection = prompt("Choose Rock, Paper or Scissors!", "");
        console.log("You play " + playerSelection);
        console.log("Computer plays " + computerSelection);
        console.log(oneRound(playerSelection, computerSelection));
        if (i === 4) {
            if (playerPoint > computerPoint) {
                console.log("You Win!");
            } else {
                console.log("You lose")
            }
        } 
    }

}

console.log(game());
