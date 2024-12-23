function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Get all buttons
const buttons = document.querySelectorAll('.color-button');
// Get the RGB paragraph element
const rgbDisplay = document.getElementById('rgb');

// Generate random colors for the buttons
let targetColor = getRandomColor();
rgbDisplay.textContent = `${targetColor}`;

// Set random background colors to the buttons
buttons.forEach((button) => {
    button.style.backgroundColor = getRandomColor();
});

// Choose a random button to set as the correct answer
const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
randomButton.style.backgroundColor = targetColor;

// Add event listeners to buttons for the color guess
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.style.backgroundColor === targetColor) {
            alert('Correct! You guessed the color!');
        } else {
            alert('Wrong! Try again.');
        }
    });
});