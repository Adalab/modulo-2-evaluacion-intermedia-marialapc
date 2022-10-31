'use strict'


//variables
const btn = document.querySelector('.js-btn');
const select = document.querySelector('.js-select');
const result = document.querySelector('.js-result');




//funciones

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

   const computer = () => {
    const randomNUmber = getRandomNumber(6);
    console.log(randomNUmber);
}


//funcion manejadora
function handleClick(e) {
    e.preventDefault();
    computer();
}
  
//evento
   btn.addEventListener('click', handleClick);