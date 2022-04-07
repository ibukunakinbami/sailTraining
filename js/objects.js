/*Properties 
*/

//Example 1

let car = {
    model:"BMW",
    color:"white",
    year:2023,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes");
    }
}

console.log(`The color of your car is ${car.color}`)
console.log("")
car.brake()
console.log("")
car.drive()
console.log("")
console.log(`The model of your car is ${car.model}`)

//Exercise 1
//Create an Objects of a country with 3 properties
//and methods

let nigeria = {
    capital: "FCT Abuja",
    Religion: "Christian",
    Tribe: "Yoruba",
    states: 36,

    systemOfGovernment : function(){
        console.log(`Democracy`)
    },
    security:()=> console.log(`There is no Security in Nigeria except ${nigeria.Tribe} Region`),
}
console.log("")

console.log(`The Capital of Nigeria is ${nigeria.capital}`) 
console.log("")
nigeria.security()
console.log("")
nigeria.systemOfGovernment()
console.log("")
console.log(`There are ${nigeria.states} in Nigeria excluding Abuja`)
console.log("")

//Example 1 under Class
class player{
    score = 0;
    pause(){
        console.log("You paused the game")
    }
    exit(){
        console.log("You have exited the game")
    }
}

//Create an Object of Class player
let player1 = new player()
player1.score += 8;
console.log(player1.score)
console.log("")
player1.pause()

//Create Another Objectvof Class Player
let player2 = new player()
player2.score += 4;
console.log(player2.score)
player2.exit()
console.log("")

//function playerResult(){
if (player1.score > player2.score){
    console.log(`Player1 Scores ${player1.score}, You Won`)
} else{
    console.log(`Player2 Scores ${player2.score}, You Won`)
}
//}

//CONSTRUCTOR 
//Constructor is a 
//Format
class student{
    constructor(name,age,gpa){
        this.name= name;
        this.age = age;
        this.gpa = gpa; 
    }
    study(){
        console.log(`${this.name} is studing`)
    }
}
let stud1 = new student("Ibukun", 2, 3)
stud1.study()
console.log("")

//Example 

class studentResult {
    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study2(){
        console.log(`${this.name} is ${this.age} years Old Scores ${this.gpa}`)
    }
}
let student1 = new studentResult(window.prompt("Enter your Fullname:"),window.prompt("Enter your Age:"),window.prompt("Enter your GPA:"))
student1.study2()
console.log("")

let student2 = new studentResult(window.prompt("Enter your Fullname:"),window.prompt("Enter your Age:"),window.prompt("Enter your GPA:"))
student2.study2()
console.log("")

/*
if (student1.gpa>student2.gpa){
    alert(`Hurray! ${student1.name} is the best Student with ${student1.gpa}`)
}else{
    alert(`Hurray! ${student2.name} is the best Student with ${student2.gpa}`)
}
*/

let gpaCase = student1.gpa>student2.gpa;
if (gpaCase){
    alert(`Hurray! ${student1.name} is the best Student with ${student1.gpa}`)
}else{
    alert(`Hurray! ${student2.name} is the best Student with ${student2.gpa}`)
}

