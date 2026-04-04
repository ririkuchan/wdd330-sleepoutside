import { getLocalStorage } from './utils-storage.mjs';

export default class CheckoutProcess {
  constructor(listKey) {
    this.listKey = listKey;
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
}