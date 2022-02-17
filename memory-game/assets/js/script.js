const cards = document.querySelectorAll('.card')
document.querySelector('.reset').addEventListener('click', resetCard)
let hasFlipCard = false;
let blockCard = false;
let cardlist = [];
let oneCard, twoCard;

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

function randomCard() {
  cards.forEach(x => {
    let randomNumb = Math.floor(Math.random() * cardlist.length);
    x.style.order =randomNumb
  })
}



randomCard()