let robotTalking = new Audio("./sounds/retro-robot-sound.wav");
robotTalking.play();


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
     
  }


let playerSelection = '';
let computerSelection = '';
let selectionButtons = document.querySelectorAll('.selectBtn');
let pressAudio = new Audio("./sounds/selectSound.wav");
let winAudio = new Audio("./sounds/win.wav");
let lostAudio = new Audio("./sounds/game-over.wav");




  selectionButtons.forEach(btn => {

      btn.addEventListener('click', function () {
        pressAudio.currentTime = 0;
        pressAudio.play();
        playerSelection = btn.id;
        computerSelection = getComputerChoice();
        showComputerChoice(computerSelection);
        playRound(playerSelection, computerSelection);
        countScore(roundWinner);
        declareWinner(playerScore, computerScore);

        selectionButtons.forEach(btn => {btn.classList.remove('selectedBtn');});
        this.classList.add('selectedBtn');
      });
      
  });


  let playAgain = document.getElementById('playAgain');

  playAgain.addEventListener('click', function () {
      location.reload();
  });


  let robotScreen = document.getElementById('robot-screen');
  let screenText = document.getElementById('screen-text');
  let screenImg = document.querySelectorAll('.screen-img');
  let rockImg = document.getElementById('rock-img');
  let paperImg = document.getElementById('paper-img');
  let scissorsImg = document.getElementById('scissors-img');

  let firstMsg = document.getElementById('first-line');
  let secondMsg = document.getElementById('second-line');
  let selectionButtonsDiv = document.getElementById('selectionButtons');


function showComputerChoice(computerSelection) {

    screenText.style.display = 'none';
    screenImg.forEach(img => {img.style.display = 'none';});

    if (computerSelection === 'rock') { rockImg.style.display ='block';
    } else if (computerSelection === 'paper') { paperImg.style.display ='block'
    } else if (computerSelection === 'scissors') { scissorsImg.style.display ='block' } 
}
  

function countScore(roundWinner) {
    if (roundWinner === 'player') { playerScore++ ;
                                    firstMsg.innerText = `You won <${playerSelection}> beats <${computerSelection}>`; 
                                    
    } else if (roundWinner === 'computer') { computerScore++;                                            
                                             firstMsg.innerText = `I won <${computerSelection}> beats <${playerSelection}>`;
                                             
    } else if (roundWinner === 'tie') { firstMsg.innerText = "it's a tie this time.";}

    secondMsg.innerText = `Score: Robot<${computerScore}>  Human<${playerScore}>`; 
}

 
function declareWinner(playerScore, computerScore) {
   
    if (computerScore === 5 || playerScore === 5) {

        secondMsg.innerText = 'click below to play again' ;
        selectionButtonsDiv.remove();
        playAgain.style.display = 'block';
        screenImg.forEach(img => { img.style.display = 'none'});
        screenText.style.display = 'block';
        

        if (computerScore === 5) { firstMsg.innerText = 'game over, I won.' ;
                                   screenText.innerText = 'winner: <rps-22>' ;
                                   lostAudio.play();
        } else if (playerScore === 5) { firstMsg.innerText = 'you won! congratulations.' ;
                                        screenText.innerText = 'winner: <human>' ;
                                        winAudio.play();}
    }

}











  




