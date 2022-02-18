const cards = document.querySelectorAll('.card')
const countClick = document.querySelector('.click__count')
const sec = document.querySelector('.sec')
const btnRun = document.querySelector('.reset')
const btnsLevel = document.querySelectorAll('.level')
let hasFlipCard = false;
let blockCard = false;
let cardlist = [];
let oneCard, twoCard;
let click = 0
let numb = 1
let count = 0
let localNumb = 0


document.querySelector('.container__game').addEventListener('click', () => {
  click++;
  countClick.textContent = click
})

btnRun.addEventListener('click', () => {
  resetCard();

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
  count++
  console.log(count, 'count')
  if (count === cardlist.length / 2) {
    console.log('win')
    setLocalStorage(click)
  }
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
  click = 0;
  count = 0;
  countClick.textContent = 0;
  randomCard();
}

randomCard();

function setLocalStorage(click) {
  localStorage.setItem(`${numb++}`, click);
  if (numb > 10) {
    numb = 1
  }
  localCount()
}
window.addEventListener('beforeunload', setLocalStorage)
function localCount() {
  for (let key in localStorage) {
    if (Number(key)) {
      localNumb++
      console.log(`${localNumb}:`, localStorage[key])
    }
  }
}
// console.log(localStorage.key(1))
// console.log(localStorage.length)