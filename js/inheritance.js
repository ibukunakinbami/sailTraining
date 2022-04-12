//INHERITANCE
/*Inheritance is a term used to denote when a 
child class can use(inherit) all the properties
and methods of its parent class
*/

//Example 1
// Let's create an Animal Class
// Having a Boolean and a name property and also
//having eat, sleep and run methods
//VERBS = Function/Method
//NOUNS = properties

//PARENT CLASS
class Animal{
    alive = true;
    
    eat(){
        console.log(`This ${this.animalName} is eating`)
    }

    sleep(){
       console.log(`This ${this.animalName} is slepping`) 
    }
    
}

//CHILD CLASS
class Fish extends Animal{
     animalName = "tilapia";
    move(){
        console.log(`${this.animalName} swims`)
    }
}

class Cheetah extends Animal{
    animalName = "tiger";
    move(){
        console.log(`${this.animalName} runs`)
    }

}

class Snail extends Animal{
    animalName = "snail";
    move(){
        console.log(`${this.animalName} moves Slowly`)
    }
}