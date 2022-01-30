const allTitle = document.querySelectorAll('h2');
const btnTheme = document.querySelector('.theme__button');
const heroBg = document.querySelector('.hero')
const bgDark = document.querySelector('.background__dark')
const contactsBg = document.querySelector('.contacts')
const nav = document.querySelector('nav')
const navLin = document.querySelectorAll('.nav__link')
const logo = document.querySelector('.logo__svg')
const logoLink = document.querySelectorAll('.icon')
const myLink = document.querySelectorAll('.my__link')
const burger = document.querySelector('.burger')


export function colorTheme() {
  btnTheme.addEventListener('click', (event) => {
    document.body.classList.toggle('light__theme');
    bgDark.classList.toggle('none')
    heroBg.classList.toggle('light__theme');
    contactsBg.classList.toggle('light__theme');
    nav.classList.toggle('light__theme');
    logo.classList.toggle('black--svg')
    burger.classList.toggle('bg--black')
    allTitle.forEach(el => el.classList.toggle('light__theme')
    )
    navLin.forEach(el => el.classList.toggle('light__theme'))
    logoLink.forEach(el => el.classList.toggle('black--svg'))
    console.log(myLink)
    myLink.forEach(el=> el.classList.toggle('black--text'))

  })
}
