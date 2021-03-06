//function for getting total
function getTotal() {
    const bestPriceInput = document.getElementById('best-price');
    const bestPriceValue = parseInt(bestPriceInput.innerText);
    const extraMemoryCostInput = document.getElementById('extra-memory-cost');
    const extraMemoryCostValue = parseInt(extraMemoryCostInput.innerText);
    const extraStorageCostInput = document.getElementById('extra-storage-cost');
    const extraStorageCostValue = parseInt(extraStorageCostInput.innerText);
    const deliveryChargeInput = document.getElementById('delivery-charge');
    const deliveryChargeValue = parseInt(deliveryChargeInput.innerText);
    const total = bestPriceValue + extraMemoryCostValue + extraStorageCostValue + deliveryChargeValue;
    return total;
}
//function for getting total price and discount id
function totalPrice(totalPriceId) {
    const totalInput = document.getElementById(totalPriceId);
    totalInput.innerText = getTotal();
    return totalInput.innerText;
}
//extra memory card part
document.getElementById('memory-btn-8gb').addEventListener('click', function () {
    document.getElementById('extra-memory-cost').innerText = 0;
    totalPrice('total-price');
    totalPrice('discount-total');
})
document.getElementById('memory-btn-16gb').addEventListener('click', function () {
    document.getElementById('extra-memory-cost').innerText = 180;
    totalPrice('total-price');
    totalPrice('discount-total');
})
//extra storage cost part
document.getElementById('storage-btn-256gb').addEventListener('click', function () {
    document.getElementById('extra-storage-cost').innerText = 0;
    totalPrice('total-price');
    totalPrice('discount-total');
})
document.getElementById('storage-btn-512gb').addEventListener('click', function () {
    document.getElementById('extra-storage-cost').innerText = 100;
    totalPrice('total-price');
    totalPrice('discount-total');
})
document.getElementById('storage-btn-1tb').addEventListener('click', function () {
    document.getElementById('extra-storage-cost').innerText = 180;
    totalPrice('total-price');
    totalPrice('discount-total');
})
//delivery cost part
document.getElementById('delivery-cost-free').addEventListener('click', function () {
    document.getElementById('delivery-charge').innerText = 0;
    totalPrice('total-price');
    totalPrice('discount-total');
})
document.getElementById('delivery-cost-price').addEventListener('click', function () {
    document.getElementById('delivery-charge').innerText = 20;
    totalPrice('total-price');
    totalPrice('discount-total');
})
//pomo button with discount
document.getElementById('pomo-btn').addEventListener('click', function () {
    const discountInput = document.getElementById('discount-total');
    const discountValue = discountInput.innerText;
    const pomoInput = document.getElementById('pomo-input');
    const pomoValue = pomoInput.value;
    if (pomoValue == 'stevekaku') {
        const discountNum = parseFloat(discountValue) / 5;
        discountInput.innerText = discountValue - discountNum;
    }
    pomoInput.value = '';
})