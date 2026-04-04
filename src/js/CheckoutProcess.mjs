import { getLocalStorage } from './utils-storage.mjs';

function formDataToJSON(formElement) {
  const formData = new FormData(formElement);
  const convertedJSON = {};

  formData.forEach((value, key) => {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

export default class CheckoutProcess {
  constructor(listKey, externalServices) {
    this.listKey = listKey;
    this.externalServices = externalServices;
    this.cartItems = getLocalStorage(this.listKey) || [];
  }

  calculateSubtotal() {
    return this.cartItems.reduce(
      (sum, item) => sum + Number(item.FinalPrice),
      0
    );
  }

  calculateTax(subtotal) {
    return subtotal * 0.06;
  }

  calculateShipping(itemCount) {
    if (itemCount === 0) return 0;
    return 10 + (itemCount - 1) * 2;
  }

  calculateOrderTotal(subtotal, tax, shipping) {
    return subtotal + tax + shipping;
  }

  displaySubtotal() {
    const subtotal = this.calculateSubtotal();
    document.querySelector('#subtotal').textContent = subtotal.toFixed(2);
  }

  displayOrderTotals() {
    const subtotal = this.calculateSubtotal();
    const tax = this.calculateTax(subtotal);
    const shipping = this.calculateShipping(this.cartItems.length);
    const orderTotal = this.calculateOrderTotal(subtotal, tax, shipping);

    document.querySelector('#subtotal').textContent = subtotal.toFixed(2);
    document.querySelector('#tax').textContent = tax.toFixed(2);
    document.querySelector('#shipping').textContent = shipping.toFixed(2);
    document.querySelector('#orderTotal').textContent = orderTotal.toFixed(2);
  }

  packageItems(items) {
    return items.map((item) => ({
      id: item.Id,
      name: item.Name,
      price: item.FinalPrice,
      quantity: 1
    }));
  }

  async checkout(form) {
    const orderData = formDataToJSON(form);

    const subtotal = this.calculateSubtotal();
    const tax = this.calculateTax(subtotal);
    const shipping = this.calculateShipping(this.cartItems.length);
    const orderTotal = this.calculateOrderTotal(subtotal, tax, shipping);

    orderData.orderDate = new Date().toISOString();
    orderData.items = this.packageItems(this.cartItems);
    orderData.tax = tax.toFixed(2);
    orderData.shipping = shipping;
    orderData.orderTotal = orderTotal.toFixed(2);

    return await this.externalServices.checkout(orderData);
  }
}