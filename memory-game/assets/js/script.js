const cards = document.querySelectorAll('.card')

let hasFlipCard = false;
let oneCard, twoCard;

// track click
cards.forEach((x) => {
  x.addEventListener('click', (ev) => {
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
    openClass();
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
  setTimeout(() => {
    oneCard.classList.remove('flip');
    twoCard.classList.remove('flip');
  }, 500);
}
