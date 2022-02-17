const cards = document.querySelectorAll('.card')

cards.forEach(x => {
  x.addEventListener('click', (ev) => {x.classList.toggle('flip')
  console.log(x)})
})

