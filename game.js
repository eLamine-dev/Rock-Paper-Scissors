
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



// let playerWins = `You win! ${playerSelection} beats ${computerSelection}`;
// let computerWins = `You loose! ${computerSelection} beats ${playerSelection}`;
// let tie = "Tie, lets play again";

let roundWinner = "";


function playRound(playerSelection, computerSelection) {

    
    
    if (playerSelection === 'rock' && computerSelection === 'rock' || 
        playerSelection === 'paper' &&  computerSelection === 'paper' || 
        playerSelection === 'scissors' && computerSelection === 'scissors'){ 
            
            roundWinner = 'tie';

        } else if (playerSelection === 'rock' && computerSelection === 'scissors' || 
             playerSelection === 'scissors' &&  computerSelection === 'paper' || 
             playerSelection === 'paper' && computerSelection === 'rock') { 

                roundWinner = 'player';

        } else if (playerSelection === 'scissors' && computerSelection === 'rock' || 
             playerSelection === 'paper' &&  computerSelection === 'scissors' || 
             playerSelection === 'rock' && computerSelection === 'paper') {
                
                roundWinner = 'computer';
        
        } else { return "there must be some bug"}
              
  }



function game(){

    let computerScore = 0;
    let playerScore = 0;
    let ties = 0;


    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt().toLowerCase();
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
        if (roundWinner === 'player') { playerScore++ 
        } else if (roundWinner === 'computer') { computerScore++ 
        } else if (roundWinner === 'tie') { ties++
        } else { console.loge('something is not working')}

        
        console.log(playerSelection);
        console.log(computerSelection); 
        console.log(playerScore);
        console.log(computerScore);       
    }

    if (playerScore > computerScore) {
        console.log("you won!")
    } else if (computerScore > playerScore) {
        console.log('you lost')
    } else if (computerScore === playerScore) {
        console.log("It's a tie")
    }  
}
 





//   console.log(playerSelection);
//   console.log(computerSelection);
//   console.log(playRound(playerSelection, computerSelection));




  




