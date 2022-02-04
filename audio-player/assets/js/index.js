const btnPlay = document.querySelector('.btn__play');
const btnPrev = document.querySelector('.btn__left');
const btnNext = document.querySelector('.btn__right');
const imgMusic = document.querySelector('.atrist__image')
const nameArtist = document.querySelector('.name__artist')
const songTitle = document.querySelector('.song__title')
const lengthAudio = document.querySelector('.length')
const timeTrack = document.querySelector('.time__track')
const currentAudio = document.querySelector('.current')
const progress = document.querySelector('.progress')
const slider = document.querySelector('.slider')

let numTrack = 0
const music = [
  './assets/audio/Bring Me The Horizon - Kingslayer.mp3',
  './assets/audio/Children of Bodom - Oops! I Did It Again.mp3',
  './assets/audio/Malia J - Smells Like Teen Spirit.mp3',
  './assets/audio/Slipknot - Unsainted.mp3',
  '/assets/audio/Korn - Cold.mp3'
]
const titleSong = [
  ['Bring Me The Horizon', 'Kingslayer'],
  ['Children of Bodom', 'Oops!'],
  ['Malia J', ' Smells Like Teen Spirit'],
  ['Slipknot', 'Unsainted'],
  ['Korn', 'Cold']
]

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
  console.log('i--', i)
  playAudio(music[numTrack]);
})
// Next track

function nextTrack () {
  numTrack++;
  playAudio(music[numTrack]);
}
// All time track
audio.onloadedmetadata = function () {
  let seconds = Math.floor(audio.duration % 60);
  let minutes = Math.floor(audio.duration / 60);
  lengthAudio.textContent = `${minutes}:${seconds}`
};


function playAudio() {
  audio.src = music[numTrack];
  // audio.currentTime = 0;
  audio.play();
  nameArtist.textContent = titleSong[numTrack][0]
  songTitle.textContent = titleSong[numTrack][1]
  imgMusic.src = `./assets/img/imgMusic/${numTrack}.jpg`;
}
function pauseAudio() {
  audio.pause();
}
// Progress bar runing
function progerssBar(ev) {
  const { duration, currentTime } = ev.target
  let progBar = Math.floor(100 / duration * currentTime);
  progress.style.width = `${progBar}%`
}
audio.addEventListener('timeupdate', progerssBar)


function timeProgressBar(ev) {
  const width = timeTrack.clientWidth
  const click = ev.offsetX
  const duration = audio.duration
  audio.currentTime = (duration / width) * click;
  console.log(width)
  console.log(click)
}


timeTrack.addEventListener('click', timeProgressBar)
audio.addEventListener('ended', nextTrack)