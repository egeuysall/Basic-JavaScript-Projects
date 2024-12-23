let userBooks = [];

function addBook() {
    let userInput = prompt("Enter Book");
    if (userInput) {
        userBooks.push(userInput);
        alert(`${userInput} was entered successfully!`);
    } else {
        alert("Enter a valid book");
    }
}

function seeBooks() {
    if (userBooks.length === 0) {
        alert("You don't have any books!");
    } else {
        alert(`You have: ${userBooks.join(", ")}`);
    }
}

function deleteBooks() {
    while (true) {
        if (userBooks.length === 0) {
            alert("You can't delete because you don't have any books!");
            break;
        } else {
            let userChoice = prompt("Are you sure you want to delete all the books? (Y/N)");
            userChoice = userChoice.toUpperCase();

            if (userChoice === 'Y') {
                userBooks = [];
                alert("All books are deleted successfully!");
                break;
            } else if (userChoice === 'N') {
                const bookCount = userBooks.length;
                alert(`Your ${bookCount} books are not deleted!`);
                break;
            } else {
                alert("Please enter a valid option!");
            }
        }
    }
}