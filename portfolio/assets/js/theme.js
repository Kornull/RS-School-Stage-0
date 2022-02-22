const allTitle = document.querySelectorAll('h2');
const btnTheme = document.querySelector('.theme__button');
const heroBth = document.querySelector('.header__button-lang');
const heroBthLang = document.querySelectorAll('.lang');
const heroBg = document.querySelector('.hero');
const bgDark = document.querySelector('.background__dark');
const sectBefAft = document.querySelectorAll('.section__title');
const contactsBg = document.querySelector('.contacts');
const nav = document.querySelector('nav');
const navLin = document.querySelectorAll('.nav__link');
const logo = document.querySelector('.logo__svg');
const logoLink = document.querySelectorAll('.icon');
const myLink = document.querySelectorAll('.my__link');
const burger = document.querySelector('.burger');
const btn = document.querySelectorAll('.btn-bg');
const btnPortfolio = document.querySelectorAll('.btn__portfolio')
const btnPrice = document.querySelectorAll('.btn__price')
const input = document.querySelectorAll('input')
const inputTextarea = document.querySelector('textarea')

let i = 0
const arr = [btnTheme, heroBth, heroBg, bgDark, contactsBg, nav, logo, burger, inputTextarea]
const allArr = [allTitle, heroBthLang, sectBefAft, navLin, logoLink, myLink, btn, btnPortfolio, btnPrice, input,]
export function colorTheme(theme) {
  if (theme === 'light') {
    i = 0;
    document.body.classList.add('light');
    arr.forEach(el => el.classList.add('light'))

    for (let classes of allArr) {
      classes.forEach(x => x.classList.add('light'))
    }
  } if (theme === 'dark') {
    i = 1;
    document.body.classList.remove('light');
    arr.forEach(el => el.classList.remove('light'))


    for (let classes of allArr) {
      classes.forEach(x => x.classList.remove('light'))
    }
  }
  btnTheme.addEventListener('click', (event) => {
    document.body.classList.toggle('light');

    arr.forEach(el => el.classList.toggle('light'))

    for (let classes of allArr) {
      classes.forEach(x => x.classList.toggle('light'))
    }
  })
}
let theme = 'dark'
export function setLocalStorage() {
  btnTheme.addEventListener('click', (event) => {
    if (i % 2 !== 0) {
      theme = 'light'
    } if (i % 2 === 0) {
      theme = 'dark';
    }

    localStorage.setItem('theme', theme);
    i++;
  })
}
window.addEventListener('beforeunload', setLocalStorage)
export function getLocalStorage() {
  if (localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    colorTheme(theme);
  }
}
window.addEventListener('load', getLocalStorage)