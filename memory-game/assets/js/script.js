const cards = document.querySelectorAll('.card')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
const btnRun = document.querySelector('.reset')
const btnsLevel = document.querySelectorAll('.level')
let hasFlipCard = false;
let blockCard = false;
let cardlist = [];
let oneCard, twoCard;


btnRun.addEventListener('click', ()=>{
  resetCard();
  blockBtns()
  btnRun.disabled = true
})


// track click
cards.forEach((x, i) => {
  cardlist.push(i)
  x.addEventListener('click', (ev) => {
    if (blockCard) return;
    x.classList.add('flip');
    if (!hasFlipCard) {
      hasFlipCard = true;
      oneCard = x;
      return;
    }
    twoCard = x;
    hasFlipCard = false;
    checkCards();
  })

})

// Card matching check
function checkCards() {

  if (oneCard.dataset.comic === twoCard.dataset.comic) {
    setTimeout(() => openClass(), 500);
    return;
  }
  closeCards();
}

// Add class open
function openClass() {
  oneCard.classList.add('open');
  twoCard.classList.add('open');
}

//  Close cards
function closeCards() {
  blockCard = true;
  setTimeout(() => {
    oneCard.classList.remove('flip');
    twoCard.classList.remove('flip');
    blockCard = false;
  }, 500);
}

// Shuffle cards
function randomCard() {
  cards.forEach(x => {
    let randomNumb = Math.floor(Math.random() * cardlist.length);
    x.style.order = randomNumb;
  })
}

// Reset cards
function resetCard() {
  cards.forEach(x => {
    x.classList.remove('open');
    x.classList.remove('flip');
  })
  hasFlipCard = false;
  blockCard = false;
  oneCard = null;
  twoCard = null;
  randomCard();
  timerGame();
}

randomCard();
let time = 1 * 60
function timerGame() {
  let i = 0;
  let m = 0;
  const timerRound =
    setInterval(() => {
      sec.textContent = '00'
      min.textContent = '0'
      time--;
      console.log(time)
      i++;
      if (i < 10) {
        sec.textContent = '0' + i
      } else { sec.textContent = `${i}` }
      if (i === 60) {
        i = 0;
        m++;
        sec.textContent = '00'
        min.textContent = `${m}`
      }
      if (time <= 0) {
        btnsLevel.forEach(x=> x.disabled = false)
        btnRun.disabled = false
        clearInterval(timerRound)
        time = 1 * 60
        return;
      }
    }, 1000)
}

// Blocked btns

function blockBtns () {
  btnsLevel.forEach(x=> x.disabled = true)
}