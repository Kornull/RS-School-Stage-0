const btnPlay = document.querySelector('.btn')
// const btnPlay = document.querySelector('.pause')
// const btnPlay = document.querySelector('.btn')



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
  btnPlay.classList.add('play');
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
// 