// --- GLOBAL CART LOGIC FOR ITRAURA ---

// 1. Data load karna localStorage se
let cart = JSON.parse(localStorage.getItem('itraura_cart')) || [];

// 2. Cart Drawer kholne/band karne ka function
function toggleCart() {
    const drawer = document.getElementById('cart-drawer');
    const mask = document.getElementById('cart-mask');
    if(!drawer) return; // Agar page par drawer nahi hai toh function stop ho jaye
    
    drawer.classList.toggle('open');
    if(mask) {
        mask.style.display = drawer.classList.contains('open') ? 'block' : 'none';
    }
    renderCart();
}

// 3. Global Add to Cart Function
function addToCart(id, name, price, size, img) {
    // Check if item with same size already exists
    const existingItem = cart.find(item => item.id === id && item.size === size);
    
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ id, name, price, size, img, qty: 1 });
    }
    
    updateStorageAndUI();
    
    // Luxury touch: Product add hote hi cart slide hokar dikhega
    const drawer = document.getElementById('cart-drawer');
    if(drawer && !drawer.classList.contains('open')) {
        toggleCart();
    }
}

// 4. Update Everything
function updateStorageAndUI() {
    localStorage.setItem('itraura_cart', JSON.stringify(cart));
    renderCart();
}

// 5. Cart ko Draw karna (Render)
function renderCart() {
    const container = document.getElementById('cart-content') || document.getElementById('cart-items');
    const totalDisplay = document.getElementById('grand-total') || document.getElementById('cart-total-amount');
    const badge = document.getElementById('cart-count-badge') || document.getElementById('cart-count-val');
    
    if(!container) return;

    container.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#333; margin-top:100px; font-size:12px; letter-spacing:2px;">Your Selection is Empty.</p>';
        if(totalDisplay) totalDisplay.innerText = '0';
        if(badge) badge.innerText = '0';
        return;
    }

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        count += item.qty;
        container.innerHTML += `
            <div class="cart-item-row" style="display: flex; gap: 15px; margin-bottom: 20px; align-items: center; border-bottom: 1px solid #111; padding-bottom: 15px;">
                <img src="${item.img}" style="width: 70px; height: 70px; object-fit: contain; border: 1px solid #222;">
                <div style="flex-grow: 1;">
                    <h4 style="color: #D4AF37; margin: 0; font-size: 13px;">${item.name}</h4>
                    <p style="font-size: 10px; color: #555; margin: 3px 0;">Size: ${item.size} | Qty: ${item.qty}</p>
                    <p style="color: #fff; font-size: 14px;">₹${item.price * item.qty}</p>
                </div>
                <i class="fas fa-trash-alt" onclick="removeFromCart(${index})" style="color: #222; cursor: pointer; font-size: 11px;"></i>
            </div>
        `;
    });

    if(totalDisplay) totalDisplay.innerText = total;
    if(badge) badge.innerText = count;
}

// 6. Remove Item
function removeFromCart(index) {
    cart.splice(index, 1);
    updateStorageAndUI();
}

// 7. WhatsApp Checkout
function sendWhatsAppOrder() {
    if (cart.length === 0) return alert("Please select a fragrance first.");
    let msg = "Hello ItrAura, I'd like to reserve the following Selection:\n\n";
    let total = 0;
    cart.forEach(item => {
        msg += `• ${item.name} (${item.size}) x ${item.qty} = ₹${item.price * item.qty}\n`;
        total += item.price * item.qty;
    });
    msg += `\nTotal Amount: ₹${total}\n\nPlease share the payment details.`;
    window.open(`https://wa.me/917618243220?text=${encodeURIComponent(msg)}`);
}

// Initial count check on load
document.addEventListener('DOMContentLoaded', renderCart);
