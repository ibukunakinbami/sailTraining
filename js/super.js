class Animal {
    alive = true;
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class rabbit extends Animal{ 
    super(name,age)
    }

let animal1 = new rabbit()
console.log(rabbit)