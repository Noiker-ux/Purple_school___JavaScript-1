/* Реализовать методы увеличения и уменьшения баланса,
при котором каждая операция сохраняется в массив
operations в виде { reason: 'Оплата налогов', sum: -100 }.
Возвращается true, если успешно и false, если не зватает баланса.
Также реализовать метод вывода числа операций по кошельку
*/

const wallet = {
    balance: 0,
    operations: [],
    upMoney: function(reason, money){
        this.operations.push({
            reason: reason,
            plata: money
        });
        this.balance+=money;
        return `Деньги внесены. Баланс: ${this.balance}$`
    },
    downMoney: function(reason, money){
        if(this.balance+money<0){
            return `Недостаточное средств: ${this.balance+money}$`;
        } else {
            this.upMoney(reason,money);
        }
    },
    countOperation(){
       return `Количество операций банковской карты: ${this.operations.length}`;
    }
};
console.log(wallet.upMoney('Зарплата',15000));
console.log(wallet.downMoney('Заправка',-22000));
console.log(wallet.countOperation());
console.log(wallet);
