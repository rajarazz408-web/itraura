/* ===== CART SYSTEM (UPGRADED) ===== */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ADD TO CART */
function addToCart(item, price){
  cart.push({ item, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(item + " added to cart 🛒");
}

/* CART COUNT */
function updateCartCount(){
  let count = document.getElementById("cart-count");
  if(count){
    count.innerText = cart.length;
  }
}

/* BUY DIRECT (WHATSAPP) */
function buy(item){
  let num="917618243220";
  let msg="I want to buy " + item;
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`);
}

/* ORDER FULL CART */
function orderCart(){
  let num="917618243220";
  let msg="Order Details:\n";

  cart.forEach(p=>{
    msg += p.item + " - " + p.price + "\n";
  });

  window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`);
}

/* REMOVE ITEM */
function removeItem(index){
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

/* LOAD CART PAGE */
function loadCart(){
  let list = document.getElementById("cart-items");
  let total = document.getElementById("total");

  if(!list) return;

  list.innerHTML = "";
  let sum = 0;

  cart.forEach((p,i)=>{
    sum += parseInt(p.price.replace("₹",""));

    list.innerHTML += `
      <div class="cart-item">
        <h3>${p.item}</h3>
        <p>${p.price}</p>
        <button onclick="removeItem(${i})">Remove</button>
      </div>
    `;
  });

  total.innerText = "Total: ₹" + sum;
}

/* FILTER */
function filter(cat){
  if(cat==="all") renderProducts(products);
  else renderProducts(products.filter(p=>p.category===cat));
}

/* SCROLL */
function scrollToProducts(){
  document.getElementById("products").scrollIntoView();
}

/* PRODUCT PAGE (OPTIONAL) */
function openProduct(name) {
  window.location.href = "product.html?name=" + encodeURIComponent(name);
}

/* INIT */
updateCartCount();
