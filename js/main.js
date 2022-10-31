'use strict'


//variables
const btn = document.querySelector('.js-btn');
const select = document.querySelector('.js-select');
const result = document.querySelector('.js-result');




//funciones

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

   const computerSelection = () => {
    const randomNumber = getRandomNumber(6);
    console.log(randomNumber);
}

function gamerSelection() {
    const selectValue = select.value;
    console.log(selectValue);
  }

if (computerSelection > gamerSelection) {
    result.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo."


}


//funcion manejadora
function handleClick(e) {
    e.preventDefault();
    computerSelection();
    gamerSelection();
}
  
//evento
   btn.addEventListener('click', handleClick);