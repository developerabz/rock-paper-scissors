// creating function called computerPlay
// function random returns either rock, paper or scissors

function computerPlay(hand) {
    
    hand = Math.floor(Math.random()*3 + 1);
    console.log(hand);


    if (hand === 1) {
        return "Rock"
    } else if (hand === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

console.log(computerPlay());