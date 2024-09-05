let numbers = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

let container = document.getElementById('stripeContainer');

numbers.forEach((num, index) => {
    let stripe = document.createElement('div');
    
    stripe.style.width = '100%';
    stripe.style.height = '35px';
    stripe.style.textAlign = 'center';
    stripe.style.lineHeight = '35px';
    stripe.style.fontSize = '20px';
    stripe.style.color = 'white';
    stripe.style.marginBottom = '25px';
    
    if (index % 2 === 0) {
        stripe.style.backgroundColor = 'red';
    } else {
        stripe.style.backgroundColor = 'green';
    }
    
    stripe.innerText = num;
    
    container.appendChild(stripe);
});
