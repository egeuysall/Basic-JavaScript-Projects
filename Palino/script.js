const userInput = document.querySelector('.user-number');
const checkButton = document.querySelector('.check-palindrome');
const resultText = document.querySelector('.input-result');

// Function to check if a number is a palindrome
function isPalindrome(num) {
  const str = num.toString(); // Convert the number to a string
  const reversedStr = str.split('').reverse().join(''); // Reverse the string
  return str === reversedStr; // Compare original and reversed strings
}

// Event listener for button click
checkButton.addEventListener('click', () => {
  const value = userInput.value;
  if (value) {
    const palindromeCheck = isPalindrome(value) ? 'is a palindrome.' : 'is not a palindrome.';
    resultText.textContent = `${value} ${palindromeCheck}`;
  } else {
    resultText.textContent = 'Please enter a number to check.';
  }
});