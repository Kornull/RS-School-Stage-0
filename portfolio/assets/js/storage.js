let lang = 'en'
let theme = 'dark'
const langBtn = document.querySelector('.header__button-lang')
export function setLocalStorage() {
  langBtn.addEventListener('click', (event) => {
    if (event.target.classList.contains('ru__lang')) {
      lang = 'ru'
    }
    if (event.target.classList.contains('en__lang')) {
      lang = 'en'
    }
    localStorage.setItem('lang', lang);
  })
}
window.addEventListener('beforeunload', setLocalStorage)
export function getLocalStorage() {
  if(localStorage.getItem('lang')) {
    localStorage.getItem('lang');
  }
}
window.addEventListener('load', getLocalStorage)

