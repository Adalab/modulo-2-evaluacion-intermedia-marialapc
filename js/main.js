"use strict";

//variables
const btn = document.querySelector(".js-btn");
const select = document.querySelector(".js-select");
const text = document.querySelector(".js-text");

//funciones

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const computerSelection = () => {
  const randomNumber = getRandomNumber(5);
  console.log(randomNumber);
};

function gamerSelection() {
  const selectValue = select.value;
  console.log(selectValue);

};


//funcion manejadora
function handleClick(e) {
  e.preventDefault();
  computerSelection();
  gamerSelection();
  
  if (computerSelection > gamerSelection) {
    text.innerHTML =  "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
    console.log(" Ha ganado el mal");
  } else if (computerSelection < gamerSelection) {
    text.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
    console.log(" Ha ganado el bien");
  } else if (computerSelection === gamerSelection) {
    text.innerHTML = "Empate.";
    console.log("empate");
  }
}

//evento
btn.addEventListener("click", handleClick);
