var greetings = "Hello World!";
console.log(greetings)
// console.log(greetings)
// console.log(greetings)
console.log("")

var sail = "Developers Cabal"
console.log("")

console.log(sail)
console.log("")

var status = "Watching Netflix";
myStatus = "Relaxing at the Beach";
console.log(myStatus)
console.log("")

var myDressing = "so modest";
myDressing = "High Class";
console.log(myDressing)
console.log("")

/* Variables give the values of other variables */
var defaultStatus = "Hi There";
var status = "Playing Football"
newStatus = defaultStatus;
console.log(newStatus)
console.log("")

// Example 1
var campus = "Senate Building";
var church = "Mission House";
church = campus;
console.log(church)
console.log("")

// Example 2
var temrperature = "100 degree Celcius";
var temrperature = "0 degree Celcius";
console.log(temrperature)
console.log("")

// Variable - Numbers
var facebookLikes = 12,
    facebookLikes = 100;
console.log(facebookLikes)
console.log("")

// Example 1
var instagramLikes = 200;
console.log(instagramLikes + facebookLikes + 400)
console.log("")

// Example 2
var myCalculator = 3;
myCalculator = 4;
console.log(myCalculator / 2)
console.log("")

// var currentYear = document.write(new Date().getFullYear())
// console.log(currentYear)
// console.log("")

// Monday 28th March, 2022

// LENGTH OF A VARIABLE
var adeola = "beautiful";
segun = ("The length of adeola Content is " + adeola.length)
console.log(segun)
console.log("")

//Change of String CASE
var pancho = "lunch"
segun2 = ("The length of pancho Content is " + pancho.length)
console.log(segun2)
console.log("")
segun2 = pancho.toUpperCase()
console.log(segun2)
console.log("")

var colorBlue = "IBUKUN, JOSEPH, AKINBAMI";
var newColor = colorBlue.split(',')
console.log(newColor)
console.log(newColor[1])
console.log("")

var joel = "Parenthesis";
var joel2 = joel.split('')
console.log(joel2)
console.log()
console.log("The content of 4th Index in joel2 is " + joel[3])
console.log("The content of 7th Index in joel2 is " + joel[6])
console.log("The content of 8th Index in joel2 is " + joel[7])
console.log("The content of 11th Index in joel2 is " + joel[10])
console.log("")
console.log("The content of 0th, 4th and 8th Index in joel2 is " + joel2[0] + "  " + joel2[4] + " " + joel2[8])
console.log("")

//Examples of Length method Operations
var sail = "SAIL TECH TALENT PROGRAM BY SENATOR ABIRU";
var sail2 = sail.length - 1;
console.log("The index of last letter of the sentence in sail is " + sail2)
console.log("")

var sail3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. welcome to the SAIL TECH TALENT PROGRAM, where novice are being developed to Junior FULLSTACK DEVELOPER with 6 months duration free of charge. Thanks to Senator Adetokunbo Abiru for the Sponsoring this program";
var sail4 = sail3.length - 1;
console.log("The index of last letter of the sentence in sail3 is " + sail4)
console.log("")

//Tuesday, 29th March, 2022
//Javascript Variables & Data Types
//ADDITION OF TWO NUMBERS
var firstNumber = 10;
var secondNumber = 20;
var result = firstNumber + secondNumber;
console.log("Addition Result is " + result)
console.log("")

//MINUS OF TWO NUMBERS
var firstNumber = 10;
var secondNumber = 20;
var result = firstNumber - secondNumber;
console.log("Substraction Result is " + result)
console.log("")

//MULTIPLICATION OF TWO NUMBERS
var firstNumber = 10;
var secondNumber = 20;
var result = firstNumber * secondNumber;
console.log("Multiplication Result is " + result)
console.log("")

//DIVISION OF TWO NUMBERS
var firstNumber = 10;
var secondNumber = 20;
var result = firstNumber / secondNumber;
console.log("Division Result is " + result)
console.log("")

//MODULUS OF TWO NUMBERS
var firstNumber = 25.5;
var secondNumber = 10;
var result = firstNumber % secondNumber;
console.log("Modulus Result is " + result)
console.log("")

//COMPARISON OPERATORS
//= is Assignment Operator
// == is data values comparison Operator
// === is data types comparison Operator

// = is Assigment 
var firstNumber = 10;
var secondNumber = 20;
console.log(" is " + result)
console.log("")

// == is Value Comparison Operator 
var firstNumber = "20";
var secondNumber = 20;
result = firstNumber == secondNumber;
console.log(result)
console.log("")

// == is Data Value Comparison Operator 
var firstNumber = 20;
var secondNumber = 20;
result = firstNumber == secondNumber;
console.log(result)
console.log("")

// === is Data Type Comparison Operator 
var firstNumber = "20";
var secondNumber = 20;
result = firstNumber === secondNumber;
console.log(result)
console.log("")

//Examples
var firstNumber = "15";
var secondNumber = 5000;
console.log("The Data Type of firstNumber is " + typeof (firstNumber))
console.log("")
console.log("The Data Type of secondNumber is " + typeof (secondNumber))
console.log("")
var thirdNumber = firstNumber * secondNumber;
console.log(thirdNumber)
console.log("")
result = firstNumber + secondNumber;
console.log(result)
console.log("")
result2 = parseInt(firstNumber) + secondNumber;
console.log(result2)
console.log("")

//ARRAY
//Types of Array
//There are 3 types of Array;
//Numeric [], Associative {} and Multidimentional Array

//Declaring Numeric Array
var names = ["Ibukun","Tolu", 5, "Wale", "Sola"]
//Assesing Numeric Array
console.log("Value of Zero Index is " + names[0])
console.log("Value of 2nd Index is " + names[2])
console.log("")

//Declaring Associative Array
var collections = {fruit:"Mango", age:35, state:"Ekiti", governor:"Fayemi"}
//Assesing Associate Array 
console.log(collections.state)
console.log("")
console.log(collections["age"])
console.log("")

//Declaring Multidimentional Array
var data = [
    {sex:"male", name:"Jeff"},
    {sex:"female", name:"Tunde"},
    {sex:"male", name:"Taylor"},
    {sex:"female", name:"Madison"}
];
console.log(data[2].name)

//



