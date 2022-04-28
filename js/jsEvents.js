let show = document.getElementById("submit")

//Using ARROW FUNCTION
//show.onclick = ()=> alert("You Won")

//Using Normal FUNCTION syntax

/*
show.onclick = function clickMe (){
    alert("Ibukun is a Winner")
} */

// Or  Using Call Function

show.onclick = clickMe;

function clickMe (){
    alert("Ibukun is a Winner")
}



// onchange
let show2 = document.getElementById("submit2")

show2.onchange = onchangeEvent;

function onchangeEvent (){
    alert("Ibukun is a Fullstack Developer")
}

//onmouseover
let show3 = document.getElementById("move")

show3.onmouseover = onmouseoverEvent;

function onmouseoverEvent (){
    show3.style.backgroundColor = "orange";
    show3.style.borderRadius = "5px";
}

//onmouseout
let show4 = document.getElementById("move")

show4.onmouseout = onmouseoutEvent;

function onmouseoutEvent (){
    show4.style.backgroundColor = "green"; 
}

//onload

