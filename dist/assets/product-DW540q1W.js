import{g as o,l as d}from"./utils-DEpf1XBZ.js";import{P as e}from"./ProductData-Bub99VY-.js";import{g as s,s as c}from"./utils-storage-BKKPmlPP.js";function i(t){return`<section class="product-detail">
    <h3>${t.Brand.Name}</h3>
    <h2>${t.NameWithoutBrand}</h2>
    <img
      class="divider"
      src="${t.Images.PrimaryLarge}"
      alt="${t.Name}"
    />
    <p class="product-card__price">$${t.FinalPrice}</p>
    <p class="product__color">${t.Colors[0].ColorName}</p>
    <p class="product__description">${t.DescriptionHtmlSimple}</p>
    <div class="product-detail__add">
      <button id="addToCart" data-id="${t.Id}">Add to Cart</button>
    </div>
  </section>`}class n{constructor(a,r){this.productId=a,this.dataSource=r,this.product={}}async init(){this.product=await this.dataSource.findProductById(this.productId),this.renderProductDetails(),document.getElementById("addToCart").addEventListener("click",this.addToCart.bind(this))}addToCart(){let a=s("so-cart")||[];a.push(this.product),c("so-cart",a)}renderProductDetails(){const a=document.querySelector("#product-detail");a.innerHTML=i(this.product)}}const l=o("product"),u=new e,p=new n(l,u);d();p.init();
