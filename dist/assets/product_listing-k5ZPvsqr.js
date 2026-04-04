import{r as s,l as c,g as i}from"./utils-DEpf1XBZ.js";import{P as o}from"./ProductData-Bub99VY-.js";function n(t){return`<li class="product-card">
    <a href="../product_pages/index.html?product=${t.Id}">
      <img src="${t.Image}" alt="${t.Name}">
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      <p class="product-card__price">$${t.FinalPrice}</p>
    </a>
  </li>`}class l{constructor(e,a,r){this.category=e,this.dataSource=a,this.listElement=r}async init(){const e=await this.dataSource.getData(this.category);this.renderList(e);const a=document.querySelector(".title");a&&(a.textContent=this.category.charAt(0).toUpperCase()+this.category.slice(1))}renderList(e){s(n,this.listElement,e)}}c();const d=i("category"),m=new o,h=document.querySelector(".product-list"),u=new l(d,m,h);u.init();
