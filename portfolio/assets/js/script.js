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
// Close burger
const navLinks = document.querySelectorAll('.nav__link');
const closeMenu = (event) => {
  if (event.target.classList.contains('nav__link')) {
    backgroundDark.classList.remove('black');
    document.body.classList.remove('blocked');
    burgerIcon.classList.remove('active');
    navMenu.classList.remove('active');
  };
  // console.log(event);
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));

