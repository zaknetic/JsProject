
// Get necessary elements
const basePriceElement = document.querySelector('#base-price span');
const memoryCostElement = document.querySelector('#memory-cost');
const storageCostElement = document.querySelector('#storage-cost');
const deliveryCostElement = document.querySelector('#delivery-cost');
const totalPriceElement = document.querySelector('#total-price');
const userPaymentElement = document.querySelector('#user-payment');
const promoInputField = document.querySelector('#input-field');
const applyButton = document.querySelector('#apply-btn');

// Calculate total price
function calculateTotalPrice() {
const basePrice = parseFloat(basePriceElement.textContent);
const memoryCost = parseFloat(memoryCostElement.textContent);
const storageCost = parseFloat(storageCostElement.textContent);
const deliveryCost = parseFloat(deliveryCostElement.textContent);

const totalPrice = basePrice + memoryCost + storageCost + deliveryCost;
totalPriceElement.textContent = totalPrice.toFixed(2);
userPaymentElement.textContent = totalPrice.toFixed(2);
}

// Apply promo code
applyButton.addEventListener('click', () => {
const promoCode = promoInputField.value.trim();

if (promoCode === 'Ostad') {
const currentTotalPrice = parseFloat(totalPriceElement.textContent);
const discountedPrice = currentTotalPrice * 0.9; // Apply 10% discount
totalPriceElement.textContent = discountedPrice.toFixed(2);
userPaymentElement.textContent = discountedPrice.toFixed(2);

alert('Promo code applied! You received a 10% discount.');
} else {
alert('Invalid promo code. Please try again.');
}
});

// Initial calculation
calculateTotalPrice();

