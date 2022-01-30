const allTitle = document.querySelectorAll('h2');
const btnTheme = document.querySelector('.theme__button');
const heroBg = document.querySelector('.hero')
const contactsBg = document.querySelector('.contacts')
const nav = document.querySelector('nav')
const navLin = document.querySelectorAll('a')


export function colorTheme() {
   btnTheme.addEventListener('click',(event)=>{

     document.body.classList.toggle('light__theme');
     heroBg.classList.toggle('light__theme');
     contactsBg.classList.toggle('light__theme');
     nav.classList.toggle('light__theme');
     console.log(navLin)
     allTitle.forEach(el=>{
      el.classList.toggle('light__theme')
     })
    navLin.forEach(el=>{
      el.classList.toggle('light__theme')
    })
    })
}
