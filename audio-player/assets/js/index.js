const btnPlay = document.querySelector('.btn__play');
const btnPrev = document.querySelector('.btn__left');
const btnNext = document.querySelector('.btn__right');
const imgMusic = document.querySelector('.atrist__image')

let numTrack = 0
const music = [
  '../assets/audio/Bring Me The Horizon - Kingslayer.mp3',
  '../assets/audio/Children of Bodom - Oops! I Did It Again.mp3',
   '../audio/Malia J - Smells Like Teen Spirit.mp3',
]
let i = 1;
const audio = new Audio();




btnPlay.addEventListener('click', (ev) => {
  if (i % 2 !== 0) {
    btnPlay.classList.add('play');

    playAudio();
    i++;
  }
  else if (i % 2 === 0) {
    btnPlay.classList.remove('play');
    pauseAudio();
    i = 1
  }
})
btnNext.addEventListener('click', (ev) => {
  numTrack++;
  if (numTrack > music.length - 1) {
    numTrack = 0;
  }
  i+=2;
  console.log('i++',i)
  playAudio(music[numTrack]);
})

btnPrev.addEventListener('click', (ev) => {
  numTrack--;
  if (numTrack < 0) {
    numTrack = music.length-1;
  }
  i-=2;
  if (i<0){i = 2}
  console.log('i--',i)
  playAudio(music[numTrack]);
})



function playAudio() {
  audio.src = music[numTrack];
  audio.currentTime = 0;
  audio.play();
  imgMusic.src=`../assets/img/imgMusic/${numTrack}.jpg`
}
function pauseAudio() {
  audio.pause();
}