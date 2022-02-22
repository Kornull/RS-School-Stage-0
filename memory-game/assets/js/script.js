const cards = document.querySelectorAll('.card');
const countClick = document.querySelector('.click__count');
const btnRun = document.querySelector('.reset');
const level = document.querySelector('.table__records');
const happen = document.querySelector('.count__clicks');
const lowGame = document.querySelector('.low');
const hardGame = document.querySelector('.hard');
const gameWin = document.querySelector('.win');
const gameTable = document.querySelector('.container__game');
const getList = ['Attempt-a', 'Attempt-B', 'Attempt-C', 'Attempt-D', 'Attempt-E', 'Attempt-F', 'Attempt-G', 'Attempt-H', 'Attempt-I', 'Attempt-J'];
let hasFlipCard = false;
let blockCard = false;
let gameList = [];
let oneCard, twoCard;;
let click = 0;
let count = 0;
let num = 0;
let game;
let cardCount;

hardGame.addEventListener('click', (ev) => {
  ev.target.classList.add('active');
  lowGame.classList.remove('active');
  lightGame();
})

lowGame.addEventListener('click', (ev) => {
  ev.target.classList.add('active');
  hardGame.classList.remove('active');
  lightGame();
})

// Easy/crazy game
function lightGame() {
  gameWin.classList.toggle('light');
  gameTable.classList.toggle('light');
  cards.forEach((x, i) => {
    if (i < 12) { x.classList.toggle('sleep') };
    x.classList.toggle('light');
  });
  resetCard();
}


document.querySelector('.container__game').addEventListener('click', () => {
  click++;
  countClick.textContent = click;
})

btnRun.addEventListener('click', () => {
  resetCard();
})

// track click
cards.forEach((x, i) => {
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
    cards.forEach(x => x.style.pointerEvents = 'none')
    setTimeout(() => {
      cards.forEach(x => x.style.pointerEvents = 'auto')
      openClass()
    }, 700);
    return;
  }
  closeCards();
}

// Add class open
function openClass() {
  if (oneCard.classList.contains('light')) {
    cardCount = 12;
  } else {
    cardCount = 24;
  }

  oneCard.classList.add('open');
  twoCard.classList.add('open');
  oneCard.style.pointerEvents = 'none';
  twoCard.style.pointerEvents = 'none';

  count++;
  if (count === cardCount / 2) {
    winGame(click);
    game = { click: `${click}` };
    gameList.unshift(game);
    if (gameList.length > 10) { gameList.pop() };
    setLocalStorage();
    setTimeout(() => {
      resetCard()
    }, 2000)
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
  cardCount = 24
  cards.forEach(x => {
    let randomNumb = Math.floor(Math.random() * cardCount);
    x.style.order = randomNumb;
  })
}

// Reset cards
function resetCard() {
  cards.forEach(x => {
    x.classList.remove('open');
    x.classList.remove('flip');
    x.style.pointerEvents = 'auto';
  });
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
  }, 4000)
}

// Check key localStorage
let keys = Object.keys(localStorage);
if (keys.length !== 0) {
  keys.forEach(x => {
    if (getList.includes(x)) { num++ }
  })
}

// Check last number localStorage
function numCheck() {
  if (num > 9) {
    num = 0;
  }
}
const arr = ['a', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

let i = 0;
function setLocalStorage() {
  if (num > 9) {
    num = 0;
  }
  if (gameList.length > 0) {
    localStorage.setItem(`Attempt-${arr[num]}`, gameList[i]['click']);
    num++;

  }
  getLocalStorage();
}



function getLocalStorage() {
  let j = 1
  let keys = Object.keys(localStorage)
  keys.sort()
  level.innerHTML = '';
  for (let key of keys) {
    if (getList.includes(key)) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.innerHTML = `${key.replace(key[key.length - 1], j++)} :::: ${localStorage.getItem(key)}`;
      div.classList.add('record__table')
      level.append(div);
      div.append(p);
      if (j > 10) {
        j = 1
      }
    }
  }
}
randomCard();
getLocalStorage();