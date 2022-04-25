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
}

)




