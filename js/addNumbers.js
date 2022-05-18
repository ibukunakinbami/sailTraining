// Declaration Block: 
let num1 = parseInt(prompt("Enter first Number"));
let num2 = parseInt(prompt("Enter second Number"));
const addOperator = document.querySelector("#addNumbers");

// Function Block: Addition of two numbers
addOperator.addEventListener("click", addNumber())

// function addNumber()
function addNumber () {
    let sum = num1 + num2;
    document.querySelector("#output").textContent = sum;
}
function sustractNumber () {
    let substract = num1 - num2;
    document.querySelector("#output").textContent = substract;
}