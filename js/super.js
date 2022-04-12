class Animal {
    alive = true;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class rabbit extends Animal {
    constructor(name,age,runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
    
}

let animal1 = new rabbit(window.prompt(`Name of Animal:`, window.prompt(`How Old is your Animal? `)))
console.log(animal1)