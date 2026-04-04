import { loadHeaderFooter } from './utils.mjs';
import CheckoutProcess from './CheckoutProcess.mjs';
import ExternalServices from './ExternalServices.mjs';

loadHeaderFooter();

const externalServices = new ExternalServices();
const checkout = new CheckoutProcess('so-cart', externalServices);

checkout.displaySubtotal();

const zipInput = document.querySelector('#zip');
zipInput.addEventListener('blur', () => {
  checkout.displayOrderTotals();
});

async function handleCheckoutSubmit(event) {
  event.preventDefault();

  const form = document.querySelector('#checkout-form');

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  try {
    const result = await checkout.checkout(form);
    console.log('Checkout response:', result);
    alert('Checkout submitted successfully!');
  } catch (error) {
    console.error(error);
    alert('There was a problem submitting your order.');
  }
}

document
  .querySelector('#checkout-form')
  .addEventListener('submit', handleCheckoutSubmit);