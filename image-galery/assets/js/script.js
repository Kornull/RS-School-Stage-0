const url = 'https://api.unsplash.com/search/photos?query=forest&per_page=30&orientation=landscape&client_id=Z1N0SeXp8Y6iG-yUf37EhP3ElsRfHdsLnfKmkV8leng';
const galleryContainer = document.querySelector('.img__galery')
async function getData() {


  const res = await fetch(url);
  const data = await res.json();
  a = data.results
  a.map((x) => {
    const div = document.createElement('div');
    const img = document.createElement('img');
    div.classList.add('image__block')
    img.classList.add('gallery-img')
    img.src = `${x.urls.regular}`;
    img.alt = `image`;
    galleryContainer.append(div);
    div.append(img);
    div.addEventListener('click', () => window.open(img.src))
  })

}
getData();
