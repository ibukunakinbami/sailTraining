class Animal {
    alive = true;
}

class rabbit extends Animal{
     constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

let animal1 = new rabbit()