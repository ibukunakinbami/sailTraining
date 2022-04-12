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

//Assignment
//
class Cars{
    engine = true;

    static numberOfCars = 0;
    constructor(transmission){
        this.transmission=transmission;
        numberOfCars += 1;
    }
    
    drive(){
        console.log(`All cars can drive`)
    }
    reverse(){
        console.log(`All car can reverse`)
    }
    park(){
        console.log(`All cars can be parked`)
    }    
}
// let car1 = new Cars("Corolla")
// console.log(car1.drive)


//CHILD CLASS
class maseratti extends Cars{
     
}

class bullionVan extends Cars{
  
}

class Golf extends Cars{
    
}

class Danfo extends Cars{    
    
}