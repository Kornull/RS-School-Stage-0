const url = 'https://api.unsplash.com/search/photos?query=forest&per_page=30&orientation=landscape&client_id=Z1N0SeXp8Y6iG-yUf37EhP3ElsRfHdsLnfKmkV8leng';
const galleryContainer = document.querySelector('.img__galery')
const img = document.createElement('img');

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  a = data.results
  a.map((x, i) => {

    const img = document.createElement('img');
    img.classList.add('gallery-img')
    img.src = `${x.urls.regular}`;
    img.alt = `image`;
    galleryContainer.append(img);
  })
}
getData();

