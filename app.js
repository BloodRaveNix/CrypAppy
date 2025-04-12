const billingSwitch = document.getElementById('billingSwitch');

billingSwitch.addEventListener('change', () => {
    const isAnnual = billingSwitch.checked;

    document.getElementById('price-essential').textContent = isAnnual ? '$115/yr' : '$12/mo';
    document.getElementById('price-pro').textContent = isAnnual ? '$538/yr' : '$56/mo';
    document.getElementById('price-premium').textContent = isAnnual ? '$758/yr' : '$79/mo';
});
