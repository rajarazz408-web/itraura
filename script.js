let cart = [];

function addToCart(item){
  cart.push(item);
  alert(item + " added to cart");
}

function buy(item){
  let num="917618243220";
  let msg="I want to buy " + item;
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`);
}

function orderCart(){
  let num="917618243220";
  let msg="Order: " + cart.join(", ");
  window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`);
}

function filter(cat){
  if(cat==="all") renderProducts(products);
  else renderProducts(products.filter(p=>p.category===cat));
}

function scrollToProducts(){
  document.getElementById("products").scrollIntoView();
}

function openProduct(name) {
  window.location.href = "product.html?name=" + name;
}
