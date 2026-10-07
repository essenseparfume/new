const CART_KEY='essense_cart',FAV_KEY='essense_favorites';
const TELEGRAM_WEBAPP='https://script.google.com/macros/s/AKfycbzQPZCe_SEoM8B35SQL8Ynl53SdrOkJmyMFzo9HMTGUXrtkJjK8EnVFf6A3AD6lCas/exec';
let products=[];
let cart=JSON.parse(localStorage.getItem(CART_KEY)||'[]');
let favorites=JSON.parse(localStorage.getItem(FAV_KEY)||'[]');
const fallback=[
 {id:1,name:'Lacoste L.12.12 Blanc',brand:'LACOSTE',image:'images/IMG_4388.jpeg',price:699,oldPrice:999,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:2,name:'Scandal Pour Homme',brand:'JEAN PAUL GAULTIER',image:'images/IMG_4354.jpeg',price:799,oldPrice:1199,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:3,name:'Stronger With You Absolutely',brand:'EMPORIO ARMANI',image:'images/IMG_4212.jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:5,name:'Chanel Chance',brand:'CHANEL',image:'images/IMG_4349.jpeg',price:699,oldPrice:999,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:6,name:'Dior Sauvage',brand:'DIOR',image:'images/IMG_4386.jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:7,name:'Stronger With You Intensely',brand:'EMPORIO ARMANI',image:'images/IMG_4225(1).jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:8,name:'Azzaro Wanted',brand:'AZZARO',image:'images/IMG_4220.jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:9,name:'Stronger With You Sandalwood',brand:'EMPORIO ARMANI',image:'images/IMG_4336(2).jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:10,name:'Чоловічий аромат E',brand:'ESSENSE',image:'images/IMG_4342.jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:11,name:'Le Beau',brand:'JEAN PAUL GAULTIER',image:'images/IMG_4339.jpeg',price:799,oldPrice:1199,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:12,name:'Valentino Uomo',brand:'VALENTINO',image:'images/962D4FF2-1B88-4139-A26D-5123920C9D1D.jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:13,name:'Acqua di Giò',brand:'GIORGIO ARMANI',image:'images/IMG_4333.jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:14,name:'Scandal',brand:'JEAN PAUL GAULTIER',image:'images/IMG_4341(1).jpeg',price:799,oldPrice:1199,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:15,name:'Creed Aventus',brand:'CREED',image:'images/IMG_4338(1).jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:16,name:'Bleu de Chanel',brand:'CHANEL',image:'images/IMG_4227.jpeg',price:699,oldPrice:999,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:17,name:'1 Million',brand:'PACO RABANNE',image:'images/IMG_4337.jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:18,name:'Чоловічий аромат Blue',brand:'ESSENSE',image:'images/639FF558-4F74-43AA-AA2B-3D1D66D81A20.jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:19,name:'Чоловічий аромат Gold',brand:'ESSENSE',image:'images/EEDBFE7D-70C5-46CB-8033-BF35FD8D6C62.jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:20,name:'Valentino Uomo',brand:'VALENTINO',image:'images/IMG_4219.jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:21,name:'Le Male',brand:'JEAN PAUL GAULTIER',image:'images/IMG_4335(1).jpeg',price:799,oldPrice:1199,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:22,name:'Чоловічий аромат Black',brand:'ESSENSE',image:'images/IMG_4340.jpeg',price:749,oldPrice:1099,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']},
 {id:23,name:'Le Male Elixir',brand:'JEAN PAUL GAULTIER',image:'images/IMG_4334.jpeg',price:799,oldPrice:1199,description:'Популярний аромат для щоденного використання та особливих моментів.',notes:['Верхні ноти','Середні ноти','Базові ноти']}
];
const save=()=>{localStorage.setItem(CART_KEY,JSON.stringify(cart));localStorage.setItem(FAV_KEY,JSON.stringify(favorites));updateCounts()};
const updateCounts=()=>{const c=document.getElementById('cartCount'),f=document.getElementById('favCount');if(c)c.textContent=cart.reduce((s,x)=>s+x.qty,0);if(f)f.textContent=favorites.length};
const toast=m=>{const t=document.getElementById('toast');if(!t)return;t.textContent=m;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),2200)};
function toggleFav(id,e){if(e)e.stopPropagation();id=Number(id);favorites.includes(id)?favorites=favorites.filter(x=>x!==id):favorites.push(id);save();renderProducts();renderFavorites();renderProduct()}
function addToCart(id){const p=products.find(x=>x.id==id);if(!p)return;const item=cart.find(x=>x.id==id);item?item.qty++:cart.push({...p,qty:1});save();toast('Аромат додано до кошика')}
function buyNow(id){addToCart(id);location.href='cart.html?checkout=1'}
function hydrateCheckout(){const qs=new URLSearchParams(location.search);if(qs.get('checkout')!=='1')return;const id=Number(qs.get('id'));if(!id)return;const p=products.find(x=>x.id===id);if(!p)return;const existing=cart.find(x=>x.id===id);if(!existing)cart.push({...p,qty:1});save()}
function card(p){const active=favorites.includes(p.id);const discount=Math.round((1-p.price/p.oldPrice)*100);return `<article class="card"><a class="card-link" href="product.html?id=${p.id}" aria-label="${p.name}"><div class="card-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div><div class="card-body"><div class="brand">${p.brand}</div><h3>${p.name}</h3><div class="volume">100 ML</div><div class="price">${p.price} грн <span class="old">${p.oldPrice} грн</span></div></div></a><span class="best-badge">BESTSELLER</span><span class="sale-badge">- ${discount}%</span><button aria-label="Обране" class="heart ${active?'active':''}" onclick="toggleFav(${p.id},event)">${active?'♥':'♡'}</button></article>`}
function renderProducts(){const el=document.getElementById('products');if(!el)return;const q=(document.getElementById('searchInput')?.value||'').trim().toLowerCase();const brand=(document.getElementById('brandFilter')?.value||'all');const min=Number(document.getElementById('minPrice')?.value||0);const maxRaw=document.getElementById('maxPrice')?.value;const max=maxRaw===''||maxRaw==null?Infinity:Number(maxRaw);const sort=document.getElementById('sortFilter')?.value||'default';let list=products.filter(p=>`${p.name} ${p.brand}`.toLowerCase().includes(q)&&(brand==='all'||p.brand===brand)&&p.price>=min&&p.price<=max);if(sort==='cheap')list.sort((a,b)=>a.price-b.price);if(sort==='expensive')list.sort((a,b)=>b.price-a.price);if(sort==='az')list.sort((a,b)=>a.name.localeCompare(b.name,'uk'));el.innerHTML=list.length?list.map(card).join(''):`<div class="empty-search"><b>Нічого не знайдено</b><span>Зміни фільтри або спробуй іншу назву.</span></div>`;const info=document.getElementById('searchInfo');if(info)info.textContent=(q||brand!=='all'||min||max!==Infinity)?`Знайдено: ${list.length}`:''}
function renderFavorites(){const el=document.getElementById('favorites');if(el){const ps=products.filter(p=>favorites.includes(p.id));el.innerHTML=ps.length?ps.map(card).join(''):'<div class="empty-search"><b>Обране поки порожнє ♡</b><span>Натисни сердечко на ароматі, щоб додати його сюди.</span></div>'}}
function renderProduct(){const el=document.getElementById('productPage');if(!el)return;const id=Number(new URLSearchParams(location.search).get('id')),p=products.find(x=>x.id===id);if(!p){el.innerHTML='<h2>Аромат не знайдено</h2>';return}const active=favorites.includes(p.id);el.innerHTML=`<div class="product-photo"><button class="heart ${active?'active':''}" onclick="toggleFav(${p.id},event)">${active?'♥':'♡'}</button><img src="${p.image}" alt="${p.name}"></div><div class="product-info"><div class="brand">${p.brand}</div><h1>${p.name}</h1><div class="volume">100 ML</div><div class="price">${p.price} грн <span class="old">${p.oldPrice} грн</span></div><p class="desc">${p.description}</p><div class="notes">${p.notes.map(n=>`<span class="note">${n}</span>`).join('')}</div><button class="gold-btn" onclick="addToCart(${p.id})">Додати до кошика</button><button class="ghost-btn" type="button" onclick="buyNow(${p.id})">Перейти до оформлення</button></div>`}
function renderCart(){const el=document.getElementById('cart');if(!el)return;if(!cart.length){el.innerHTML='<div class="empty-cart"><h2>Ваш кошик порожній</h2><p>Додай аромат з каталогу, щоб оформити замовлення.</p><a class="gold-btn" href="index.html#catalog">ВСІ АРОМАТИ</a></div>';return}const total=cart.reduce((s,x)=>s+x.price*x.qty,0);el.innerHTML=`<div class="cart-list">${cart.map(x=>`<div class="cart-row"><div class="cart-item"><img src="${x.image}" alt=""><div><b>${x.name}</b><div class="volume">100 ML</div><div class="qty"><button onclick="changeQty(${x.id},-1)">−</button><span>${x.qty}</span><button onclick="changeQty(${x.id},1)">+</button><button class="remove" onclick="removeFromCart(${x.id})">Видалити</button></div></div></div><strong>${x.price*x.qty} грн</strong></div>`).join('')}</div><div class="cart-total">Разом: ${total} грн</div><div class="checkout"><h2>Оформлення замовлення</h2><p>Залиш ім'я та номер — замовлення прийде нам у Telegram.</p><form id="orderForm" onsubmit="submitOrder(event)"><input id="orderName" required minlength="2" placeholder="Ваше ім’я"><input id="orderPhone" required placeholder="Номер телефону"><button class="gold-btn" type="submit">Підтвердити замовлення</button></form><div id="orderStatus"></div></div>`}
function changeQty(id,d){const x=cart.find(i=>i.id==id);if(!x)return;x.qty+=d;if(x.qty<1)cart=cart.filter(i=>i.id!=id);save();renderCart()}
function removeFromCart(id){cart=cart.filter(i=>i.id!=id);save();renderCart();toast('Товар видалено')}
async function submitOrder(e){e.preventDefault();const name=document.getElementById('orderName').value.trim(),phone=document.getElementById('orderPhone').value.trim(),status=document.getElementById('orderStatus');if(!cart.length)return;const total=cart.reduce((s,x)=>s+x.price*x.qty,0);const product=cart.map(x=>`${x.name} — ${x.qty} шт. × ${x.price} грн`).join('\n')+`\nРазом: ${total} грн`;status.textContent='Відправляємо замовлення…';try{await fetch(TELEGRAM_WEBAPP,{method:'POST',mode:'no-cors',body:new URLSearchParams({name,phone,product})});cart=[];save();const el=document.getElementById('cart');if(el)el.innerHTML='<div class="order-success"><div class="success-icon">✓</div><h2>Дякуємо за замовлення!</h2><p>Замовлення успішно прийнято. Ми зв’яжемося з тобою найближчим часом.</p><a class="gold-btn" href="index.html#catalog">Повернутися до каталогу</a></div>'}catch(err){status.textContent='Не вдалося відправити. Напиши нам у Telegram.'}}
function setupSearch(){const input=document.getElementById('searchInput'),clear=document.getElementById('clearSearch'),brand=document.getElementById('brandFilter'),min=document.getElementById('minPrice'),max=document.getElementById('maxPrice'),sort=document.getElementById('sortFilter'),reset=document.getElementById('resetFilters');if(!input)return;const brands=[...new Set(products.map(p=>p.brand))].sort((a,b)=>a.localeCompare(b,'uk'));if(brand)brand.innerHTML='<option value="all">Усі бренди</option>'+brands.map(b=>`<option value="${b}">${b}</option>`).join('');input.addEventListener('input',renderProducts);brand?.addEventListener('change',renderProducts);min?.addEventListener('input',renderProducts);max?.addEventListener('input',renderProducts);sort?.addEventListener('change',renderProducts);reset?.addEventListener('click',()=>{input.value='';brand.value='all';min.value='';max.value='';sort.value='default';renderProducts()})}
function setupUI(){
  const drawer=document.getElementById('drawer');
  const back=document.getElementById('drawerBackdrop');
  const search=document.getElementById('searchPanel');
  const searchInput=document.getElementById('searchInput');
  const closeSearch=document.getElementById('closeSearch');
  const openSearch=()=>{
    search?.classList.add('open');
    document.body.classList.add('search-open');
    setTimeout(()=>searchInput?.focus(),120);
  };
  const hideSearch=()=>{
    search?.classList.remove('open');
    document.body.classList.remove('search-open');
    if(searchInput) searchInput.value='';
    renderProducts();
  };
  const hideDrawer=()=>{drawer?.classList.remove('open');back?.classList.remove('open');};
  document.getElementById('menuBtn')?.addEventListener('click',()=>{drawer?.classList.add('open');back?.classList.add('open')});
  document.getElementById('closeDrawer')?.addEventListener('click',hideDrawer);
  back?.addEventListener('click',hideDrawer);
  document.getElementById('searchBtn')?.addEventListener('click',openSearch);
  closeSearch?.addEventListener('click',hideSearch);
  search?.addEventListener('click',e=>{if(e.target===search)hideSearch()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){hideSearch();hideDrawer();}});
  document.getElementById('mobileFilter')?.addEventListener('click',()=>document.getElementById('filters').classList.toggle('open'));
  document.getElementById('mobileSort')?.addEventListener('click',()=>{const s=document.getElementById('sortFilter');s.value=s.value==='cheap'?'expensive':s.value==='expensive'?'default':'cheap';renderProducts();document.getElementById('filters').classList.add('open')});
  document.querySelector('.bottom-nav a:nth-child(2)')?.addEventListener('click',e=>{e.preventDefault();openSearch()});
}
if (location.pathname.endsWith('/') || location.pathname.endsWith('index.html')) {
  history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);
}
async function init(){setupUI();updateCounts();try{const r=await fetch('products.json',{cache:'no-store'});if(!r.ok)throw new Error('products');products=await r.json()}catch(e){products=fallback}hydrateCheckout();renderProducts();renderFavorites();renderProduct();renderCart();setupSearch();document.body.classList.add('loaded')}
init();
