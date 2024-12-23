/*
// The DOM allows interaction with the structure and content of a web page through code. It connects HTML and JS, allowing them to work together!
// It replaces everything in the HTML and replaces it with the text 'Hello!'
document.body.innerHTML = 'Hello!'

// This changed the web page's title to 'Good DOM'
document.title = 'Good DOM'


console.log(document.title)
// This logs the title of the web page.

// This gets the entire body element of the webpage, revealing that HTML elements can be manipulated inside of JS.
console.log(document.body)

document.body.innerHTML = "<button> What're you doing? </button>"

// A method is an functio saved inside of an object!
*/

// It gets any specific element and displays it in the JS.
document.querySelector('button').innerHTML = 'Changed';
// Using innerHTML in this condition gives us the text inside of the button!

// It can also be done like this if the line is too long!
document.querySelector('button')
    .innerHTML = 'Changed';
// document.querySelector() will only change the first button but not others!

// We can control the classes like this!
// A comon practice is putting 'js-' when we use liek this for expressing that the class is used by JS.
const buttonElement = document.querySelector('.js-button')
    .innerHTML = "I don't want to be the second button!";
    // They can be saved to variables. The variable name should be ended with Element for identifying if it's a HTML element.