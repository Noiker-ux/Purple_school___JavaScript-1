const operation = [1000, -700, 300, -10000, 500];
const startBalance = 500;

const itogBalance = (startBalance, operation) => {
    let finallBalance = startBalance;
    for (let element of operation){
        finallBalance+=element;
    }
    console.log(finallBalance);
    return finallBalance;
};

const minusBalance = (startBalance, operation) =>{
let finallBalance = startBalance;
    for (let i=0;i<operation.length;i++){
        if (finallBalance<0){
            break;
        } else {
            finallBalance+=operation[i];
        }
    };
    if (finallBalance<0){
        console.log(false);
        return false;
    } else {
        return finallBalance;
    }
}

const KPD = (operation) =>{
    let plusBalanses = minusBalances = i = j = 0;
    let sredPokazatel = [];
    for (let element of operation){
        if(element>=0){
            plusBalanses+=element;
            i++;
        } else {
            minusBalances+=element;
            j++;
        }
    }
    sredPokazatel.push(plusBalanses/i);
    sredPokazatel.push(minusBalances/j);
    console.log(`Средний доход ${sredPokazatel[0]}$`);
    console.log(`Средний расход ${sredPokazatel[1]}$`);
    return sredPokazatel;
};

itogBalance(startBalance, operation);
minusBalance(startBalance, operation);
KPD(operation);