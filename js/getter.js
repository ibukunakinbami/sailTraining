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