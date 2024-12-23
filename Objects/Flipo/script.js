let scores = JSON.parse(localStorage.getItem('scores')) || { wins: 0, losses: 0 };

function playGame(userInput) {
    const moves = ['Heads', 'Tails'];
    const computerChoice = moves[Math.floor(Math.random() * moves.length)];
    let resultMessage;

    if (userInput === computerChoice) {
        scores.wins += 1;
        resultMessage = 'You win!';
    } else {
        scores.losses += 1;
        resultMessage = 'You lose!';
    }

    localStorage.setItem('scores', JSON.stringify(scores));

    alert(`Computer chose: ${computerChoice}\nYou chose: ${userInput}\n${resultMessage}\nWins: ${scores.wins}, Losses: ${scores.losses}`);
}

function resetGame() {
    scores = { wins: 0, losses: 0 };
    localStorage.setItem('scores', JSON.stringify(scores));
    alert('Your score has been reset!');
}