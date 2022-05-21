// creating function called computerPlay
// function random returns either rock, paper or scissors

const maincontainer = document.querySelector(".maincontainer");
const container = document.createElement('div');
container.classList.toggle("container");
maincontainer.appendChild(container);



function computerPlay() {
    const computermove = document.createElement('p');
    computermove.classList.toggle("computermove");
    let hand = Math.floor(Math.random()*3 + 1);
    
    let allrps = ["Rock", "Paper", "Scissors"];
    computermove.textContent = allrps[hand - 1];
    container.appendChild(computermove);
    return allrps[hand - 1];
}





// function that plays a round with computer
// function takes 2 parameters
// parameter one for playerSelection
// parameter two for computerSelection
// returns string saying you lose or you win
// player selection is case insensitive




let computerSelection = computerPlay;

function oneRound(playerSelection, computerSelection) {
    const round = document.createElement('p');
    round.classList.add("round");

    if (playerSelection === "rock" && computerSelection === "Rock") {
        round.textContent = `Tie by rock, you = ${playerPoint} computer = ${computerPoint}`;
        container.appendChild(round);
    } else if (playerSelection === "paper" && computerSelection === "Paper") {
        round.textContent = `Tie by paper, you = ${playerPoint} computer = ${computerPoint}`;
        container.appendChild(round);
    } else if (playerSelection === "scissors" && computerSelection === "Scissors") {
        round.textContent = `Tie by Scissors, you = ${playerPoint} computer = ${computerPoint}`;
        container.appendChild(round);
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
        round.textContent = `Lose to paper, you = ${playerPoint} computer = ${++computerPoint}`;
        container.appendChild(round);
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        round.textContent = `Lose to scissors, you = ${playerPoint} computer = ${++computerPoint}`;
        container.appendChild(round);
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        round.textContent = `Lose to rock, you = ${playerPoint} computer = ${++computerPoint}`;
        container.appendChild(round);
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        round.textContent = `Win with rock, you = ${++playerPoint} computer = ${computerPoint}`;
        container.appendChild(round);
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        round.textContent = `Win with paper, you = ${++playerPoint} computer = ${computerPoint}`;
        container.appendChild(round);
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        round.textContent = `Win with scissors, you = ${++playerPoint} computer = ${computerPoint}`;
        container.appendChild(round);
    }
    container.appendChild(round);
}




const buttons = document.querySelectorAll('button');







    let playerSelection = "";

    buttons.forEach((button) => {
    
        button.addEventListener('click', () => {
            if (button.classList.contains("rock")) {
                playerSelection = "rock";
                const playermover = document.createElement('p');
                playermover.classList.toggle("playermover");
                playermover.textContent = "rock";
                container.appendChild(playermover);
                console.log(playerSelection === "rock");
                
                if (playerSelection === "rock") {
                    console.log(computerSelection());
                    console.log(oneRound(playerSelection, computerSelection));
                }
            } else if (button.classList.contains("paper")) {
                playerSelection = "paper";
                const playermovep = document.createElement('p');
                playermovep.classList.toggle("playermovep");
                playermovep.textContent = "paper";
                container.appendChild(playermovep);
                
                if (playerSelection === "paper") {
                    computerSelection();
                    oneRound(playerSelection, computerSelection);
                }
            } else if (button.classList.contains("scissors")) {
                playerSelection = "scissors";
                const playermoves = document.createElement('p');
                playermoves.classList.toggle("playermoves");
                playermoves.textContent = "scissors";
                container.appendChild(playermoves);
                
                if (playerSelection === "scissors") {
                    computerSelection();
                    oneRound(playerSelection, computerSelection);
                }
            }
        });
    
    });

    


//create new function game(). call playRound inside this
// to play a five round game that keeps score

//stop game from looping computer randomised rock paper scissors 
//game stops looping once prompt added to for loop, i.e. line 73

let playerPoint = 0;
let computerPoint = 0;

/*function game() {
    

    for (let i=0; i < 5; i++) {
       
        playerSelection = prompt("Choose Rock, Paper or Scissors!", "");
        computerSelection = computerPlay();
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

console.log(game());*/

// create button that returns name on button in console




