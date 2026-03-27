// セレクタを使って要素を取得するヘルパー
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

// LocalStorage からデータを取得する
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// LocalStorage にデータを保存する
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// URLからパラメータを取得する (例: ?product=880RR)
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(param);
}

// カート内のアイテム数をカウントし、ヘッダーのバッジを更新する
export function updateCartCount() {
  const cartItems = getLocalStorage("so-cart") || [];
  const count = cartItems.length;
  const cartCountElement = document.getElementById("cart-count");
  if (cartCountElement) {
    cartCountElement.textContent = count;
  }
}

// --- Team Activity 03: Dynamic header and footer ---

// 1つのテンプレートをレンダリングする共通関数
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = ""; // 既存の中身をクリア
  parentElement.insertAdjacentHTML("afterbegin", template);
  
  // コールバックが指定されていれば実行する
  if (callback) {
    callback(data);
  }
}

// 外部HTMLファイルをテキストとして取得する非同期関数
async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

// ヘッダーとフッターを読み込んで各ページに挿入する
export async function loadHeaderFooter() {
  // パスの先頭に / をつけることで、どの階層からでも src/public/partials/ を参照可能にする
  const headerTemplate = await loadTemplate("/partials/header.html");
  const footerTemplate = await loadTemplate("/partials/footer.html");

  // HTML内の挿入先要素（プレースホルダー）を取得
  const headerElement = document.querySelector("#main-header");
  const footerElement = document.querySelector("#main-footer");

  // 作成した関数を使ってレンダリングを実行
  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);

  // ヘッダーが読み込まれた後にカートの数字を最新にする
  updateCartCount();
}