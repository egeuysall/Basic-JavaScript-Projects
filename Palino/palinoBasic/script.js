function isPalindrome(num) {
  const str = num.toString();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

function main() {
  let userNumber = prompt("Enter a number");
  userNumber = parseInt(userNumber);

  if (isNaN(userNumber) || userNumber === "") {
      alert("Please enter a valid number!");
  } else {
      if (isPalindrome(userNumber)) {
          alert(`${userNumber} is a palindrome!`);
      } else {
          alert(`${userNumber} is not a palindrome.`);
      }
  }
}