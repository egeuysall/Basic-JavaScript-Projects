function main(userInput) {
    let pointsElement = document.querySelector('#points');
    let points = parseInt(pointsElement.innerText.replace('Points: ', '') || 0); // Get the current points as a number

    if (userInput === "inc") {
        points++;
    } else if (userInput === "dec") {
        points--;
    }

    pointsElement.innerHTML = `Points: ${points}`; // Update the displayed points
}
