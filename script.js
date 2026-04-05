/* ===============================
   CART SYSTEM (FINAL WORKING)
================================= */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ===============================
   ADD TO CART
================================= */
function addToCart(item, price){
  cart.push({ item, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(item + " added to cart 🛒");
}

/* ===============================
   CART COUNT (HEADER)
================================= */
function updateCartCount(){
  let count = document.getElementById("cart-count");
  if(count){
    count.innerText = cart.length;
  }
}

/* ===============================
   BUY DIRECT (WHATSAPP FIXED)
================================= */
function buy(item){
  let num = "917618243220";
  let msg = "I want to buy " + item;

  let url = "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);

  window.location.href = url;  // ⭐ FIXED FOR MOBILE
}

/* ===============================
   ORDER FULL CART (WHATSAPP)
================================= */
function orderCart(){
  let num = "917618243220";
  let msg = "Order Details:\n";

  if(cart.length === 0){
    alert("Cart is empty ❌");
    return;
  }

  cart.forEach(p=>{
    msg += p.item + " - " + p.price + "\n";
  });

  let url = "https://wa.me/" + num + "?text=" + encodeURIComponent(msg);

  window.location.href = url;
}

/* ===============================
   REMOVE ITEM
================================= */
function removeItem(index){
  cart.splice(index,1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCartCount();
}

/* ===============================
   LOAD CART PAGE
================================= */
function loadCart(){
  let list = document.getElementById("cart-items");
  let total = document.getElementById("total");

  if(!list) return;

  list.innerHTML = "";
  let sum = 0;

  cart.forEach((p,i)=>{
    let priceNum = parseInt(p.price.replace("₹",""));
    sum += priceNum;

    list.innerHTML += `
      <div class="cart-item">
        <h3>${p.item}</h3>
        <p>${p.price}</p>
        <button onclick="removeItem(${i})">Remove</button>
      </div>
    `;
  });

  if(total){
    total.innerText = "Total: ₹" + sum;
  }
}

/* ===============================
   FILTER (OPTIONAL)
================================= */
function filter(cat){
  if(cat==="all") renderProducts(products);
  else renderProducts(products.filter(p=>p.category===cat));
}

/* ===============================
   SCROLL
================================= */
function scrollToProducts(){
  let el = document.getElementById("products");
  if(el){
    el.scrollIntoView({ behavior: "smooth" });
  }
}

/* ===============================
   PRODUCT PAGE (OPTIONAL)
================================= */
function openProduct(name) {
  window.location.href = "product.html?name=" + encodeURIComponent(name);
}

/* ===============================
   INIT
================================= */
updateCartCount();
