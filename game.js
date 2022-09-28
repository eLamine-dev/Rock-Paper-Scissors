
function getComputerChoice(){

let n =  Math.floor(Math.random() * 3);

if (n === 0) { 
    return 'rock';
} else if (n === 1) {
    return 'paper';
} else if (n === 2) {
    return 'scissors';
} else { return 'something is wrong';}
}

const playerSelection = prompt().toLowerCase();
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === 'rock' && computerSelection === 'rock' || 
        playerSelection === 'paper' &&  computerSelection === 'paper' || 
        playerSelection === 'scissors' && computerSelection === 'scissors'){ 
            return "Tie, lets play again";

        }else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
             playerSelection === 'scissors' &&  computerSelection === 'paper' || 
             playerSelection === 'paper' && computerSelection === 'rock') { 
                return `You win! ${playerSelection} beats ${computerSelection}`

        } else if (playerSelection === 'scissors' && computerSelection === 'rock' || 
             playerSelection === 'paper' &&  computerSelection === 'scissors' || 
             playerSelection === 'rock' && computerSelection === 'paper') {
                return `You loose! ${computerSelection} beats ${playerSelection}`;
        
        } else { return "there must be some bug"}
              
  }

 
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));


//   `You win! ${playerSelection} beats ${computerSelection}`;
//   { return `You loose! ${computerSelection} beats ${playerSelection}`;

  




