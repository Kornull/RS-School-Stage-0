const birdImages = [
  'drozd',
  'forest',
  'javoronok',
  'slavka',
  'solovey',
  'zarynka'
];

function preloadImages() {
  let img = new Image();
  for (let i = 0; i < birdImages.length;i++){
    img.src = `./img/birdImg/${birdImages[i]}.jpg`;
  }
}

preloadImages();