
const stavkaHour = 80;
let workTime = dlsworkTime = 40;
let days = 11-2;
for (i=0;i<days;i++){
    dlsworkTime-=5;
}
if (dlsworkTime<=0){
    console.log(`Смогу ли я взять работу? ${true}`);
    console.log(`Стоимость работ: ${workTime*stavkaHour}$`);
}
