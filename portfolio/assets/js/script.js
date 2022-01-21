"use strict";
// Burger
const backgroundDark = document.querySelector('.backgroundDark')
const burgerIcon = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
const backgroundColor = document.querySelector('.bacgroundBlack');
if (burgerIcon) {
  burgerIcon.addEventListener('click', function () {
    backgroundDark.classList.toggle('black');
    document.body.classList.toggle('blocked');
    burgerIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
  })
}


