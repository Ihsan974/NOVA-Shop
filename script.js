document.addEventListener('DOMContentLoaded', () => {
  // കാർട്ട് കൗണ്ട് കാണിക്കുന്ന നമ്പറും മറ്റും സെലക്ട് ചെയ്യുന്നു
  const cartCount = document.getElementById('cartCount') || document.querySelector('.cart-count');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  // നിങ്ങളുടെ HTML-ൽ ഉള്ള 'add-cart' എന്ന ക്ലാസ്സ് കൂടി ഇവിടെ കൃത്യമായി ചേർത്തു
  const allButtons = document.querySelectorAll('.add-cart, .add-to-cart, .add-to-cart-btn, #addToCartBtn');
  
  let count = 0;
  let totalAmount = 0;

  if (allButtons.length > 0) {
    allButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault(); // പേജ് റീഫ്രഷ് ആകുന്നത് തടയാൻ
        
        count++;
        
        // 1. മുകളിലെ കാർട്ട് നമ്പറിൽ കൗണ്ട് മാറ്റുന്നു
        if (cartCount) {
          cartCount.textContent = count;
        }
        
        // 2. വിലയും പേരും എടുക്കുന്നു
        const productName = button.getAttribute('data-product') || 'Wireless Earbuds';
        const productPriceText = button.getAttribute('data-price') || '0';
        const productPrice = parseInt(productPriceText.replace(/[^0-9]/g, '')) || 0;
        
        // 3. ആകെ തുക കൂട്ടുന്നു
        totalAmount += productPrice;
        if (cartTotal) {
          cartTotal.textContent = '₹' + totalAmount.toLocaleString('en-IN');
        }
        
        // 4. കാർട്ട് ലിസ്റ്റിലേക്ക് പ്രൊഡക്റ്റ് ചേർക്കുന്നു
        if (cartItemsContainer) {
          const emptyMsg = cartItemsContainer.querySelector('.empty-cart');
          if (emptyMsg) {
            emptyMsg.remove();
          }
          
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
