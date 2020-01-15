/*
GAME FUNCTION
- player must guess between min and max
- player gets certain amount of guesses
- notify player guesses remaining
- notofy player if correct or if lose
- let player choose to play again
*/

// Game Values
let min = 1, 
    max = 10, 
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function(e){
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})
// listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    
    // validate
    if( isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    // if they choose correctly
    if(guess === winningNum) {
        gameOver(true, `${winningNum} is correct - you win!`)
    } else {
        // incorrect choice
        guessesLeft -= 1;
        if(guessesLeft === 0) {
            gameOver(false, `${guess} is not correct. No guesses left :(`), 'red'
        } else {
            // game continues - answer wrong
            setMessage(`${guess} is not correct. Guesses left: ${guessesLeft}`, 'red')
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
        }
    }
});


// game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
     // disable input
     guessInput.disabled = true;
     //change border color
     guessInput.style.borderColor = color;
     // user won essage
     setMessage(msg, color)

     //PLAY AGAIN?
     guessBtn.value = "play again";
     guessBtn.className += 'play-again';
}

function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}