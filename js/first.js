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
var names = ["Ibukun", "Tolu", 5, "Wale", "Sola"]
//Assesing Numeric Array
console.log("Value of Zero Index is " + names[0])
console.log("Value of 2nd Index is " + names[2])
console.log("")

//Declaring Associative Array
var collections = {
    fruit: "Mango",
    age: 35,
    state: "Ekiti",
    governor: "Fayemi"
}
//Assesing Associate Array 
console.log(collections.state)
console.log("")
console.log(collections["age"])
console.log("")

//Declaring Multidimentional Array
var data = [{
        sex: "male",
        name: "Jeff"
    },
    {
        sex: "female",
        name: "Tunde"
    },
    {
        sex: "male",
        name: "Taylor"
    },
    {
        sex: "female",
        name: "Madison"
    }
];
console.log(data[2].name)
console.log("")

//Thursday, 31st March, 2022
//To Display Current Time and Date
var currentDateAndTime = new Date;
console.log("Current Date and Time is " + currentDateAndTime)
console.log("")

var firstNumber = 100;
var secondNumber = 20;
var result = (firstNumber - secondNumber)
console.log(result)
console.log("")

//BOOLEAN TYPE
var rightAnswer = true;
console.log("Right Answer is " + rightAnswer)
console.log("")

var wrongAnswer = false;
console.log("Wrong Answer is " + wrongAnswer)
console.log("")

//! is the negation i.e opposite of first Statement
var morningGreeting = true;
console.log(!morningGreeting)
console.log("")

var isMorning = true;
var isAfternoon = !isMorning;
console.log(isAfternoon)
console.log("")
var isEvening = !isMorning;
console.log(!isEvening)
console.log("")

// single =  and === are used for Assignment and Comaparison respectively
var bigNumber = "3";
var smallNumber = 3;
var result = (bigNumber === smallNumber)
console.log(result)
console.log("")

var go = true;
var stop = false;
var slowDown = go !== stop;
console.log("Output of slowDown is " + slowDown)
console.log("")

//Exercise 1
var petName = "Jessie";
var breed = "Labrador";
var age = 3;
var petDescription = (petName + "-" + breed + "," + age)
console.log("Content of petDescrition is " + petDescription)
console.log("")

//Exercise 2
var age = 3;
var humanAge = age * 7;
console.log("She is " + humanAge + " years Old")
console.log("")

//Exercise 3
var numberOfWaterTaken = 5;
var timeDifference = "3 hours";
var result = ("Water Consumption: " + numberOfWaterTaken)
var result2 = ("Time Difference: " + timeDifference)
console.log(result)
console.log("")
console.log(result2)
console.log("")

//Exercise 4
var availableCars = 35;
var garageSize = 20;
var readyToPark = garageSize < availableCars;
console.log(readyToPark)
console.log("")

//Exercise 5
var minimum = 5;
var maximum = 10;
console.log(minimum < maximum)
console.log("")
console.log(maximum < minimum)
console.log("")

//Exercise 6
var currentBatteryLevel = 40;
var lowBattery = currentBatteryLevel <= 20;
console.log("My Android Battery Level is " + lowBattery)
console.log("")

//Exercise 7
var currentPhoneBatteryLevel = "15%";
var lowPhoneBattery = currentPhoneBatteryLevel <= "30%";
console.log("Battery low: " + lowPhoneBattery)
console.log("")

//Exercise 8
var candidateOnePoint = 15;
var pointToQualify = 10;
console.log(candidateOnePoint >= pointToQualify)
console.log("")

//Exercise 9
//Check if solved is less than or equal to minimum provided 
//solved to be 20 and minimum 10
var minimum = 10;
var solved = 20;
var result = solved <= minimum;
console.log(result)
console.log("")
console.log(!result)
console.log("")

//Exercise 10
var position = "last";
var expected = "first";
var result = position !== expected;
console.log(result)
console.log("")

//Exercise 11
// In  a problem description give me the console output
//given the variable age is 19,what is the driving age? if the
//expected age to drive is 16
var myAge = 19;
var expectedAgeToDrive = 16;
var result = myAge >= expectedAgeToDrive;
console.log(result + "," + " Am qualified to drive")
console.log("")

//CONDITIONAL STATEMENT IN JAVASCRIPT
//Example 1
//Question:Provide a condotion to be true with an Output number of days

if (true) {
    console.log("Number of Days: 10");
}
console.log("")

/*
if (false){
    console.log("Number of Days: 10");
}
console.log("")
*/

//Example 2
/*Using the if statement provide the comparison between two 
variables highTemperature and LowTemperatute with the value
40 and 10 degree Celcius respectively to be true if 
lowTemperature is less than highTemperature
*/

var highTemperature = "40";
var lowTemperature = "10";
var statusTemperature = lowTemperature < highTemperature
if (statusTemperature) {
    console.log(statusTemperature)
}
console.log("")

//Monday, 4th April, 2022
//To Display Current Time and Date
var currentDateAndTime = new Date;
console.log("Current Date and Time is " + currentDateAndTime)
console.log("")

//if else Conditional Statement

//Example 1

var isMorning = false;
if (isMorning === true) {
    console.log("Response is " + 2 + " hence, condition is True")
} else {
    console.log(1 + " Condition is False")
}
console.log("")

//Example 2

//If it is day, we want the bulb to be Switched OFF but if it is nighty we want the bulb to switched ON, 
//using if statement display Switched ON on the Console.

var nightTime = true;
if (nightTime) {
    console.log("The Bulb is Switched ON" + " because it is Night Time")
} else {
    console.log("The Bulb is Switched OFF" + " because it is Day Time")
}
console.log("")

// The ELSE statement, doesn't need its own condition because it handles cases whereby the IF statement is FALSE

//Example 3
// if variable isSubscribed is TRUE and if Condition display enjoy 10% off, while that of the else display become a 
//Subscriber, what is going to be at display in the console

var isSubscribed = false;
if (isSubscribed) {
    console.log("Enjoy 10% discount")
} else {
    console.log("Become a Subscriber")
}
console.log("")

//Example 4
//Complete IF and ELSE statement in order to display HOMEFLIX and SKIP THE BALL, if a variable rating has a value
//of 57, and if statement  has a condition of the rating to be greater than or equal to 90, displaying buy 
//movie ticket
var rating = 89.99;
if (rating >= 90) {
    console.log("Buy a movie Ticket")
} else {
    console.log("Homeflix and Skip the Ball")
}
console.log("")

//The ELSE IF Statement can appear as many times as possible while the ELSE statement appears ONCE.
//The ELSE IF statement is always come with condition unlike the else statement, that only has the code block

//Example 5

var timeOfDay = 2467;
if (timeOfDay < 12) {
    console.log("Good Morning!")
    // alert("Good Morning!")
} else if (timeOfDay < 16) {
    console.log("Good Afternoon!")
} else if (timeOfDay < 21) {
    console.log("Good Evening!")
} else if (timeOfDay <= 23.59) {
    console.log("Good Night!")
} else {
    console.log("Invalid Input")
}
console.log("")

//Example 6
//What will the code display in the console given variable score stored  to be 75, and the if statetement greater
//than 70 displays YOU PASSED, else if greater than 90 displays YOU GOT AN A!
//With additional else if statement, that is greater than 98 displays A+. review your console if the else statement 
//says TRY AGAIN for every other options

var score = 90;
if (score >= 98) {
    console.log("A+")
} else if (score >= 90) {
    console.log("YOU GOT AN A")
} else if (score >= 70) {
    console.log("YOU PASSED")
} else {
    console.log("TRY AGAIN")
}
console.log("")

//Example 7
//What does this code display in the console if a
//variable cards has a value of 3, and is later reduced
//by 6

var cards = 3;
// cards = cards -6;
cards -= 6;
console.log(cards)
console.log("")

//Example 8
//write a lesser code in order to display the addition
//of 4 buckets to current number of bucket which is 31

var bucket = 31;
bucket += 4;
console.log(bucket + " buckets")
console.log("")

//WHILE LOOP

var biro = true;
while(biro){
    console.log("blue")
    biro = false;
}
console.log("")

var biro <= 10;
while(biro){
    console.log("blue")
}
console.log("")