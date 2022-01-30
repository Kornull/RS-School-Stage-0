"use strict";

import * as translate from './translate.js';
import * as theme from './theme.js'
// Burger
const navLinks = document.querySelectorAll('.nav__link');
const backgroundDark = document.querySelector('.background__dark')
const burgerIcon = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
if (burgerIcon) {
  burgerIcon.addEventListener('click', function () {
    backgroundDark.classList.toggle('black');
    document.body.classList.toggle('blocked');
    burgerIcon.classList.toggle('active');
    navMenu.classList.toggle('active');
  })
}

// Close burger
const closeMenu = (event) => {
  if (event.target.classList.contains('nav__link')) {
    backgroundDark.classList.remove('black');
    document.body.classList.remove('blocked');
    burgerIcon.classList.remove('active');
    navMenu.classList.remove('active');
  };
  // console.log(event);
}

// Resize window & close menu
window.addEventListener('resize', function () {
  backgroundDark.classList.remove('black');
  document.body.classList.remove('blocked');
  burgerIcon.classList.remove('active');
  navMenu.classList.remove('active');
}, true);


navLinks.forEach((el) => el.addEventListener('click', closeMenu));

translate.setLocalStorage();
translate.getLocalStorage();
translate.getTranslate();
theme.colorTheme();