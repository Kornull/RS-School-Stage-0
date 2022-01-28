const portfolioImage = document.querySelectorAll('.work__img');
let btnn = document.querySelector('.btn__portfolio')
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