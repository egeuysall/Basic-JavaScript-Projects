let gameStats = JSON.parse(localStorage.getItem('gameStats'));

if (gameStats === null) {
    gameStats = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}

function playGame(userInput) {
    const computerInput = getComputerChoice();

    if (userInput === "Rock") {
        if (computerInput === "Scissors") {
            gameStats.wins++;
            localStorage.setItem('gameStats', JSON.stringify(gameStats));
            return `You win! Rock beats Scissors.\n${showStats()}`;
        } else if (computerInput === "Paper") {
            gameStats.losses++;
            localStorage.setItem('gameStats', JSON.stringify(gameStats));
            return `You lose! Paper beats Rock.\n${showStats()}`;
        } else {
            gameStats.ties++;
            localStorage.setItem('gameStats', JSON.stringify(gameStats));
            return `It's a tie! Both chose Rock.\n${showStats()}`;
        }
    } else if (userInput === "Paper") {
        if (computerInput === "Rock") {
            gameStats.wins++;
            localStorage.setItem('gameStats', JSON.stringify(gameStats));
            return `You win! Paper beats Rock.\n${showStats()}`;
        } else if (computerInput === "Scissors") {
            gameStats.losses++;
            localStorage.setItem('gameStats', JSON.stringify(gameStats));
            return `You lose! Scissors beats Paper.\n${showStats()}`;
        } else {
            gameStats.ties++;
            localStorage.setItem('gameStats', JSON.stringify(gameStats));
            return `It's a tie! Both chose Paper.\n${showStats()}`;
        }
    } else if (userInput === "Scissors") {
        if (computerInput === "Paper") {
            gameStats.wins++;
            localStorage.setItem('gameStats', JSON.stringify(gameStats));
            return `You win! Scissors beats Paper.\n${showStats()}`;
        } else if (computerInput === "Rock") {
            gameStats.losses++;
            localStorage.setItem('gameStats', JSON.stringify(gameStats));
            return `You lose! Rock beats Scissors.\n${showStats()}`;
        } else {
            gameStats.ties++;
            localStorage.setItem('gameStats', JSON.stringify(gameStats));
            return `It's a tie! Both chose Scissors.\n${showStats()}`;
        }
    } else if (userInput === "Reset") {
        resetStats();
        return "Game reset! Stats cleared. Play again!";
    } else {
        return "Invalid input! Please choose Rock, Paper, Scissors, or Reset.";
    }
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function showStats() {
    return `Wins: ${gameStats.wins}, Losses: ${gameStats.losses}, Ties: ${gameStats.ties}`;
}

function resetStats() {
    gameStats.wins = 0;
    gameStats.losses = 0;
    gameStats.ties = 0;
    localStorage.removeItem('gameStats');
}