(() => {
  const products = Array.isArray(window.MARKET_PRODUCTS) ? window.MARKET_PRODUCTS : [];
  const money = value => new Intl.NumberFormat("es-CO", {style:"currency", currency:"COP", maximumFractionDigits:0}).format(value || 0);
  const $ = id => document.getElementById(id);
  let activeCategory = document.body.dataset.category || "Todos";
  let searchTerm = "";
  let cart = load("mn_cart", []);
  let favorites = load("mn_favorites", []);
  function load(key, fallback) { try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; } catch (_) { return fallback; } }
  function save(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) {} }
  function escapeHtml(value) { return String(value ?? "").replace(/[&<>"']/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char])); }
  function imageMarkup(product) { const path=(product.image||"").trim(); if(path) return `<img src="${escapeHtml(path)}" alt="${escapeHtml(product.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="product-placeholder" style="display:none">${escapeHtml(product.emoji||"♡")}</div>`; return `<div class="product-placeholder">${escapeHtml(product.emoji||"♡")}</div>`; }
  function renderProducts() {
    const grid=$("productGrid"); if(!grid) return;
    const onlyAccessories = document.body.dataset.page === "accessories";
    const visible=products.filter(p => (!onlyAccessories || p.category === "Accesorios") && (activeCategory === "Todos" || p.category === activeCategory) && `${p.name} ${p.category} ${p.description||""}`.toLowerCase().includes(searchTerm.toLowerCase()));
    grid.innerHTML=visible.length?visible.map(p=>`<article class="product-card"><div class="product-image">${imageMarkup(p)}<button class="favorite-button ${favorites.includes(p.id)?"is-favorite":""}" data-favorite="${escapeHtml(p.id)}" aria-label="${favorites.includes(p.id)?"Quitar de":"Agregar a"} favoritos">${favorites.includes(p.id)?"♥":"♡"}</button></div><p class="product-category">${escapeHtml(p.category)}</p><h3 class="product-name">${escapeHtml(p.name)}</h3><p class="product-description">${escapeHtml(p.description||"")}</p><div class="product-bottom"><strong class="product-price">${money(p.price)}</strong><button class="add-button" data-add="${escapeHtml(p.id)}">+ Agregar al carrito</button></div></article>`).join(""):`<div class="empty-cart" style="grid-column:1/-1"><span>🔎</span>No encontramos productos con esa búsqueda. Prueba con otra palabra.</div>`;
  }
  function findProduct(id){return products.find(p=>p.id===id)}
  function renderCart(){
    const countNode=$("cartCount"), drawerCount=$("drawerCount"), totalNode=$("cartTotal"), checkout=$("checkoutButton"), itemsNode=$("cartItems");
    const count=cart.reduce((sum,item)=>sum+item.quantity,0), total=cart.reduce((sum,item)=>sum+(findProduct(item.id)?.price||0)*item.quantity,0);
    if(countNode) countNode.textContent=count; if(drawerCount) drawerCount.textContent=`(${count})`; if(totalNode) totalNode.textContent=money(total); if(checkout) checkout.disabled=cart.length===0;
    if(!itemsNode)return;
    if(!cart.length){itemsNode.innerHTML=`<div class="empty-cart"><span>🛍️</span><strong>Tu carrito está esperando favoritos</strong><p>Agrega los productos que más te gusten y aparecerán aquí.</p></div>`;return}
    itemsNode.innerHTML=cart.map(item=>{const p=findProduct(item.id);if(!p)return"";return `<div class="cart-item"><div class="cart-thumb">${p.image?`<img src="${escapeHtml(p.image)}" alt="" onerror="this.style.display='none'">`:escapeHtml(p.emoji||"♡")}</div><div><h3>${escapeHtml(p.name)}</h3><div class="item-price">${money(p.price)}</div><div class="quantity-controls"><button data-qty="-1" data-id="${escapeHtml(p.id)}" aria-label="Restar una unidad">−</button><span>${item.quantity}</span><button data-qty="1" data-id="${escapeHtml(p.id)}" aria-label="Agregar una unidad">+</button></div></div><button class="remove-item" data-remove="${escapeHtml(p.id)}" aria-label="Quitar ${escapeHtml(p.name)}">×</button></div>`}).join("");
  }
  function persistCart(){save("mn_cart",cart);renderCart()}
  function toast(message){const node=$("toast");if(!node)return;node.textContent=message;node.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(()=>node.classList.remove("show"),2300)}
  function openCart(){const d=$("cartDrawer"),b=$("cartBackdrop");if(!d||!b)return;d.classList.add("open");b.classList.add("visible");d.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
  function closeCart(){const d=$("cartDrawer"),b=$("cartBackdrop");if(!d||!b)return;d.classList.remove("open");b.classList.remove("visible");d.setAttribute("aria-hidden","true");document.body.style.overflow=""}
  function addToCart(id){if(!findProduct(id))return;const item=cart.find(i=>i.id===id);if(item)item.quantity+=1;else cart.push({id,quantity:1});persistCart();toast("¡Agregado a tu carrito! ♡")}
  const grid=$("productGrid"); if(grid)grid.addEventListener("click",event=>{const add=event.target.closest("[data-add]");if(add){addToCart(add.dataset.add);return}const fav=event.target.closest("[data-favorite]");if(fav){const id=fav.dataset.favorite;favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];save("mn_favorites",favorites);renderProducts();toast(favorites.includes(id)?"Guardado en tus favoritos ♡":"Quitado de tus favoritos")}});
  const filters=$("categoryFilters"); if(filters)filters.addEventListener("click",event=>{const button=event.target.closest("[data-category]");if(!button)return;activeCategory=button.dataset.category;document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b===button));renderProducts()});
  const search=$("productSearch");if(search)search.addEventListener("input",event=>{searchTerm=event.target.value;renderProducts()});
  const cartItems=$("cartItems");if(cartItems)cartItems.addEventListener("click",event=>{const qty=event.target.closest("[data-qty]"),remove=event.target.closest("[data-remove]");if(qty){const item=cart.find(i=>i.id===qty.dataset.id);if(!item)return;item.quantity+=Number(qty.dataset.qty);if(item.quantity<=0)cart=cart.filter(i=>i.id!==qty.dataset.id);persistCart()}if(remove){cart=cart.filter(i=>i.id!==remove.dataset.remove);persistCart()}});
  if($("openCart"))$("openCart").addEventListener("click",openCart);if($("closeCart"))$("closeCart").addEventListener("click",closeCart);if($("cartBackdrop"))$("cartBackdrop").addEventListener("click",closeCart);if($("continueShopping"))$("continueShopping").addEventListener("click",closeCart);
  if($("menuToggle"))$("menuToggle").addEventListener("click",()=>{const nav=$("mainNav");if(!nav)return;const opened=nav.classList.toggle("open");$("menuToggle").setAttribute("aria-expanded",String(opened))});
  if($("mainNav"))$("mainNav").addEventListener("click",event=>{if(event.target.closest("a")){$("mainNav").classList.remove("open");$("menuToggle")?.setAttribute("aria-expanded","false")}});
  if($("checkoutButton"))$("checkoutButton").addEventListener("click",()=>{if(!cart.length)return;const lines=cart.map(item=>{const p=findProduct(item.id);return p?`• ${p.name} x ${item.quantity} — ${money(p.price*item.quantity)}`:""}).filter(Boolean);const total=cart.reduce((sum,item)=>sum+(findProduct(item.id)?.price||0)*item.quantity,0);const message=`Hola Market Nukemaleu 💛 Quiero consultar disponibilidad y hacer este pedido:\n\n${lines.join("\n")}\n\nTotal estimado de productos: ${money(total)}\n\n¿Me ayudan a confirmar disponibilidad, costo de envío y medios de pago?`;window.open(`https://wa.me/573052443283?text=${encodeURIComponent(message)}`,"_blank","noopener")});
  document.addEventListener("keydown",event=>{if(event.key==="Escape")closeCart()});const year=$("year");if(year)year.textContent=new Date().getFullYear();
  document.querySelectorAll(".main-nav a[data-page]").forEach(a=>{if(a.dataset.page===location.pathname.split("/").pop())a.setAttribute("aria-current","page")});
  const widgets=$("homeWidgets");
  if(widgets&&Array.isArray(window.MARKET_HOME_WIDGETS))widgets.innerHTML=window.MARKET_HOME_WIDGETS.map(w=>`<article class="home-widget ${escapeHtml(w.theme||"mint")}"><div><span class="eyebrow">${escapeHtml(w.eyebrow||"")}</span><h2>${escapeHtml(w.title||"")}</h2><p>${escapeHtml(w.description||"")}</p><a class="button button-outline" href="${escapeHtml(w.link||"tienda.html")}">${escapeHtml(w.button||"Ver más")} →</a></div><div class="widget-art" aria-hidden="true">${escapeHtml(w.emoji||"♡")}</div></article>`).join("");
  renderProducts();renderCart();
})();
