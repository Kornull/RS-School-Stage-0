const btnPlay = document.querySelector('.btn__play--pause');
const classes = document.querySelectorAll('[data-set]');
const birdList = document.querySelector('.bird__list')
const birdName = document.querySelectorAll('[data-set]')

const birdSong = [
  { 'drozd': './assets/audio/drozd.mp3' },
  { 'javoronok': './assets/audio/javoronok.mp3' },
  { 'slavka': './assets/audio/slavka.mp3' },
  { 'solovey': './assets/audio/solovey.mp3' },
  { 'zarynka': './assets/audio/zarynka.mp3' },
  { 'forest': './assets/audio/forest.mp3' }
]
// console.log(birdList)
birdName.forEach(x => console.log(x))
birdList.addEventListener('click', (ev) => {
  let clickBird = ev.target.dataset.set
  birdSong.forEach((el) => {
    if (el[clickBird] !== undefined) {
      isPlay = true
      playAudio(el[clickBird]) }
  })
})

let isPlay = false;
const audio = new Audio()

function playAudio(clickBird) {
  audio.src = clickBird
  audio.currentTime = 0;
  if (isPlay === true) {
    btnPlay.classList.add('play');
    audio.play();
  }
  else {
    audio.pause()
  }
}
function pauseAudio() {
  btnPlay.classList.remove('play');
  audio.pause()
}

btnPlay.addEventListener('click', (ev) => {

  console.log('aaaa')
  if (isPlay === false) {
    isPlay = true;
    playAudio();
  }
  else if (isPlay === true) {
    isPlay = false;
    pauseAudio();
  }
})