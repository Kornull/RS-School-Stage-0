const birdImages = [
  'drozd',
  'forest',
  'javoronok',
  'slavka',
  'solovey',
  'zarynka',
  'morning',
  'kamishovka'
];

function preloadImages() {
  let img = new Image();
  for (let i = 0; i < birdImages.length-1;i++){
    img.src = `./assets/img/birdImg/${birdImages[i]}.jpg`;
      }
  }


preloadImages();