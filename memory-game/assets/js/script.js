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
let num = 1
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
  count++;
  if (count === cardlist.length / 2) {
    winGame(click);
    game = { click: `${click}` }
    gameList.push(game)
    maxKeyLocal()
    // getLocalStorage();
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

  let imgNum = Math.floor(Math.random() * 11)
  document.querySelector('.winner').src = `/assets/img/winner/${imgNum}.png`;
  setTimeout(() => {
    document.querySelector('.win').classList.remove('wins');
  }, 5000)
}


let i = 0
let keysLocalStorage;

function setLocalStorage(num) {
  console.log(gameList)
  if (gameList.length > 0) {
    localStorage.setItem(`${num++}`, gameList[i++]['click']);
    if (num > 10) {
      num = 1;
    }
  }
}
let numKey = []
function maxKeyLocal() {
  keysLocalStorage = Object.keys(localStorage)
  console.log(keysLocalStorage)
  if (keysLocalStorage.length > 0) {
    for (let key of keysLocalStorage) {
      numKey.push(Number(key))
    }
    numKey.sort();
    let a = numKey.pop();
    a++;
    setLocalStorage(a)
  } else
    setLocalStorage(1)
}

window.addEventListener('beforeunload', setLocalStorage)
// let keys = Object.keys(localStorage)
// console.log(keys.sort())
// function getLocalStorage() {
//   level.innerHTML = ''
//   for (let key of keys) {
//     if (Number(key)) {
//       getList[key] = localStorage.getItem(key);
//       const div = document.createElement('div');
//       const p = document.createElement('p');
//       p.innerHTML = `${key} game: ${localStorage.getItem(key)}`;
//       level.append(div);
//       div.append(p);
//     }
//     console.log(getList);
//   }
// }
randomCard();
setLocalStorage();
// getLocalStorage()