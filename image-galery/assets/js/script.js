const url = 'https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';
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

