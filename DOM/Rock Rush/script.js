// Initialize gameStats from localStorage or set default values
let gameStats = JSON.parse(localStorage.getItem('gameStats'));

if (gameStats === null) {
    gameStats = { wins: 0, losses: 0, ties: 0 };
}

// Function to handle the game logic
function playGame(userInput) {
    const computerInput = getComputerChoice();

    if (userInput === "Rock") {
        if (computerInput === "Scissors") {
            gameStats.wins++;
            currentCondition.textContent = "You win! Rock beats Scissors.";
        } else if (computerInput === "Paper") {
            gameStats.losses++;
            currentCondition.textContent = "You lose! Paper beats Rock.";
        } else {
            gameStats.ties++;
            currentCondition.textContent = "It's a tie! Both chose Rock.";
        }
    } else if (userInput === "Paper") {
        if (computerInput === "Rock") {
            gameStats.wins++;
            currentCondition.textContent = "You win! Paper beats Rock.";
        } else if (computerInput === "Scissors") {
            gameStats.losses++;
            currentCondition.textContent = "You lose! Scissors beats Paper.";
        } else {
            gameStats.ties++;
            currentCondition.textContent = "It's a tie! Both chose Paper.";
        }
    } else if (userInput === "Scissors") {
        if (computerInput === "Paper") {
            gameStats.wins++;
            currentCondition.textContent = "You win! Scissors beats Paper.";
        } else if (computerInput === "Rock") {
            gameStats.losses++;
            currentCondition.textContent = "You lose! Rock beats Scissors.";
        } else {
            gameStats.ties++;
            currentCondition.textContent = "It's a tie! Both chose Scissors.";
        }
    } else if (userInput === "Reset") {
        resetStats();
        return;
    } else {
        currentCondition.textContent = "Invalid input! Please choose Rock, Paper, Scissors, or Reset.";
        return;
    }

    // Save the updated stats to localStorage and update the DOM
    localStorage.setItem('gameStats', JSON.stringify(gameStats));
    updateDOM();
}

// Function to generate the computer's choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to reset the game statistics
function resetStats() {
    gameStats = { wins: 0, losses: 0, ties: 0 };
    localStorage.removeItem('gameStats');
    updateDOM();
    currentCondition.textContent = "Game reset! Play again.";
}

// Function to update the DOM elements with the current stats
function updateDOM() {
    wins.textContent = `Wins: ${gameStats.wins}`;
    losses.textContent = `Losses: ${gameStats.losses}`;
    ties.textContent = `Ties: ${gameStats.ties}`;
}

// Select DOM elements
const currentCondition = document.querySelector('#current-condition');
const wins = document.querySelector('#wins');
const losses = document.querySelector('#losses');
const ties = document.querySelector('#ties');

// Initialize the stats display when the page loads
updateDOM();