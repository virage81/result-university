"use strict";
const totalPrice = ({ price, discount, isInstallment, months }) => {
    const priceWithDiscount = price - price * (discount / 100);
    return isInstallment && months > 1 ? priceWithDiscount / months : priceWithDiscount;
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
const price2 = totalPrice({ price: 64832, discount: 13.5, isInstallment: false, months: 12 });
const price3 = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 2 });
console.log(price); // 6250
console.log(price2); // 56079.68
console.log(price3); // 75000
