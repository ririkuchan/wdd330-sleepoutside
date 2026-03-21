import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  // 1. 現在のカートの中身をlocalStorageから取得する
  // もし中身が空（null）なら、新しい空の配列 [] を作成する
  const cartItems = getLocalStorage("so-cart") || [];

  // 2. 取得した配列に、新しく選んだ商品（product）を追加する
  cartItems.push(product);

  // 3. 商品が追加された新しい配列を、再びlocalStorageに保存する
  setLocalStorage("so-cart", cartItems);
}

// カートボタンが押された時のイベントハンドラー
async function addToCartHandler(e) {
  // ボタンのデータ属性 (data-id) から商品IDを取得し、データを取ってくる
  const product = await dataSource.findProductById(e.target.dataset.id);
  
  // 取得した商品をカートに追加する関数を呼ぶ
  addProductToCart(product);
}

// 「Add to Cart」ボタンにクリックイベントリスナーを登録
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);