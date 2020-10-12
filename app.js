/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game Values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate input
    if(isNaN(guess) || guess < min || guess > max){
        // Sets the message function to a green color and passes in the min and max values
        setMessage(`Please enter a number between ${min} and ${max}` , 'red');
    }else if (guess === winningNum){
        // Check if player won
        // If the user won sets the game over function won to true and displays the below message.
        gameOver(true, `${winningNum} is correct! You win!`)

    }else {
        // Wrong number, take 1 away from the guesses.
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // Game over and the user lost
            gameOver(false, `${guess} is not correct. You lose! The correct number was ${winningNum}.`)
            guessInput.disabled = true;


        }else {
            // Game continues but the answer was wrong

            //Change border color
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

            // Tell user it was the wrong number
            setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left.`, 'red');

        }
    }

});

// Game Over function
function gameOver(won, msg) {
    let color;

    // Ternary operator to determine if the user has won then turn color green else red
    won === true ? color = 'green' : color ='red';

    // Disable input on the text field
    guessInput.disabled = true;

    //Change border color and text color
    guessInput.style.borderColor = color;
    message.style.color = color;

    // Let the user know the outcome
    setMessage(msg);

    // Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}


// Get winning number
function getRandomNum(min, max){
   return Math.floor(Math.random()*(max-min+1)+ min);
}


// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}