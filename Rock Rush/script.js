function main(userChoice) {
    // Generate a random number for the computer's choice
    const randomNumber = Math.random();
    let computerChoice = "";
  
    if (randomNumber < 0.33) {
      computerChoice = "Rock";
    } else if (randomNumber >= 0.33 && randomNumber < 0.66) {
      computerChoice = "Paper";
    } else {
      computerChoice = "Scissors";
    }
  
    // Compare user choice with computer choice
    let result = "";
    if (userChoice === computerChoice) {
      result = "It's a tie! The computer also chose " + computerChoice + ".";
    } else if (
      (userChoice === "Rock" && computerChoice === "Scissors") ||
      (userChoice === "Paper" && computerChoice === "Rock") ||
      (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
      result = "You win! The computer chose " + computerChoice + ".";
    } else {
      result = "You lost! The computer chose " + computerChoice + ".";
    }
  
    // Display result in the <p> element with class 'result'
    const resultElement = document.querySelector(".result");
    resultElement.textContent = result;
  
    // Reset the game after 5 seconds
    resetGame();
  }
  
  // Function to reset the game after 5 seconds
  function resetGame() {
    setTimeout(() => {
      // Clear the result and reset game variables
      const resultElement = document.querySelector(".result");
      resultElement.textContent = '';  // Clear the displayed result
    }, 2000);  // Reset after 5 seconds
  }