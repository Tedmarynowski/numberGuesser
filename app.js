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
    winningNum = 2,
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

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);

    // Validate input
    if(isNaN(guess)|| guess < min || guess > max){
        // Sets the message function to a green color and passes in the min and max values
        setMessage(`Please enter a number between ${min} and ${max}` , 'green');
    }

    // Check if player won
    if (guess === winningNum){
        // Disable input on the text field
        guessInput.disabled = true;
        //Change border color
        guessInput.style.borderColor = 'green';
        // Let user know that they won
        setMessage(`${winningNum} is correct! You win!`, 'green');
    }else {


    }



});


// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}