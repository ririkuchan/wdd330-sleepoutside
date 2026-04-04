import{l as r,g as d}from"./utils-BsNA7PH-.js";import{E as i}from"./ExternalServices-BIQLllW0.js";import{g as o,s}from"./utils-storage-BKKPmlPP.js";function c(t){return`<section class="product-detail">
    <h3>${t.Brand.Name}</h3>
    <h2>${t.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${t.Images.PrimaryLarge}"
      alt="${t.Name}"
    />
    <p class="product-card__price">$${Number(t.FinalPrice).toFixed(2)}</p>
    <p class="product__description">
      ${t.DescriptionHtmlSimple||t.DescriptionHtml||""}
    </p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
    </div>
  </section>`}class n{constructor(a,e){this.productId=a,this.dataSource=e,this.product={}}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){let a=o("so-cart")||[];a.push(this.product),s("so-cart",a),alert("Item added to cart!")}renderProductDetails(){const a=document.querySelector("#product-detail");a.innerHTML=c(this.product)}}r();const l=d("product"),u=new i,m=new n(l,u);m.init();
