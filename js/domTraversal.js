document.body.style.backgroundColor = "gray";

//To target first Child of the BODY
let element = document.body;
let child = element.firstElementChild;
console.log(child)
child.style.backgroundColor = "white";

/*
let element2 = document.body;
let child2 = element.lastElementChild;
console.log(child2)
child2.style.backgroundColor = "Maroon";
*/

//To target Next Sibbling
element = document.querySelector("#vegetables");
console.log(element)
let sibling = element.nextElementSibling;
sibling.style.backgroundColor = "white";

//To target Previous Sibbling
element = document.querySelector("#vegetables");
console.log(element)
let sibling2 = element.previousElementSibling;
sibling2.style.backgroundColor = "purple";