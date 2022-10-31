"use strict";

//variables
const btn = document.querySelector(".js-btn");
const select = document.querySelector(".js-select");
const text = document.querySelector(".js-text");


//funcion random number
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//raza mala

function getComputerSelection(){       
  const randomNumber = getRandomNumber(5);
  let result = 0;                     
  if (randomNumber === 1 || randomNumber === 2 || randomNumber === 3){
    result = 2;
  } else if  (randomNumber ===4){
    result = 3;
  } else{
    result = 5;
  }

  return result;   ///retorna la fuerza de la raza
};

//raza buena

function getGamerSelection() {
  return parseInt(select.value)
};


//comparacion de las constantes finales
function compare( gamer, computer){
if (gamer > computer){
  text.innerHTML = "¡Ha ganado el Ejército del Bien! Enhorabuena."
  gamerPoints++; //bonus
} else if (gamer < computer){
  text.innerHTML = "¡Ha ganado el Ejército del mal! Vuelve a intentarlo."
  computerPoints++;//bonus
} else{
  text.innerHTML = "Empate"
}
};


//funcion manejadora
function handleClick(e) {
  e.preventDefault();
  const computer = getComputerSelection(); 
  const gamer = getGamerSelection();    
  console.log(gamer);
  console.log (computer);
  compare( gamer, computer)
  //bonus
  renderScore();
  gameOver();
 
}


//BONUS

//contador

let gamerPoints = 0;
let computerPoints = 0;

const gamerPointsElement = document.querySelector (".js-counter-gamer")
const computerPointsElement = document.querySelector (".js-counter-computer")

function renderScore(){
  gamerPointsElement.innerHTML =  `Jugador: ${gamerPoints}`;
  computerPointsElement.innerHTML = `Computer: ${computerPoints}`;
};

//reiniciar cuando llegue a 10 y cambiar el botón
const resetBtn = document.querySelector(".js-reset-btn")
let moves = 0;

function gameOver() {
  moves++;
  if(moves === 10) {
    btn.classList.add("hidden");
    resetBtn.classList.remove("hidden");
// mostrar el ganador
if (gamerPoints > computerPoints) {
  text.innerHTML = "¡Has ganado el juego!"
} else if (gamerPoints < computerPoints) {  
  text.innerHTML = "¡Has perdido el juego!"
  } else {
    text.innerHTML = "¡Empate!"
  }
}
}
// resetear y volver a 0
function handleReset(event){
  event.preventDefault();
  btn.classList.remove("hidden");
  resetBtn.classList.add("hidden");
  gamerPoints = 0;
  computerPoints = 0;
  moves = 0;
  gamerPointsElement.innerHTML =  `Jugador: ${gamerPoints}`;
  computerPointsElement.innerHTML = `Computer: ${computerPoints}`;
  text.innerHTML = "¡Comienza la batalla!";

}


//evento
btn.addEventListener("click", handleClick);
resetBtn.addEventListener("click", handleReset); //bonus
