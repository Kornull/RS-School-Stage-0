const allTitle = document.querySelectorAll('h2');
const btnTheme = document.querySelector('.theme__button');
const heroBth = document.querySelector('.header__button-lang')
const heroBthLang = document.querySelectorAll('.lang')
const heroBg = document.querySelector('.hero')
const bgDark = document.querySelector('.background__dark')
const sectBefAft = document.querySelectorAll('.section__title')
const contactsBg = document.querySelector('.contacts')
const nav = document.querySelector('nav')
const navLin = document.querySelectorAll('.nav__link')
const logo = document.querySelector('.logo__svg')
const logoLink = document.querySelectorAll('.icon')
const myLink = document.querySelectorAll('.my__link')
const burger = document.querySelector('.burger')

const arr = [heroBg, nav, heroBth, contactsBg]
export function colorTheme() {
  console.log(arr)
  btnTheme.addEventListener('click', (event) => {
    document.body.classList.toggle('light__theme');
    bgDark.classList.toggle('none')
    logo.classList.toggle('black--svg')
    burger.classList.toggle('bg--black')


    sectBefAft.forEach(el=> el.classList.toggle('bg--black'))
    arr.forEach(el => el.classList.toggle('light__theme'))
    allTitle.forEach(el => el.classList.toggle('light__theme')
    )
    heroBthLang.forEach(el => el.classList.toggle('black--text'))
    navLin.forEach(el => el.classList.toggle('light__theme'))
    logoLink.forEach(el => el.classList.toggle('black--svg'))
    myLink.forEach(el => el.classList.toggle('black--text'))

  })
}
