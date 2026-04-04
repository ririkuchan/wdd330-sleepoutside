import { loadHeaderFooter } from './utils.mjs';
import { getLocalStorage } from './utils-storage.mjs';

loadHeaderFooter();

function cartItemTemplate(item) {
  return `<li class="cart-card divider">
    <img src="${item.Images?.PrimaryMedium || item.Image}" alt="${item.Name}" />
    <div class="cart-card__content">
      <h3>${item.Name}</h3>
      <p>$${Number(item.FinalPrice).toFixed(2)}</p>
    </div>
  </li>`;
}

function renderCartContents() {
  const cartItems = getLocalStorage('so-cart') || [];
  const productList = document.querySelector('.product-list');

  productList.innerHTML = cartItems.map(cartItemTemplate).join('');

  const total = cartItems.reduce(
    (sum, item) => sum + Number(item.FinalPrice),
    0
  );

  document.querySelector('#cart-total').textContent = total.toFixed(2);
}

renderCartContents();