const cards = document.querySelectorAll('.card');
const countClick = document.querySelector('.click__count');
const sec = document.querySelector('.sec');
const btnRun = document.querySelector('.reset');
const level = document.querySelector('.table__records');
const happen = document.querySelector('.count__clicks');

let hasFlipCard = false;
let blockCard = false;
let cardlist = [];
let gameList = [];
let oneCard, twoCard;;
let click = 0;
let count = 0;
let num = 1;
let game;


document.querySelector('.container__game').addEventListener('click', () => {
  click++;
  countClick.textContent = click;
})

btnRun.addEventListener('click', () => {
  resetCard();
})

// track click
cards.forEach((x, i) => {
  cardlist.push(i);
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
  oneCard.style.pointerEvents = 'none'
  twoCard.style.pointerEvents = 'none'
  count++;
  if (count === cardlist.length / 2) {
    winGame(click);
    game = { click: `${click}` };
    gameList.unshift(game);
    if (gameList.length > 10) { gameList.pop() };
    setLocalStorage();
    resetCard();
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
    x.style.pointerEvents = 'auto';
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

// Win image
function winGame(click) {
  happen.textContent = `you spent ${click} moves`;
  document.querySelector('.win').classList.add('wins');

  let imgNum = Math.floor(Math.random() * 11);
  document.querySelector('.winner').src = `./assets/img/winner/${imgNum}.png`;
  setTimeout(() => {
    document.querySelector('.win').classList.remove('wins');
  }, 3000)
}

// Check key localStorage
let keys = Object.keys(localStorage);
keys.sort((a, b) => a - b);
if (keys.length !== 0) {
  num = Number(keys.pop())+1;
}


function numCheck() {
  if (num > 10) {
    num = 1;
  }
}

let i = 0;
function setLocalStorage() {
  numCheck();
  if (gameList.length > 0) {
    localStorage.setItem(`${num}`, gameList[i]['click']);
    num++;

  }
  getLocalStorage();

}


window.addEventListener('beforeunload', setLocalStorage)
let getList = [];
function getLocalStorage() {
  let keys = Object.keys(localStorage)
  keys.sort((a, b) => a - b);
  level.innerHTML = '';
  for (let key of keys) {
    if (Number(key)) {
      getList[key] = localStorage.getItem(key);
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.innerHTML = `${key} game :::: ${localStorage.getItem(key)}`;
      div.classList.add('record__table')
      level.append(div);
      div.append(p);
    }
  }
}
randomCard();
getLocalStorage();