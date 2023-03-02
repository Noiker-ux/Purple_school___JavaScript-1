const deposit = 12000;
const rate = 0.07;
const depositLength = 24;
const priceHouse = 13500;
const itog = deposit * (1 + rate/12) ** depositLength;
console.log(`Вася накопил: ${itog}`);
if (itog>=priceHouse){
    console.log(`Сможет ли Вася купить дом за ${priceHouse}$: ${true}`);
    console.log(`Остаток после покупки дома составляет ${itog-priceHouse}$`);
} else {
    console.log('На данный момент покупка дома невозможна.');
    console.log(`Для покупки дома не хватает ${priceHouse-itog}$`);
}