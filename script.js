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
    computermove.textContent = "Computer: " + allrps[hand - 1];
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
                playermover.textContent = "You: Rock";
                container.appendChild(playermover);
                playerSelection === "rock";
                
                if (playerSelection === "rock") {
                    oneRound(playerSelection, computerSelection());
                }
            } else if (button.classList.contains("paper")) {
                playerSelection = "paper";
                const playermovep = document.createElement('p');
                playermovep.classList.toggle("playermovep");
                playermovep.textContent = "You: Paper";
                container.appendChild(playermovep);
                
                if (playerSelection === "paper") {
                    oneRound(playerSelection, computerSelection());
                }
            } else if (button.classList.contains("scissors")) {
                playerSelection = "scissors";
                const playermoves = document.createElement('p');
                playermoves.classList.toggle("playermoves");
                playermoves.textContent = "You: Scissors";
                container.appendChild(playermoves);
                
                if (playerSelection === "scissors") {
                    oneRound(playerSelection, computerSelection());
                }
            }
            game();
        });

    
    });

    


//create new function game(). call playRound inside this
// to play a five round game that keeps score

//stop game from looping computer randomised rock paper scissors 
//game stops looping once prompt added to for loop, i.e. line 73



let playerPoint = 0
let computerPoint = 0;
let gamePoint = 0;
function game() {
    
    const gamedecision = document.createElement('p');
    gamedecision.classList.toggle("gamedecision");

    if (playerPoint >= 0 || computerPoint >= 0) {
    gamePoint += 1;
        if (gamePoint === 5 && playerPoint > computerPoint) {
            gamedecision.textContent = "You Win!";
            container.appendChild(gamedecision);
        } else if (gamePoint === 5 && playerPoint < computerPoint) {
            gamedecision.textContent = "You Lose!";
            container.appendChild(gamedecision);
        } else if (gamePoint === 5 && playerPoint === computerPoint) {
            gamedecision.textContent = "You Tie!";
        }
    }

}


// create button that returns name on button in console







/* last working on trying to get the oneRound function to 
work and print on screen. Things I have checked are: 
- both computer and player selection. They are working
- may be an issue with actual text content printing
- may need to try converting all three to console log form
again as the real problem in console log form was random
was not working. Now got it to work while I was changing
the dom manipulation but it wasnt due to the dom manipulation.
It was due to the function not being properly assigned
to the variable.
- e.g. meant to be const a = b; instead of const a = b();
- and then when calling call with a() instead of a;
- might be that change in assigning affected the 
oneRound function, could also try to move
around the computerSelection variable
After this will be having a total occur after five games. */

// 22nd May (day after): The issue was actually calling
// oneRound(playerSelection, computerSelection()) instead of
// oneRound(playerSelection, computerSelection) and then remove computerSelection()