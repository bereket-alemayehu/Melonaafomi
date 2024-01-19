"use strict";
const date = document.querySelector(".date");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const AMPM = document.querySelector(".AMPM");
const formContainer = document.querySelector(".form-container");
const startBtn = document.querySelector(".start-btn");
const goodLuck = document.querySelector(".Good-Luck");
const examCont = document.querySelector(".exam-container");
const timeOut = document.querySelector(".timeOut");

setTimeout(() => {
  examCont.style.opacity = "1";
  goodLuck.style.display = "none";
  goodLuck.style.transition = "all 0.5s";
}, 1000);

// setInterval(() => {
//   const time = new Date();

//   let hr = time.getHours() - 7;
//   let min = time.getMinutes();
//   let sec = time.getSeconds();
//   let ampm = hour > 12 ? "AM" : "PM";
//   hr = hr > 12 ? hr - 12 : hr;

//   hr = hr < 10 ? "0" + hr : hr;
//   min = min < 10 ? "0" + min : min;
//   sec = sec < 10 ? "0" + sec : sec;

//   hour.textContent = `${hr}` + `:`;
//   minute.textContent = `${min}` + `:`;
//   second.textContent = `${sec} `;
//   AMPM.textContent = `${ampm}`;
// }, 1000);

/*
time=4000ms;
to hr=4000/1000=Number.parseInt(4/60);=0;
min=time/1000;
 */

const tick = function () {
  let hr = String(Math.trunc(time / 3600)).padStart(2, 0);
  let min = String(
    hr >= 1 ? Math.trunc((time % 3600) / 60) : Math.trunc(time / 60)
  ).padStart(2, 0);
  let sec = String(time % 60).padStart(2, 0);

  date.textContent = `Time Allowed :  ${hr} : ${min} : ${sec}`;
  if (time === 0) {
    clearInterval(timer);
    timeOut.style.display = "block";
    examCont.style.opacity = 0;
  }

  time--;
};
let time = 10; //in second.
tick();
const timer = setInterval(tick, 1000);
