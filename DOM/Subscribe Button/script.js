function subscribeAction() {
    const button = document.querySelector('.subscribe-btn');
    
    if (button.innerHTML === 'Subscribe') {
        button.innerHTML = 'Subscribed';
        button.style.backgroundColor = '#e0e0e0';
        button.style.color = '#2c2c2c'
    } else {
        button.innerHTML = 'Subscribe';
        button.style.backgroundColor = '#2c2c2c';
        button.style.color = '#e0e0e0'
    }
}