const cards = document.querySelectorAll('.card');
const countClick = document.querySelector('.click__count');
const sec = document.querySelector('.sec');
const btnRun = document.querySelector('.reset');
const level = document.querySelector('.table__records');
const happen = document.querySelector('.count__clicks');

let hasFlipCard = false;
let blockCard = false;
let cardlist = [];
let oneCard, twoCard;;
let click = 0;
let numb = 1;
let count = 0;
let localNumb = 0;


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
  console.log(count, 'count')
  if (count === cardlist.length / 2) {
    winGame(click);
    setLocalStorage(click);
    getLocalStorage();
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

  level.innerHTML = ''
  getLocalStorage();
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

function setLocalStorage(click) {
  numb++;
  localStorage.setItem(`${numb}`, click);
  if (numb > 10) {
    numb = 1;
  }
}

let getList = {};
let i = 1;
function getLocalStorage() {
  for (let key in localStorage) {
    if (Number(key)) {
      getList[key] = localStorage.getItem(key);

      const div = document.createElement('div');
      const p = document.createElement('p');
      p.innerHTML = `${i} game: ${localStorage.getItem(i)}`;
      level.append(div);
      div.append(p);
      i++;
    }
  }console.log(getList);
}
getLocalStorage();
randomCard();
