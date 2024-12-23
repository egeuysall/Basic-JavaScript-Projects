let userWeight;
let userHeight;

function getInput(promptMessage, isHeight = false) {
    let input = prompt(promptMessage);
    input = parseFloat(input);
    if (isNaN(input) || input <= 0) {
        alert("Please enter a valid value greater than zero.");
        return null;
    }
    return isHeight ? input / 100 : input;
}

function enterWeight() {
    userWeight = getInput("Enter Your Weight ");
    if (userWeight === null) return;
}

function enterHeight() {
    userHeight = getInput("Enter Your Height ", true);
    if (userHeight === null) return;
}

function getResults() {
    if (isNaN(userWeight) || isNaN(userHeight)) {
        alert("Please enter both weight and height before calculating the BMI.");
        return;
    }
    
    const bmiResult = userWeight / (userHeight * userHeight);
    let bmiCategory;

    if (bmiResult < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmiResult >= 18.5 && bmiResult < 24.9) {
        bmiCategory = "Normal weight";
    } else if (bmiResult >= 25 && bmiResult < 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obesity";
    }

    alert(`Your BMI is ${bmiResult.toFixed(2)}. Category: ${bmiCategory}`);
}