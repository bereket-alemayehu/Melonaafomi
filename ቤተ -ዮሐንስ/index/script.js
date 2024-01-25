'use strict';
// const openForm = 

const tips = document.querySelector('.tip');
const btn = document.querySelectorAll('.btns');
const overlay = document.querySelector('.overlay');
const closes = document.querySelector('.close-modal');
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function () {

    tips.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
  )
}  
         
 
const hi = function () {

  tips.classList.add('hidden');
  overlay.classList.add('hidden');
}
closes.addEventListener('click', function () {
  hi();
});
overlay.addEventListener('click', function () {
  hi();
})
document.addEventListener('keydown', function (be) {
  console.log(be.key);
  if (be.key == 'Escape')
    if (!tips.classList.contains('hidden'))
      hi();
})
// const buttons = document.querySelector('.buttons');
// const ac = {
//   kene: ['what is kene?', 'what is geez kene?', 'what is amharic kene?', 'what is the difference between amharic and geez kene?', 'when kene start?'],
// }
// const kene = ['what is kene?', 'what is geez kene?', 'what is amharic kene?', 'what is the difference between amharic and geez kene?', 'when kene start?'];

// const displayButton1 = function (kene) {
//   kene.forEach(function (move) {
//     buttons.innerHTML = '';
//     const html =
//       `
//      <div class="btn1">
//     <div class="button">${move}</div>
//       <div class="button"> ${move}</div>
//       <div class="button">${move}</div>
//   </div>
//     `
//   })
//   buttons.insertAdjacentHTML('afterbegin', html);
// }
// displayButton1(ac.kene);
