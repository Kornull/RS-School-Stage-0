const audio = document.querySelector('audio');
const btnPlay = document.querySelector('.btn__play')

let i = 1;
function playAudio() {
  audio.currentTime = 0;
  audio.play();
}
function pauseAudio() {
  audio.pause();
}

btnPlay.addEventListener('click', (ev) => {
  if (i % 2 !== 0) {
    btnPlay.classList.add('play')
    playAudio()
    i++
    console.log(i)
  }
  else if (i % 2 === 0) {
    btnPlay.classList.remove('play')
    pauseAudio()
    i=1
    console.log(i)
  }
})
