function renderProducts(list){
  const container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p=>{
    container.innerHTML += `
      <div class="product ${p.category}">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <p class="desc">${p.desc}</p>
        <button onclick="addToCart('${p.name}')">Add</button>
        <button onclick="buy('${p.name}')">Buy</button>
      </div>
    `;
  });
}

renderProducts(products);
