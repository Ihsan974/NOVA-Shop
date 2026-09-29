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
  // മുകളിലെ കാർട്ട് കൗണ്ട് കാണിക്കുന്ന ബോക്സ് സെലക്ട് ചെയ്യുന്നു
  const cartCount = document.getElementById('cartCount');
  // നമ്മൾ HTML-ൽ കൊടുത്ത ക്ലാസ്സ് ഉള്ള എല്ലാ ബട്ടണുകളും സെലക്ട് ചെയ്യുന്നു
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  
  let count = 0;

  if (cartCount && addToCartButtons.length > 0) {
    addToCartButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault(); // പേജ് റീഫ്രഷ് ആകുന്നത് തടയാൻ
        
        count++; // കൗണ്ട് 1 കൂട്ടുന്നു
        cartCount.textContent = count; // മുകളിലെ നമ്പറിലേക്ക് പുതിയ കൗണ്ട് നൽകുന്നു
        
        // പ്രൊഡക്റ്റിന്റെ പേര് എടുക്കുന്നു (വരി 214-ൽ നൽകിയത്)
        const productName = button.getAttribute('data-product') || 'Product';
        alert(`${productName} added to cart!`);
      });
    });
  }
});

