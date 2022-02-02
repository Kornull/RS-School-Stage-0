const btnPlay = document.querySelector('.btn__play');
const btnPrev = document.querySelector('.btn__left');
const btnNext = document.querySelector('.btn__right');
const imgMusic = document.querySelector('.atrist__image')

let numtrack = 0
const music = [
  '/audio-player/assets/audio/Bring Me The Horizon - Kingslayer.mp3',
  '/audio-player/assets/audio/Children of Bodom - Oops! I Did It Again.mp3',
   '/audio-player/assets/audio/Malia J - Smells Like Teen Spirit.mp3'
]
let i = 1;
const audio = new Audio();
function playAudio(num) {
  audio.src = music[numtrack];
  audio.currentTime = 0;
  audio.play();
}
function pauseAudio() {
  audio.pause();
}
btnPlay.addEventListener('click', (ev) => {
  if (i % 2 !== 0) {
    btnPlay.classList.add('play');

    playAudio();
    i++;
    // console.log(i);
  }
  else if (i % 2 === 0) {
    btnPlay.classList.remove('play');
    pauseAudio();
    i = 1
    // console.log(i);
  }
})
btnNext.addEventListener('click', (ev) => {
  numtrack++;
  if (numtrack > music.length) {
    numtrack = 0;
  } btnPlay.classList.add('play');
  i+=2;
  console.log('i++',i)
  playAudio(music[numtrack]);
})

btnPrev.addEventListener('click', (ev) => {
  numtrack--;
  if (numtrack < 0) {
    numtrack = music.length - 1;
  }
  btnPlay.classList.add('play');
  i-=2;
  console.log('i--',i)
  playAudio(music[numtrack]);
})