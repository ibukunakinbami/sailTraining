class Car {
    constructor(power) {
        this._power = power;
    }
    get power() {
        return this._power;
    }
}

let car1 = new Car(`V8 Engine`);
console.log(car1.power)
car1.power = "V6 Engine"
// get is read only, not write keyword
console.log("")
console.log(car1._power)
console.log("")

let car1 = new Car(`V8 Engine`)
car1.power = "V6 Engine"
// get is read only, not write keyword
console.log("")
console.log(car1._power)
console.log("")

//Class Work

class gasUsage {
    constructor(litre) {
        this.monthlyUsage = litre;
        this.gasConsumed = window.prompt("Total Gas use per month:")
    }
    get monthlyGasUsage() {
        let gasConsume = (0.5 * 100) / 20;
        return  `Monthly Gas Consumed is ${gasConsume} L`
    }
}

let month1 = new gasUsage(200)
month1.monthlyGasUsage;
