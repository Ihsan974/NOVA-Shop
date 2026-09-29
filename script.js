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
  // കാർട്ട് കൗണ്ട് കാണിക്കുന്ന നമ്പറും, ബട്ടണും ഐഡി വഴി സെലക്ട് ചെയ്യുന്നു
  const cartCount = document.getElementById('cartCount');
  const addToCartBtn = document.getElementById('addToCartBtn');
  
  let count = 0;

  if (addToCartBtn && cartCount) {
    addToCartBtn.addEventListener('click', (e) => {
      e.preventDefault(); // ബട്ടൺ ലിങ്ക് ആയതുകൊണ്ട് പേജ് റീഫ്രഷ് ആകുന്നത് തടയാൻ
      count++;
      cartCount.textContent = count; // കാർട്ടിലെ നമ്പർ മാറ്റുന്നു
      
      // ഒരു കൺഫർമേഷന് വേണ്ടി ചെറിയൊരു അലർട്ട്
      alert('NOVA ONE product added to cart!');
    });
  }
});

