const text = document.querySelector('.text')
const author = document.querySelector('.author')

// const url = 'https://type.fit/api/quotes'
async function getQuotes() {
  const quotes = '/assets/json/belarusian_quotes.json';
  const res = await fetch(quotes);
  const data = await res.json();
  min = Math.ceil(0);
  max = Math.floor(data.length);
  let aut = data[Math.floor(Math.random() * (max - min)) + min];
  author.textContent = `${aut['author']}`
  text.textContent = `${aut['text']}`
}
getQuotes();



// getData();