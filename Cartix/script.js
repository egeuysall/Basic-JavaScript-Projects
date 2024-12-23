// Define variables
let currentQuantity = 0;
const maximumQuantity = 10;
const leastQuantity = 0;

// Function to add products to the cart
function addToCart(amount) {
    if (currentQuantity >= maximumQuantity) {
        alert("You can't check more than 10 products!");
    } else {
        currentQuantity += amount;
    }
}

// Function to remove 1 product from the cart
function removeOne() {
    if (currentQuantity <= leastQuantity) {
        alert("There Is No Item to Remove from Cart!");
    } else {
        currentQuantity -= 1;
    }
}

// Function to remove all products from the cart
function removeAll() {
    if (currentQuantity === leastQuantity) {
        alert("The cart is already free!");
    } else {
        currentQuantity = leastQuantity;
    }
}

// Assign event listeners to buttons
document.querySelector('.add-one').addEventListener('click', () => addToCart(1));
document.querySelector('.add-two').addEventListener('click', () => addToCart(2));
document.querySelector('.add-three').addEventListener('click', () => addToCart(3));
document.querySelector('.delete-one').addEventListener('click', removeOne);
document.querySelector('.delete-all').addEventListener('click', removeAll);