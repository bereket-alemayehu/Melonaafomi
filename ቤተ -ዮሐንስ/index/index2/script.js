"use strict";
const buttons = document.querySelector('.buttons');
const account1 = {
  movements: ['what is kene?', 'what is geez kene?', 'what is amharic kene?', 'what is the difference between amharic and geez kene?', 'when kene start?'],
}




const movements = ['what is kene?', 'what is geez kene?', 'what is amharic kene?', 'what is the difference between amharic and geez kene?', 'when kene start?'];

const displayMovements = function (movements) {
  buttons.innerHTML = '';
  movements.forEach(function (mov) {
    const html = ` <div class="btn1">
    <div class="button">${mov}</div>
      <div class="button"> ${mov} </div>
      <div class="button">${mov}</div>
  </div>`

    buttons.insertAdjacentHTML('afterbegin', html);
  })
}
displayMovements(account1.movements);