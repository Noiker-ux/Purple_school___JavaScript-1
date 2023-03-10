const warehouse = {
    goods: [],
    findGoodById: function(idTovara){
        return this.goods.find(el=>{return el.id==idTovara});
    },
    addGood: function(tovar){
        this.goods.push(tovar);
    },
    getWeight: function(){
        let abs = 0
            this.goods
            .forEach(el => {
                if (el?.weight?.kg){
                    abs+=el.weight.kg;
                }
            })
            return abs;
    }
}


const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
};

const chair = {
    id: 2,
    weight: {
        kg: 500
    },
}
const paper ={
    id: 3,
    color: 'red'
}

warehouse.addGood(chair);
warehouse.addGood(car);
warehouse.addGood(paper);



console.log(warehouse);
console.log(warehouse.getWeight());
console.log(warehouse.findGoodById(2));