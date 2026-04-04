import{r as c,l as i,g as o}from"./utils-DEpf1XBZ.js";import{P as n}from"./ProductData-Bub99VY-.js";function l(t){return`<li class="product-card">
    <a href="../product_pages/index.html?product=${t.Id}">
      <img src="${t.Image}" alt="${t.Name}">
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      <p class="product-card__price">$${t.FinalPrice}</p>
    </a>
  </li>`}class d{constructor(e,a,s){this.category=e,this.dataSource=a,this.listElement=s}async init(){const e=await this.dataSource.getData(this.category);this.renderList(e);const a=document.querySelector(".title");a&&(a.textContent=this.category.charAt(0).toUpperCase()+this.category.slice(1))}renderList(e){c(l,this.listElement,e)}}i();const r=o("category"),m=new n(r),h=document.querySelector(".product-list"),u=new d(r,m,h);u.init();
