const galleryContainer = document.querySelector('.img__galery');
const input = document.querySelector('input');
let search = 'randoms';
input.addEventListener('click', () => input.classList.add('active'));


// Check input
if (!input.onkeydown) { getData(search) }
input.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    input.classList.remove('active');
    search = input.value;
    getData(search);
  }
})

// Click search
document.querySelector('.search__img').addEventListener('click', () => {
  search = input.value;
  getData(search);
});

// Clean value
document.querySelector('.clean__text').addEventListener('click', () => {
  input.value = '';
  input.classList.add('active');
  input.focus()
});

// Clean block
function clear(el) {
  el.innerHTML = '';
}

// Collect image cards
async function getData(ur) {
  clear(galleryContainer)
  const url = `https://api.unsplash.com/search/photos?query=${ur}&per_page=30&orientation=landscape&client_id=Z1N0SeXp8Y6iG-yUf37EhP3ElsRfHdsLnfKmkV8leng`
  const res = await fetch(url);
  const data = await res.json();
  let i = 0;
  a = data.results;
  a.map((x) => {
    i++;
    const div = document.createElement('div');
    const img = document.createElement('img');
    div.classList.add('block__img');
    img.classList.add('gallery-img');
    img.src = `${x.urls.regular}`;
    img.alt = `image`;
    galleryContainer.append(div);
    div.append(img);

    // open image new window
    div.addEventListener('click', () => window.open(img.src));
  });
  // error message
  if (i === 0) {
    galleryContainer.textContent = 'Ничего не найдено. Попробуйте другой запрос.';
  }
}
