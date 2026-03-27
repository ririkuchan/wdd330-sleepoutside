import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductDetails from "./ProductDetails.mjs";
import ProductData from "./ProductData.mjs";

/**
 * 1. 共通パーツ（ヘッダー・フッター）を読み込む
 * これを最初に実行することで、HTML内のプレースホルダーに
 * partials/header.html と footer.html が挿入されます。
 */
loadHeaderFooter();

/**
 * 2. 商品データの準備
 * URLパラメータから商品IDを取得し、データソースを初期化します。
 */
const dataSource = new ProductData("tents");
const productId = getParam("product");

/**
 * 3. 商品詳細クラスの初期化
 * 商品情報を取得してHTMLを描画します。
 */
const product = new ProductDetails(productId, dataSource);
product.init();