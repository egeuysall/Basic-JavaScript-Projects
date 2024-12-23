if (!localStorage.getItem('products')) {
    let products = {
        basketball: 2095
    };
    products['delivery-time'] = '3 days';
    products.volleyball = 2100;

    console.log(products.basketball);

    products.basketball += 500;

    localStorage.setItem('products', JSON.stringify(products));
}

let storedProducts = JSON.parse(localStorage.getItem('products'));

console.log(`The updated price is $${storedProducts.basketball}!`);
console.log(storedProducts['delivery-time']);

function checkPrice() {
    if (storedProducts.basketball > storedProducts.volleyball) {
        alert(`The basketball is more expensive with the difference of $${storedProducts.basketball - storedProducts.volleyball}!`);
    } else if (storedProducts.volleyball > storedProducts.basketball) {
        alert(`The volleyball is more expensive with the difference of $${storedProducts.volleyball - storedProducts.basketball}!`);
    }
}