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