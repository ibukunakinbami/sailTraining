console.log(document)
console.log("")
console.dir(document)
console.log("")
console.log(document.title)
console.log("")

// To Change Title of Webpage
document.title = "Welcome to SAIL"
console.log(document.title)
console.log("")

//To show URL of a website
console.log(document.URL)
console.log("")

/*
To change website address
document.location="http://www.google.com";
console.log("")
*/

//How to Access a node and make changes to it
document.body.style.backgroundColor = "skyblue";
document.body.style.margin = "50px";
document.body.style.color = "white";
document.body.style.fontSize = "0.75rem";

//How to access an HTML element
document.body.style.backgroundColor = "blue";
document.getElementsByClassName("firstP").innerText = "Hello";

document.getElementById("secondP").innerHTML = "Hello";

//Change element background color using id
document.getElementById("myTitle").style.backgroundColor = "green";
// document.getElementById("myTitle").style.boxShadow = "0, 0, 10px, white"
//Center element using id
document.getElementById("myTitle").style.textAlign = "center";
document.getElementById("myTitle").style.width = "500px";

let fruits = document.getElementsByName("fruits");
console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log("")


fruits.forEach(e=>{
    if (e.checked)
    console.log(e.value)
})
console.log("")
/*
// Tuesday, 26th April, 2022
let varCarrot = Array.from(document.getElementsByTagName("li"));
console.log(varCarrot);
varCarrot[0].style.backgroundColor ="green";

//Use must convert list items to array before iteration
let varFruits = Array.from(document.getElementsByTagName("li"));
 varFruits.map((li)=>{
     li.style.backgroundColor = "orange";
     li.style.color = "black";
     li.style.fontSize = "0.75rem";
     li.style.fontWeight = "bold";
 })
 console.log(varFruits);
*/

//querySelector

//Return first item in an Array
let varList = document.querySelector("li")
console.log(varList)
console.log("")
//Return all items in an Array
let varList2 = document.querySelectorAll("li")
console.log(varList2)

//Return item in an by Class Name
document.querySelector(".classname")

//Return item in an by id Name
document.querySelector("#idname")

//Return item in an by attribute Name
document.querySelector(["attributeName"])

