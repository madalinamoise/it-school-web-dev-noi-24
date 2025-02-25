function getCart() {
  return JSON.parse(localStorage.getItem('cart'));
}

function saveCart(cart) {
  return localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index);

  saveCart(cart);
  updateCartUI();
}

function updateCartUI() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - ${item.quantity} - ${item.price}`;

    const button = document.createElement('button');
    button.textContent = 'Remove element';

    button.onclick = function () {
      removeFromCart(index);
    };

    li.appendChild(button);

    cartItemsContainer.appendChild(li);
  });
}

function addToCart(name, price) {
  const cart = getCart();

  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1,
    });
  }

  saveCart(cart);
  updateCartUI();
}

localStorage.setItem('cart', JSON.stringify([]));

function setCookie(name, value) {
  const date = new Date();
  date.setUTCFullYear(2026);

  document.cookie =
    'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/Work/IT%20School/it-school-web-dev-noi-24/js-storage/;';
}

function updateCurrency() {
  const select = document.getElementById('currency');
  setCookie('currency', select.value);
  console.log(select.value);
}

//Homework:
//1. Add remove quantity
//2. Improve design(optional)
//3. Add discount in session storage
