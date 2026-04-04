import { loadHeaderFooter } from './utils.mjs';
import CheckoutProcess from './CheckoutProcess.mjs';

loadHeaderFooter();

const checkout = new CheckoutProcess('so-cart');

// ページ読み込み時にsubtotal表示
checkout.displaySubtotal();

// zip入力後に税・送料・合計を計算
const zipInput = document.querySelector('#zip');
zipInput.addEventListener('blur', () => {
  checkout.displayOrderTotals();
});

// submit処理
function handleCheckoutSubmit(event) {
  event.preventDefault();

  const form = document.querySelector('#checkout-form');

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  checkout.displayOrderTotals();
  alert('Checkout submitted successfully!');
}

document
  .querySelector('#checkout-form')
  .addEventListener('submit', handleCheckoutSubmit);