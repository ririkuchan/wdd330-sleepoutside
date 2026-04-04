import { loadHeaderFooter } from './utils.mjs';
import { getLocalStorage } from './utils-storage.mjs';

// ヘッダーとフッターを読み込む
loadHeaderFooter();

// カートの中身を取得
function renderCartContents() {
  const cartItems = getLocalStorage('so-cart') || [];
  console.log(cartItems);
}

renderCartContents();