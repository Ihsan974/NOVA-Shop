document.addEventListener('DOMContentLoaded', () => {
  // 1. എലമെന്റുകൾ സെലക്ട് ചെയ്യുന്നു
  const cartCount = document.getElementById('cartCount') || document.querySelector('.cart-count');
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotal = document.getElementById('cartTotal');
  
  // മുകളിലെ Cart ബട്ടണും, കാർട്ട് കാണിക്കേണ്ട ബോക്സും (aside ടാഗ്)
  const cartButton = document.getElementById('cartButton');
  const cartSidebar = document.querySelector('aside') || document.querySelector('.cart-sidebar') || document.querySelector('.cart-overlay');
  
  // കാർട്ട് ക്ലോസ് ചെയ്യാനുള്ള ബട്ടൺ (നിങ്ങളുടെ HTML-ൽ ഉണ്ടെങ്കിൽ)
  const closeCartBtn = document.getElementById('closeCart') || document.querySelector('.close-cart');

  const allButtons = document.querySelectorAll('.add-cart, .add-to-cart, .add-to-cart-btn, #addToCartBtn');
  
  let count = 0;
  let totalAmount = 0;

  // 2. Add to Cart ബട്ടണുകളുടെ ഫങ്ക്ഷൻ
  if (allButtons.length > 0) {
    allButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        
        count++;
        if (cartCount) cartCount.textContent = count;
        
        const productName = button.getAttribute('data-product') || 'Wireless Earbuds';
        const productPriceText = button.getAttribute('data-price') || '0';
        const productPrice = parseInt(productPriceText.replace(/[^0-9]/g, '')) || 0;
        
        totalAmount += productPrice;
        if (cartTotal) {
          cartTotal.textContent = '₹' + totalAmount.toLocaleString('en-IN');
        }
        
        if (cartItemsContainer) {
          const emptyMsg = cartItemsContainer.querySelector('.empty-cart');
          if (emptyMsg) emptyMsg.remove();
          
          const newItem = document.createElement('div');
          newItem.className = 'cart-item';
          newItem.style.display = 'flex';
          newItem.style.justifyContent = 'space-between';
          newItem.style.margin = '15px 0';
          newItem.style.paddingBottom = '10px';
          newItem.style.borderBottom = '1px solid #eee';
          newItem.style.color = '#111111';
          newItem.innerHTML = `<span>${productName}</span> <strong>${productPriceText}</strong>`;
          cartItemsContainer.appendChild(newItem);
          // കാർട്ടിലെ നിലവിലെ വിവരങ്ങൾ ലോക്കൽ സ്റ്റോറേജിൽ സേവ് ചെയ്യുന്നു
          localStorage.setItem('cartItemsHTML', cartItemsContainer.innerHTML);
          localStorage.setItem('cartTotalAmount', cartTotal.textContent);
        
        }
        
        // പ്രൊഡക്റ്റ് ആഡ് ചെയ്യുമ്പോൾ തന്നെ തനിയെ കാർട്ട് ബോക്സ് തുറന്നു വരാൻ ഇത് സഹായിക്കും
        if (cartSidebar) {
          cartSidebar.classList.add('active');
        }
      });
    });
  }

  // 3. മുകളിലെ Cart ബട്ടൺ ക്ലിക്ക് ചെയ്യുമ്പോൾ കാർട്ട് ഓപ്പൺ ചെയ്യാൻ
  if (cartButton && cartSidebar) {
    cartButton.addEventListener('click', (e) => {
      e.preventDefault();
      cartSidebar.classList.toggle('active');
    });
  }

  // 4. Close ബട്ടൺ ക്ലിക്ക് ചെയ്യുമ്പോൾ കാർട്ട് അടയ്ക്കാൻ
  if (closeCartBtn && cartSidebar) {
    closeCartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      cartSidebar.classList.remove('active');
    });
  }
});
