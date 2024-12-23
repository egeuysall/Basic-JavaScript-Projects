// Generate the initial random number between 0 and 10
let secretNumber = generateRandomNumber();
let attempts = 0;

const guessButton = document.querySelector('.guess-button');
const userGuessInput = document.querySelector('.user-guess');
const resultText = document.querySelector('.result');
const container = document.querySelector('.container'); // The container to animate

// When the button is clicked
guessButton.addEventListener('click', handleGuess);

// When the Enter key is pressed in the input
userGuessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleGuess(); // Call the handleGuess function when Enter is pressed
    }
});

function handleGuess() {
    const userGuess = parseInt(userGuessInput.value); // Get the user's guess and convert it to an integer

    // Check if the input is invalid (not a number or outside the range)
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
        resultText.textContent = "Please enter a number between 0 and 10.";
        container.classList.add('show-result'); // Trigger transition
        return;
    }

    attempts++;

    // Check if the guess is correct
    if (userGuess === secretNumber) {
        resultText.textContent = `Correct! The number was ${secretNumber}.`;
        container.classList.add('show-result'); // Trigger transition
        fadeOutText(); // Fade out the text but don't remove the div content
        resetGame(); // Reset the game if correct
    } else {
        if (attempts >= 3) {
            resultText.textContent = `Wrong! You've tried 3 times. The correct number was ${secretNumber}.`;
            container.classList.add('show-result'); // Trigger transition
            fadeOutText(); // Fade out the text when the user has used all attempts
            resetGame(); // Reset the game if the user tried 3 times
        } else {
            resultText.textContent = "Wrong! Try again.";
            container.classList.add('show-result'); // Trigger transition
        }
    }
}

// Function to generate a random number between 0 and 10
function generateRandomNumber() {
    return Math.floor(Math.random() * 11); // Returns a number between 0 and 10
}

// Function to fade out the result text
function fadeOutText() {
    setTimeout(function() {
        resultText.style.opacity = 0; // Fade out text by setting opacity to 0
    }, 1000); // Wait 1 second before starting the fade-out effect
}

// Reset the game (generate a new secret number and reset attempts)
function resetGame() {
    secretNumber = generateRandomNumber();
    attempts = 0;
    setTimeout(function() {
        container.classList.remove('show-result'); // Remove class after transition to reset height
        resultText.style.opacity = 1; // Reset text opacity back to visible
    }, 500); // Match the transition time to hide result and reset the container height
}