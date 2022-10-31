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
} else if (gamer < computer){
  text.innerHTML = "¡Ha ganado el Ejército del mal! Vuelve a intentarlo."
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
 
}



//evento
btn.addEventListener("click", handleClick);
