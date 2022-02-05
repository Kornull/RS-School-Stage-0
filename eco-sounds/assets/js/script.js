const logo = document.querySelector('.header__logo');
const btnPlay = document.querySelector('.btn__play--pause');
const birdList = document.querySelector('.bird__list');
const birdItem = document.querySelectorAll('.bird-item');
const mainBg = document.querySelector('.main');
const audio = new Audio();
let isPlay = false;
let clickBird;

// Logo click
logo.addEventListener(('click'), () => {
  cleanList();
  logo.classList.toggle('active');
  if (logo.classList.contains('active')) {
    isPlay = true;
    playAudio('forest');
  } else {
    pauseAudio();
  }
})

// Selection of bird sounds
birdList.addEventListener('click', (ev) => {
  clickBird = ev.target.dataset.set;
  logo.classList.remove('active');
  cleanList();
  ev.target.classList.add('play');
  isPlay = true;
  playAudio(clickBird);
})


// Button start/stop
btnPlay.addEventListener('click', (ev) => {
  // class check
  for (let i of birdItem) {
    if (i.classList.contains('play')) {
      clickBird = i.dataset.set;
    }
  }
  if (logo.classList.contains('active')) { clickBird = 'forest' };

  if (isPlay === false) {
    isPlay = true;
    playAudio(clickBird);
  }
  else if (isPlay === true) {
    isPlay = false;
    pauseAudio();
  }
})

// Run player
function playAudio(numSong) {
  if (numSong === undefined) {
    audio.src = `./assets/audio/forest.mp3`;
  } else {
    audio.src = `./assets/audio/${numSong}.mp3`;
    mainBg.style.backgroundImage = `url('./assets/img/birdImg/${numSong}.jpg')`;
  }
  if (isPlay === true) {
    btnPlay.classList.add('play');
    audio.play();
  }
  else {
    audio.pause();
  }
}
function pauseAudio() {
  btnPlay.classList.remove('play');
  audio.pause();
}

function cleanList() {
  birdItem.forEach(el => el.classList.remove('play'));
}

// Turn off btn
function uncklickBtn() {
  // console.log(btnPlay.classList.contains('play'))
  let interval = setInterval(() => {
    if (!btnPlay.classList.contains('play')) { return clearInterval(interval) };
    let sec = Math.floor((audio.currentTime));
    let min = Math.floor((audio.duration));
    // if (sec < min) {
    //   console.log(`${min}:${sec}`);
    // }
    if (sec === min) {
      clearInterval(interval);
      return pauseAudio();
    }
  }, 1000);

}

btnPlay.addEventListener('click', uncklickBtn);