const logo = document.querySelector('.header__logo')
const btnPlay = document.querySelector('.btn__play--pause');
const classes = document.querySelectorAll('[data-set]');
const birdList = document.querySelector('.bird__list')
const birdName = document.querySelectorAll('[data-set]')

const birdSong = [
  'drozd',
  'javoronok',
  'slavka.',
  'solovey',
  'zarynka',
  'forest'
]

let song = 0;
logo.addEventListener(('click'), () => {
  logo.classList.toggle('active');
  if (logo.classList.contains('active')) {
    isPlay = true;
    song = 4
    playAudio(birdSong[song])
  } else {
    pauseAudio()
  }
})
console.log(birdList)
birdName.forEach(x => console.log(x))
birdList.addEventListener('click', (ev) => {
  let clickBird = ev.target.dataset.set
  birdSong.forEach((el) => {
    if (el[clickBird] !== undefined) {
      isPlay = true
      playAudio(el[clickBird])
    }
  })
})

let isPlay = false;
const audio = new Audio()

function playAudio(numSong) {
  if (numSong === undefined) {
    audio.src = `./assets/audio/forest.mp3`
  } else {
    audio.src = `./assets/audio/${numSong}.mp3`
  }

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
  logo.classList.remove('active');
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