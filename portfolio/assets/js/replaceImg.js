const portfolioBtnWinter = document.getElementById('winter')
const portfolioBtnSpring = document.getElementById('spring')
const portfolioBtnSummer = document.getElementById('summer')
const portfolioBtnAutumn = document.getElementById('autumn')
const portfolioImage = document.querySelectorAll('.work__img')
let allImg = document.getElementsByClassName('work__img')
console.log(allImg.length)

portfolioBtnWinter.addEventListener('click',() => {
  for (let i = 0;i<allImg.length;i++){
    portfolioImage[i].src=`./assets/img/imagesPortfolio/winter/${i+1}.jpg`
  }
})
portfolioBtnSummer.addEventListener('click',() => {
  for (let i = 0;i<allImg.length;i++){
    portfolioImage[i].src=`./assets/img/imagesPortfolio/summer/${i+1}.jpg`
  }
})
portfolioBtnSpring.addEventListener('click',() => {
  for (let i = 0;i<allImg.length;i++){
    portfolioImage[i].src=`./assets/img/imagesPortfolio/spring/${i+1}.jpg`
  }
})
portfolioBtnAutumn.addEventListener('click',() => {
  for (let i = 0;i<allImg.length;i++){
    portfolioImage[i].src=`./assets/img/imagesPortfolio/autumn/${i+1}.jpg`
  }
})