const cartItems = [];
const cartList = document.getElementById('cart-items');
const totalEl = document.getElementById('total');
const clearCartBtn = document.getElementById('clear-cart');

function addToCart(name, price) {
  cartItems.push({ name, price });
  renderCart();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  renderCart();
}

function renderCart() {
  cartList.innerHTML = '';
  let total = 0;

  cartItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.name} - R$ ${item.price.toFixed(2)}
      <button onclick="removeFromCart(${index})">Remover</button>
    `;
    cartList.appendChild(li);
    total += item.price;
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

clearCartBtn.addEventListener('click', () => {
  cartItems.length = 0;
  renderCart();
});
