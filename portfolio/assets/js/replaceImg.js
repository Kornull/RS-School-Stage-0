const portfolioImage = document.querySelectorAll('.work__img');
let btnn = document.querySelector('.btn__portfolio')
// Change images
function changeImage() {
  const portfolioBtns = document.querySelector('.porfolio__buttons');
  portfolioBtns.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn__portfolio')) {
      let seasons = event.target.dataset.season;
      portfolioImage.forEach((el, i) => el.src = `./assets/img/imagesPortfolio/${seasons}/${i + 1}.jpg`
      )
    }
  })
}
changeImage()

// Cache images
const allSeasons = ['winter', 'spring', 'summer', 'autumn'];
function preloadSummerImages() {
  const img = new Image();
  allSeasons.forEach(el =>{
  for(let i = 1; i <= 6; i++) {
    img.src = `./assets/img/imagesPortfolio/${el}/${i}.jpg`;}
  // console.log(img.src)}
  })
}
preloadSummerImages();