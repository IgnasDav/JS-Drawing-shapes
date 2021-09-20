"use strict";

const btnAll = document.querySelector(".main__btns");
const btnTriangle = document.querySelector(".btn--triangle");
const btnPyramid = document.querySelector(".btn--pyramid");
const btnReversePyramid = document.querySelector(".btn--reverse--pyramid");
const btnClear = document.querySelector(".btn--clear");
const star = document.querySelector(".fa-star");
const btnDiamond = document.querySelector(".btn--diamond");
const figure = document.querySelector(".figure");
const numInput = document.querySelector(".main__number");

const rows = 5;
// 1) Triangle
function drawTriangle() {
  let string = "";
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= i; j++) {
      string += "* ";
    }
    string += "<br>";
  }
  figure.innerHTML = `${string}`;
}
//2) Pyramid
function drawPyramid() {
  let string = "";
  for (let i = 0; i <= rows; i++) {
    for (let k = 0; k <= rows - i; k++) {
      string += "&nbsp;";
    }
    for (let j = 0; j <= i; j++) {
      string += "* ";
    }
    string += "<br>";
  }
  figure.innerHTML = `${string}`;
}
// 3) Reverse Pyramid
function drawReversePyramid() {
  let string = "";
  for (let i = 0; i <= rows; i++) {
    for (let j = rows - i; j >= 0; j--) {
      string += "* ";
    }
    for (let k = 0; k <= rows; k++) {
      string += "&nbsp;";
    }

    string += "<br>";
  }
  figure.innerHTML = `${string}`;
}

btnTriangle.addEventListener("click", drawTriangle);
btnPyramid.addEventListener("click", drawPyramid);
btnReversePyramid.addEventListener("click", drawReversePyramid);
