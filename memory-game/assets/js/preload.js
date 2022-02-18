
const cardImg = [
  'batman',
  'boom',
  'flask',
  'harly',
  'joker',
  'kaboom',
  'pow',
  'question',
  'smile',
  'sup',
  'wing',
  'wtf',
]

function preloadImg() {
  let img = new Image()
  for (let i = 0; i < 12; i++) {
    img.src = `./assets/img/winner/${i}.png`;
  }
  for (let card of cardImg) {
    img.src = `./assets/img/${card}.png`
  }
}
preloadImg()