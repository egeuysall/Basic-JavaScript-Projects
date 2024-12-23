/*
let generalPoints = 5;
let userPoint = prompt("Enter your point: ");

function function1(points) {
    console.log("Hello World!");
    generalPoints += Number(points);
    alert(`Your point is ${generalPoints}`);
}

function1(userPoint);
*/

// To set a defualt value we can easily type function calculateTax(userInput, taxRate = 10, 8) ... and continue
function calculateTax(userInput, taxRate) {
    let taxResult = userInput * taxRate;
    let totalAmount = taxResult + userInput;
    let printedElement = document.getElementById('tax-result');
    
    // Check if the element exists to prevent errors
    if (printedElement) {
        printedElement.innerHTML = `The tax you need to pay is $${taxResult.toFixed(2)}, so the total amount will be $${totalAmount.toFixed(2)}`;
    } else {
        console.log(`The tax you need to pay is $${taxResult.toFixed(2)}, so the total amount will be $${totalAmount.toFixed(2)}`);
    }
    
    return { taxResult, totalAmount };
}

// Prompt user input
let taxAmount = Number(prompt("Please enter the price: "));
let taxRate = Number(prompt("Please enter the tax percentage: ")) * 0.01;

// Call the function
calculateTax(taxAmount, taxRate);