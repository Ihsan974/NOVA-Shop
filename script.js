document.addEventListener('DOMContentLoaded', () => {
  // നിങ്ങളുടെ വെബ്‌സൈറ്റിലെ കാർട്ടിന്റെ കൗണ്ട് കാണിക്കുന്ന എല്ലാ ടാഗുകളും സെലക്ട് ചെയ്യുന്നു
  // (id="cartCount" അല്ലെങ്കിൽ class="cart-count" ഉണ്ടെങ്കിൽ അത് വർക്ക് ചെയ്യും)
  const cartCount = document.getElementById('cartCount') || document.querySelector('.cart-count') || document.querySelector('#cartButton span');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  const allButtons = document.querySelectorAll('.add-to-cart, .add-to-cart-btn, #addToCartBtn');
  
  let count = 0;
  let totalAmount = 0;

  if (allButtons.length > 0) {
    allButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        count++;
        
        // 1. മുകളിലെ കാർട്ട് ബട്ടണിലെ നമ്പർ മാറ്റുന്നു
        if (cartCount) {
          cartCount.textContent = count;
        }
        
        // 2. വിലയും പേരും എടുക്കുന്നു
        const productName = button.getAttribute('data-product') || 'Wireless Earbuds';
        const productPriceText = button.getAttribute('data-price') || '0';
        // വിലയിലെ കറൻസി ചിഹ്നങ്ങളും കോമയും മാറ്റി നമ്പറിലേക്ക് മാറ്റുന്നു (ഉദാഹരണത്തിന് ₹8,999 -> 8999)
        const productPrice = parseInt(productPriceText.replace(/[^0-9]/g, '')) || 0;
        
        // 3. ആകെ തുക കൂട്ടുന്നു
        totalAmount += productPrice;
        if (cartTotal) {
          cartTotal.textContent = '₹' + totalAmount.toLocaleString('en-IN');
        }
        
        // 4. കാർട്ട് ലിസ്റ്റിലെ "Your cart is empty" മാറ്റുന്നു
        if (cartItemsContainer) {
          const emptyMsg = cartItemsContainer.querySelector('.empty-cart');
          if (emptyMsg) {
            emptyMsg.remove(); // കാർട്ട് കാലിയാണെന്ന മെസ്സേജ് ഒഴിവാക്കുന്നു
          }
          
          // പുതിയ പ്രൊഡക്റ്റ് ലിസ്റ്റിലേക്ക് ചേർക്കുന്നു
          const newItem = document.createElement('div');
          newItem.className = 'cart-item';
          newItem.style.display = 'flex';
          newItem.style.justifyContent = 'space-between';
          newItem.style.margin = '10px 0';
          newItem.innerHTML = `<span>${productName}</span> <span>${productPriceText}</span>`;
          cartItemsContainer.appendChild(newItem);
        }
        
        alert(`${productName} added to cart!`);
      });
    });
  }
});
