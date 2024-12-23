// Define an object named 'products'
const products = {
    name: "iPad", // Property: name
    price: 80     // Property: price
};

console.log(products.name); // Access the 'name' property using dot notation
products.name = "iPhone";  // Update the 'name' property
products.date = "11/24/2009"; // Add a new property 'date'

delete products.date; // Delete the 'date' property from the object

// Objects are commonly used to group related data and functions together for better code organization.

// Define another object named 'product2'
const product2 = {
    name: 'shirt', // Simple property
    ['delivery-time']: '1 day', // Bracket notation allows property names with special characters
    fun: function() { // Corrected function syntax; functions are methods when inside objects
        console.log('The function inside the object');
    },
    rating: { // Nested object
        bad: '1',      // Property of the nested object
        normal: '2',   // Property of the nested object
        good: '3'      // Property of the nested object
    }
};

// Access and invoke the 'fun' method
product2.fun(); // Outputs: The function inside the object --> It should be calld like this since it's a function! ()

// A unction inside of an object can be called as a method! Examples: Math.random() or console.log(). These are built-in objects!

// Access nested object properties using dot notation
console.log(product2.rating.bad); // Outputs: 1

// Access the 'name' property using dot notation
console.log(product2.name); // Outputs: shirt

// Dot Notation
// Access properties directly with dot notation
console.log(product2.name); // Outputs: shirt

// Bracket Notation 
// Access properties with special characters or dynamic keys
console.log(product2['delivery-time']); // Outputs: 1 day

// Attempting to access an undefined property returns 'undefined'
console.log(product2['nonexistent-property']); // Outputs: undefined

// Dot notation is preferred for most use cases, while bracket notation is useful for properties with special characters or dynamic keys.

console.log(JSON.stringify(product2))
// This is used for converting object to JSON which stands for JavaScript Object Notation and is more universeal especially for using across various programming languages.

const jsonData = JSON.stringify(product2)

const objectedJson = JSON.parse(jsonData)

console.log(objectedJson)

// Save data to local storage
localStorage.setItem('username', 'Ege'); // Stores the key 'username' with value 'Ege'

// Retrieve data from local storage
const username = localStorage.getItem('username'); // Retrieves the value associated with the key 'username'
console.log(username); // Outputs: Ege

// Remove a specific item from local storage
localStorage.removeItem('username'); // Removes the key 'username' and its value

// Clear all data from local storage
localStorage.clear(); // Deletes all key-value pairs in local storage

console.log('Hello!'.length)
console.log('Hello!'.toUpperCase)
console.log('Hello!'.toLowerCase))