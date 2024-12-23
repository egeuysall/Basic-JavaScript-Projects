function calculateTotal() {
    const orderCost = document.querySelector('#orderCost');
    let cost = parseFloat(orderCost.value); // Convert value to a number
    
    if (isNaN(cost)) {
        alert("Please enter a valid number.");
        return;
    }

    if (cost < 40) {
        cost += 10; // Add 10 if cost is less than 40
    }
    
    const result = document.querySelector(".result");
    result.innerHTML = `You need to pay $${cost.toFixed(2)}`; // Ensure two decimal places
}

function handleCostKeydown(event) {
    if (event.key === 'Enter') {
         calculateTotal();
    } 
}