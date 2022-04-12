//Current Date
let currentDate = new Date;
console.log(currentDate)
console.log("")

//STATIC IN ACTION

/*
class Car{
    numberOfCars = 0;
    constructor(model){
        this.model = model;
        this.numberOfCars += 1;
    }
}

let car1 = new Car("Lexus")
let car2 = new Car("BMW")
let car3 = new Car("Rolls-Royce")
let car4 = new Car("Mercedes Benz")

console.log(car1.numberOfCars)
console.log(car2.numberOfCars)
console.log(car3.numberOfCars)
console.log(car1.model)
console.log(car4.model)
console.log(`${car1.numberOfCars + car2.numberOfCars 
+ car3.numberOfCars + car4.numberOfCars}`)
*/


class Car{
    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
}

let car0 = new Car("Toyota")
let car1 = new Car("Lexus")
let car2 = new Car("BMW")
let car3 = new Car("Rolls-Royce")
let car4 = new Car("Mercedes Benz")
let car5 = new Car ("Range Rover")

// console.log(car1.numberOfCars)
// console.log(car2.numberOfCars)
// console.log(car3.numberOfCars)
console.log(`Car One Model is ${car0.model}`)
console.log(car1.model)
console.log(car4.model)
console.log(Car.numberOfCars)
console.log("")

/*The static property is generally useful when
 we talk about caches or anything with a fixed
 configuration.

 NB: WE CAN ALSO MAKE STATIC METHODS
*/




