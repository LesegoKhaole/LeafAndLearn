let listCart = [];
function checkCart() {
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='));
    if(cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}
checkCart();
addCartToHTML();

function addCartToHTML() {
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let discountDisplay = document.querySelector('.discountDisplay');
    let totalQuantity = 0;
    let totalPrice = 0;
    let discount = 0;

    if(listCart) {
        listCart.forEach(product => {
            if(product) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">R${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">R${(product.price * product.quantity).toFixed(2)}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity += product.quantity;
                totalPrice += (product.price * product.quantity);
            }
        });
    }

    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = 'R' + totalPrice.toFixed(2);

    // Calculate discount
    if (totalQuantity === 0) {
        discount = 0;
        
    } else if (totalQuantity === 1) {
        discount = 0;
        
    }else if (totalQuantity === 2) {
        discount = 5;
        
    } else if (totalQuantity === 3) {
        discount = 10;
    } else {
        discount = 15;
    }
    
    // Display discount
    discountDisplay.innerText = `${discount}%`;
    
    // Apply discount to total price
    totalPrice *= (1 - discount / 100);
    totalPriceHTML.innerText = 'R' + totalPrice.toFixed(2);
}