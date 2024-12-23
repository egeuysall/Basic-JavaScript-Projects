let point = 0;

function startGame() {
    let userAssistance = parseInt(prompt('Enter the points you want to play for: '));
    if (!isNaN(userAssistance)) {
        maxPoint(userAssistance);
    } else {
        alert("Please enter a valid number.");
    }
}

function maxPoint(userPoint) {
    if (userPoint > 10) {
        alert("You can't sign more than 10 points at once!");
    } else {
        point += userPoint;
        alert("Points updated: " + point);
    }
}