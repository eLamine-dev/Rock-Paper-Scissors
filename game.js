// const prompt = require("prompt-sync")({ sigint: true });


function getComputerChoice(){

let n =  Math.floor(Math.random() * 3);

if (n === 0) { 
    return 'rock';
} else if (n === 1) {
    return 'paper';
} else if (n === 2) {
    return 'scissors';
} else { return 'something is wrong';}
};


let roundWinner = "";
let computerScore = 0;
let playerScore = 0;

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
        
    } else { return "there must be some bug" }  
    
    return roundWinner;
  }




  let selectionButtons = document.querySelectorAll('.selectBtn');

  selectionButtons.forEach(btn => {

      btn.addEventListener('click', function () {
        let playerSelection = btn.id
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        countScore(roundWinner);
        declareWinner(playerScore, computerScore);

        console.log(playerSelection, computerSelection, roundWinner );
      });
      
  });

  let roundWinnerText = document.getElementById('roundWinner');
  let gameWinnerText = document.getElementById('gameWinner');
  let selectionButtonsDiv = document.getElementById('selectionButtons');


  
function countScore(roundWinner) {
    if (roundWinner === 'player') { playerScore++ ; roundWinnerText.innerText = 'you won this round!';
                } else if (roundWinner === 'computer') { computerScore++; roundWinnerText.innerText = 'computer won this round'
                } else if (roundWinner === 'tie') { ties++ ,roundWinnerText.innerText = 'no one won this round'
                } 
    console.log(computerScore, playerScore);
    return (computerScore, playerScore)
}

 
function declareWinner(computerScore,playerScore) {

    let gameWinner = ""
    if (computerScore === 5) { gameWinner = "computer" ; roundWinnerText.innerText = 'game over the computer won'
    }else if (playerScore === 5) { gameWinner = "player" ; roundWinnerText.innerText = 'you won! congrats'}

    if (gameWinner){

        selectionButtonsDiv.remove();

    }

}



// function game(){

//     let computerScore = 0;
//     let playerScore = 0;
//     let ties = 0;


//     for (let i = 0; i < 5; i++) {

//         const playerSelection = prompt().toLowerCase();
//         const computerSelection = getComputerChoice();

//         playRound(playerSelection, computerSelection);
//         if (roundWinner === 'player') { playerScore++ 
//         } else if (roundWinner === 'computer') { computerScore++ 
//         } else if (roundWinner === 'tie') { ties++
//         } else { console.loge('something is not working')}
  
//         console.log(playerSelection);
//         console.log(computerSelection); 
//         console.log(playerScore);
//         console.log(computerScore);       
//     }

//     if (playerScore > computerScore) {
//         console.log("you won!")
//     } else if (computerScore > playerScore) {
//         console.log("you lost")
//     } else if (computerScore === playerScore) {
//         console.log("It's a tie")
//     }  
// }
 

// game();



  




