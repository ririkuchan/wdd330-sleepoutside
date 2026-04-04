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
    console.log('Success:', result);

    checkout.clearCart();
    window.location.href = `${import.meta.env.BASE_URL}checkout/success.html`;
  } catch (error) {
    console.log('Error:', error);

    if (error.name === 'servicesError') {
      alert(JSON.stringify(error.message));
    } else {
      alert('Something went wrong. Please try again.');
    }
  }
}

document
  .querySelector('#checkout-form')
  .addEventListener('submit', handleCheckoutSubmit);