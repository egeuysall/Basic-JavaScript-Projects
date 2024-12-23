let randomNumber = 0;
let condition = "";
let guess = "";

function createNumber() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

function oddity() {
    if (randomNumber % 2 === 0) {
        condition = "even";
    } else {
        condition = "odd";
    }
    return condition;
}

function main() {
    while (true) {
        createNumber();
        oddity();
        guess = prompt("Please enter your guess: ");
        guess = guess.toLowerCase();

        if (condition === "even" && guess === "even" ||
            condition === "odd" && guess === "odd") {
            alert(`You won! It is ${guess}`);
        } else {
            alert(`You lost! The number is ${condition}`);
        }
    }
    return guess;
}

