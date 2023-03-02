const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const priceHouse = 13500;
const itog = deposit * (1 + rate/12) ** depositLength;
console.log(`Вася накопил: ${itog}`);
itog>=priceHouse?
console.log(`Сможет ли Вася купить дом за ${priceHouse}$: ${true}\nОстаток после покупки дома составляет ${itog-priceHouse}$`)
:
console.log(`На данный момент покупка дома невозможна. \n Для покупки дома не хватает ${priceHouse-itog}$`);
// |