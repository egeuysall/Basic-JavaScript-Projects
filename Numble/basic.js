let computerNumber = 0;
let userGuess = 0;

function theNumber() {
  computerNumber = Math.floor(Math.random() * 11);
  return computerNumber;
}
while (true) {
    userGuess = prompt("Enter your guess: ");
    userGuess = parseInt(userGuess);
    theNumber();

    if (computerNumber === userGuess) {
    alert("You guessed correctly!");
    } else {
    alert("Try again! The correct number was " + computerNumber);
    }
}