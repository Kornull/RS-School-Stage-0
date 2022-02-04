const btnPlay = document.querySelector('.btn');
const classes = document.querySelectorAll('[data-set]');

const birdSong = [
  {'drozd':'drozd.mp3'},
  {'javoronok':'javoronok.mp3'},
  {'slavka':'slavka.mp3'},
  {'solovey':'solovey.mp3'},
  {'zarynka':'zarynka.mp3'},
  {'forest':'forest.mp3'}
]

let isPlay = false;
const audio = new Audio()

function playAudio() {
  audio.src = "/assets/audio/forest.mp3"
  audio.currentTime = 0;
  if (isPlay === true) {
    audio.play();
  }
  else {
    audio.pause()
  }
}
function pauseAudio() {
  audio.pause()
}

btnPlay.addEventListener('click', (ev) => {

  console.log('aaaa')
  if (isPlay === false) {
    isPlay = true;
    btnPlay.classList.add('play');
    playAudio();
  }
  else if (isPlay === true) {
    isPlay = false;
    btnPlay.classList.remove('play');
    pauseAudio();
  }
})