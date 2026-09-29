/* =========================================================
   SCROLL REVEAL
========================================================= */

.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition:
        opacity 0.7s ease,
        transform 0.7s ease;
}

.reveal.visible {
    opacity: 1;
    transform: translateY(0);
}


/* =========================================================
   PRODUCT CARD STAGGER
========================================================= */

.product-card:nth-child(2) {
    transition-delay: 0.08s;
}

.product-card:nth-child(3) {
    transition-delay: 0.16s;
}


/* =========================================================
   FEATURE STAGGER
========================================================= */

.feature-card:nth-child(2) {
    transition-delay: 0.08s;
}

.feature-card:nth-child(3) {
    transition-delay: 0.16s;
}

.feature-card:nth-child(4) {
    transition-delay: 0.24s;
}


/* =========================================================
   BUTTON PRESS
========================================================= */

button:active {
    transform: scale(0.97);
}


/* =========================================================
   SELECTION
========================================================= */

::selection {
    background: #d9ff3f;
    color: #111;
}

document.addEventListener('DOMContentLoaded', () => {
  // കാർട്ട് കൗണ്ട് കാണിക്കുന്ന നമ്പറും, ഹീറോ ബട്ടണും, പ്രൊഡക്റ്റ് ബട്ടണുകളും സെലക്ട് ചെയ്യുന്നു
  const cartCount = document.getElementById('cartCount');
  
  // കൂടുതൽ സുരക്ഷിതമാക്കാൻ രണ്ട് തരം ക്ലാസ്സുകളെയും (add-to-cart, add-to-cart-btn) ഐഡിയെയും (addToCartBtn) ഒന്നിച്ച് സെലക്ട് ചെയ്യുന്നു
  const allButtons = document.querySelectorAll('.add-to-cart, .add-to-cart-btn, #addToCartBtn');
  
  let count = 0;

  if (allButtons.length > 0) {
    allButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault(); // പേജ് റീഫ്രഷ് ആകുന്നത് തടയാൻ
        
        count++; // കൗണ്ട് 1 കൂട്ടുന്നു
        
        // കാർട്ട് കൗണ്ട് ബോക്സ് വെബ്‌സൈറ്റിൽ ഉണ്ടെങ്കിൽ അതിലെ നമ്പർ മാറ്റുന്നു
        if (cartCount) {
          cartCount.textContent = count;
        }
        
        // പ്രൊഡക്റ്റിന്റെ പേര് എടുക്കുന്നു
        const productName = button.getAttribute('data-product') || 'Product';
        alert(`${productName} added to cart!`);
      });
    });
  }
});
