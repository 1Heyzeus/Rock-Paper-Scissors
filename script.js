let computerScore = 0;
let playerScore = 0;
const rockButton = document.getElementById('rock')
const paperButton = document.getElementById('paper')
const scissorButton = document.getElementById('scissors')

function getComputerSelection() { 
const choiceArray = ['rock', 'paper', 'scissors'];
return choiceArray[(Math.floor(Math.random()*choiceArray.length))];
}


function playRound(playerSelection) {
   let computerSelection = getComputerSelection()
   let result = ""

   if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
       (playerSelection == 'scissors' && computerSelection == 'paper') ||
       (playerSelection == 'paper' && computerSelection == 'rock')) {
       
       playerScore += 1
       result = ('You win! ' + playerSelection + ' beats ' + computerSelection
           + '!' + " Player score: " + playerScore + " Computer score: " + computerScore)

       if (playerScore == 5) {
           result += ' You won the game! Reload the page to play again'
       }
   }
   else if (playerSelection == computerSelection) {
       result = ('It\'s a tie. You both chose ' + playerSelection
           + '!' + " Player score: " + playerScore + " Computer score: " + computerScore)
   }
   else {
       computerScore += 1
       result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
       + '!' + " Player score: " + playerScore + " Computer score: " + computerScore)

       if (computerScore == 5) {
           result += ' I won the game! Reload the page to play again'
       }
   }

   document.getElementById('Results').textContent = result
   return
}

   rockButton.addEventListener('click', e => {
      playRound(rockButton.value)
   })
   paperButton.addEventListener('click', e => {
      playRound(paperButton.value)
   })
   scissorButton.addEventListener('click', e => {
      playRound(scissorButton.value)
   })




   

/*repeat playRound 5 times and keep score of winner
function game(){
   for (i=0;i<=4;i++){ 
        let playerSelection = window.prompt().toLowerCase();
        let computerSelection = getComputerSelection();
        console.log(playRound(playerSelection, computerSelection));
        
   }
} 

game()
*/
