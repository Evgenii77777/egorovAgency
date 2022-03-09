import { initializeClock } from "./timer.js";
let deadline = "December 31 2022 00:00:00 GMT+0300";
initializeClock("countdown", deadline);

const form = document.querySelector(".footer__form");
const btn = document.querySelector(".window__successBtn");
const btnClose = document.querySelector(".window__successBtnClose");
const shadow = document.querySelector(".window__shadow");
const input = document.querySelector(".footer__input");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  shadow.classList.add("active");
  input.value = "";
});
btn.addEventListener("click", function () {
  shadow.classList.remove("active");
});
btnClose.addEventListener("click", function () {
  shadow.classList.remove("active");
});
