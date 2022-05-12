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
    const randNum = Math.floor(Math.random()*3);
    console.log(randNum)
    switch(randNum){
        case 0:
            computer = "Rocks";
            //console.log("ROCKS")
            break;
        case 1:
            computer = "Paper";
            //console.log("PAPER")
            break;
        default:
            computer = "Scissors";
            //console.log("Scissors")
            break;
    }
}

computerTurn()