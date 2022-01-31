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
const arr = [heroBg, nav, heroBth, contactsBg]
export function colorTheme(theme) {
  if(theme==='light'){
    i = 0;
    document.body.classList.add('light');
    bgDark.classList.add('none');
    logo.classList.add('black--svg');
    burger.classList.add('bg--black');
    btnTheme.classList.add('active')
    inputTextarea.classList.add('input--bg')



    btnPortfolio.forEach(el=>el.classList.add('gold'))
    btnPrice.forEach(el=>el.classList.add('shadow'))
    sectBefAft.forEach(el => el.classList.add('bg--black'));
    arr.forEach(el => el.classList.add('light'));
    allTitle.forEach(el => el.classList.add('light'));
    btn.forEach(el => el.classList.add('light--btn')
    );
    heroBthLang.forEach(el => el.classList.add('black--text'));
    navLin.forEach(el => el.classList.add('light'));
    logoLink.forEach(el => el.classList.add('black--svg'));
    myLink.forEach(el => el.classList.add('black--text'));
    console.log(input)
    input.forEach(el=>el.classList.add('input--bg'))
  } if (theme==='dark') {
    i = 1;
    document.body.classList.remove('light');
    bgDark.classList.remove('none');
    logo.classList.remove('black--svg');
    burger.classList.remove('bg--black');
    btnTheme.classList.remove('active')
    inputTextarea.classList.remove('input--bg')



    btnPortfolio.forEach(el=>el.classList.remove('gold'))
    btnPrice.forEach(el=>el.classList.remove('shadow'))
    sectBefAft.forEach(el => el.classList.remove('bg--black'));
    arr.forEach(el => el.classList.remove('light'));
    allTitle.forEach(el => el.classList.remove('light'));
    btn.forEach(el => el.classList.remove('light--btn')
    );
    heroBthLang.forEach(el => el.classList.remove('black--text'));
    navLin.forEach(el => el.classList.remove('light'));
    logoLink.forEach(el => el.classList.remove('black--svg'));
    myLink.forEach(el => el.classList.remove('black--text'));
    console.log(input)
    input.forEach(el=>el.classList.remove('input--bg'))
  }
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
let theme = 'dark'
export function setLocalStorage() {
  btnTheme.addEventListener('click', (event) => {

    if (i%2===0) {
      theme = 'dark'
    }if(i%2!==0){
      theme = 'light';
    }
    console.log(i)
    i++;
    localStorage.setItem('theme', theme);
  })
}
window.addEventListener('beforeunload', setLocalStorage)
export function getLocalStorage() {
  if(localStorage.getItem('theme')) {
    const theme = localStorage.getItem('theme');
    colorTheme(theme);
  }
}
window.addEventListener('load', getLocalStorage)