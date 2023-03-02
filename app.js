const bigCredit = (ageUser, workUser, moneyUser) => {
    if (Number(ageUser)>24 && workUser===true){
        moneyUser+=500;
    };
    return moneyUser;
};

const smallCredit = (ageUser, moneyUser) => {
    if (Number(ageUser)>24){
        moneyUser+=100;
    };
    return moneyUser;
};

const checkBuy = (moneyUser, priceMac) => {
    if (Number(moneyUser)>=Number(priceMac)){
        return true;
    } else {
        return false;
    }
};

const buyMac = (ageUser, moneyUser, workUser, priceMac) => {
    if (checkBuy(moneyUser,priceMac)){
        console.log('Можно купить без кредитов');
        return true;
    } else if (checkBuy (smallCredit(ageUser, moneyUser), priceMac )) {
        console.log('Можно купить c маленьким кредитом');
        return true;
    } else if (checkBuy (bigCredit(ageUser, workUser, moneyUser),priceMac)) {
        console.log('Можно купить c большим кредитом');
        return true;
    } else {
        console.log('Невозможно купить');
        return false;
    }
};

console.log(buyMac(32,1400,true,2000));
