import{l as c}from"./utils-cg98RaIF.js";import{g as n}from"./utils-storage-BKKPmlPP.js";c();function i(t){var r;return`<li class="cart-card divider">
    <img src="${((r=t.Images)==null?void 0:r.PrimaryMedium)||t.Image}" alt="${t.Name}" />
    <div class="cart-card__content">
      <h3>${t.Name}</h3>
      <p>$${Number(t.FinalPrice).toFixed(2)}</p>
    </div>
  </li>`}function d(){const t=n("so-cart")||[],r=document.querySelector(".product-list");r.innerHTML=t.map(i).join("");const e=t.reduce((a,o)=>a+Number(o.FinalPrice),0);document.querySelector("#cart-total").textContent=e.toFixed(2)}d();
