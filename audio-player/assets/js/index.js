const btnPlay = document.querySelector('.btn__play');
const btnPrev = document.querySelector('.btn__left');
const btnNext = document.querySelector('.btn__right');
const imgMusic = document.querySelector('.atrist__image');
const nameArtist = document.querySelector('.name__artist');
const songTitle = document.querySelector('.song__title');
const lengthAudio = document.querySelector('.length');
const timeTrack = document.querySelector('.time__track');
const currentAudio = document.querySelector('.current');
const progress = document.querySelector('.progress');
const condition = document.querySelector('.condition__player')
let seconds;
let minutes;

let numTrack = 0;
const music = [
  './assets/audio/Bring Me The Horizon - Kingslayer.mp3',
  './assets/audio/Children of Bodom - Oops! I Did It Again.mp3',
  './assets/audio/Malia J - Smells Like Teen Spirit.mp3',
  './assets/audio/Slipknot - Unsainted.mp3',
  './assets/audio/Korn - Cold.mp3'];
const titleSong = [
  ['Bring Me The Horizon', 'Kingslayer'],
  ['Children of Bodom', 'Oops!'],
  ['Malia J', ' Smells Like Teen Spirit'],
  ['Slipknot', 'Unsainted'],
  ['Korn', 'Cold']
];

let i = 1;
const audio = new Audio();
// Start/Stop player
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

//  Run next track
btnNext.addEventListener('click', (ev) => {
  numTrack++;

  if (numTrack > music.length - 1) {
    numTrack = 0;
  }
  btnPlay.classList.add('play');
  i = 2;
  playAudio(music[numTrack]);
})

// Run prev track
btnPrev.addEventListener('click', (ev) => {
  numTrack--;
  if (numTrack < 0) {
    numTrack = music.length - 1;
  }
  btnPlay.classList.add('play');
  i = 2;
  playAudio(music[numTrack]);
})

// All time track
audio.onloadedmetadata = function () {
  seconds = Math.floor(audio.duration % 60);
  let minutes = Math.floor(audio.duration / 60);
  lengthAudio.textContent = `${minutes}:${seconds}`
};

// Play
function playAudio() {
  audio.src = music[numTrack];
  audio.play();
  timerTrack()
  nameArtist.textContent = titleSong[numTrack][0]
  songTitle.textContent = titleSong[numTrack][1]
  condition.textContent = 'Play'

  imgMusic.src = `./assets/img/imgMusic/${numTrack}.jpg`;
}
// Stop
function pauseAudio() {
  condition.textContent = 'Stop'
  audio.pause();
}

// Progress bar runing
function progerssBar(ev) {
  const { duration, currentTime } = ev.target
  let progBar = Math.floor(100 / duration * currentTime);
  progress.style.width = `${progBar}%`
}

// Click progress bar
function timeClickProgressBar(ev) {
  const width = timeTrack.clientWidth;
  const click = ev.offsetX;
  const duration = audio.duration;
  audio.currentTime = (duration / width) * click;
  // Time click
  if (click) {
    minutes = Math.floor(((duration / width) * click) / 60);
    seconds = Math.floor(((duration / width) * click) % 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    currentAudio.textContent = `${minutes}:${seconds}`;
  }
}

// Next track
function nextTrack() {
  numTrack++;
  if (numTrack > music.length - 1) {
    numTrack = 0;
  }
  playAudio(music[numTrack]);
}
// Timer audio

function timerTrack() {
  setInterval(() => {
    let sec = Math.floor((audio.currentTime % 60));
    let min = Math.floor((audio.currentTime / 60));
    if (sec < 10) {
      sec = `0${sec}`;
    }
    currentAudio.textContent = `${min}:${sec}`;
  }, 1000);
}


timeTrack.addEventListener('click', timeClickProgressBar)
audio.addEventListener('ended', nextTrack)
audio.addEventListener('timeupdate', progerssBar)
