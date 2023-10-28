
//Randomly generating computer's choice
function getComputerSelection() { 
const choiceArray = ['rock', 'paper', 'scissors'];
return choiceArray[(Math.floor(Math.random()*choiceArray.length))];
}
let compWins = 0;
let humanWins = 0;

function score() {
    console.log(humanWins);
    console.log(compWins);
}

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        score(); 
        return `It's a tie! You both picked ${playerSelection}`;
     } else if (playerSelection === "rock" && computerSelection === "scissors") {
        humanWins++;
        score(); 
        return "You win! Rock beats Scissors";
     } else if (playerSelection === "paper" && computerSelection === "rock") {
        humanWins++;
        score(); 
        return "You win! Paper beats Rock";
     } else if (playerSelection === "scissors" && computerSelection === "paper") {
        humanWins++;
        score(); 
        return "You win! Scissors beats Paper";
     } else {
        compWins++;
        score(); 
        return `You lose! ${computerSelection} beats ${playerSelection}`;
     } 
   
  } 

function game(){
   for (i=0;i<=4;i++){//repeat playRound 5 times and keep score of winner
        let playerSelection = window.prompt().toLowerCase();
        let computerSelection = getComputerSelection();
        console.log(playRound(playerSelection, computerSelection));
        
   }
} 


game()

