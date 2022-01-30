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


const arr = [heroBg, nav, heroBth, contactsBg]
export function colorTheme() {
  btnTheme.addEventListener('click', (event) => {
    document.body.classList.toggle('light');
    bgDark.classList.toggle('none');
    logo.classList.toggle('black--svg');
    burger.classList.toggle('bg--black');
    btnTheme.classList.toggle('active')
    inputTextarea.classList.toggle('input--bg')



    btnPortfolio.forEach(el=>el.classList.toggle('gold'))
    btnPrice.forEach(el=>el.classList.toggle('shadow'))
    sectBefAft.forEach(el => el.classList.toggle('bg--black'));
    arr.forEach(el => el.classList.toggle('light'));
    allTitle.forEach(el => el.classList.toggle('light'));
    btn.forEach(el => el.classList.toggle('light--btn')
    );
    heroBthLang.forEach(el => el.classList.toggle('black--text'));
    navLin.forEach(el => el.classList.toggle('light'));
    logoLink.forEach(el => el.classList.toggle('black--svg'));
    myLink.forEach(el => el.classList.toggle('black--text'));
    console.log(input)
    input.forEach(el=>el.classList.toggle('input--bg'))
  })
}
