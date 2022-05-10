const playerText = document.querySelector("#player")
const computerText = document.querySelector("#computer")
const resultText = document.querySelector("#result")
const choiceBtn = document.querySelectorAll(".btnChoice")
let player;
let computer;
let result;

choiceBtn.forEach((button)=> button.addEventListener("click", ()=>{
    player = button.textContent;
    computerTurn()
}))

function computerTurn(){
    const randNum = Math.floor(Math.random()*3)*1;
    console.log(randNum)
}