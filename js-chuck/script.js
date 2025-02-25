const container = document.getElementById('joke-container');
const historyContainer = document.getElementById('jokes-history');
const newJokeBtn = document.getElementById('new-btn');
const clearBtn = document.getElementById('clear-btn');

let jokeHistory = [];

function addJoke(joke) {
  container.innerHTML = '';

  const img = document.createElement('img');
  img.setAttribute('src', joke.icon_url);
  container.appendChild(img);

  const p = document.createElement('p');
  p.innerText = joke.value;

  container.appendChild(p);
}

function addJokeToHistory(joke) {
  jokeHistory.push(joke);

  console.log(jokeHistory);

  historyContainer.innerHTML = '';

  jokeHistory.forEach((joke) => {
    const jokeEl = document.createElement('div');

    // const img = document.createElement('img');
    // img.setAttribute('src', joke.icon_url);

    const text = document.createElement('p');
    text.innerText = joke.value;

    // jokeEl.appendChild(img);
    jokeEl.appendChild(text);

    historyContainer.appendChild(jokeEl);
  });
}

async function getJoke(fromClick) {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const joke = await response.json();

  addJoke(joke);
  fromClick && addJokeToHistory(joke);
}

function clear() {
  jokeHistory = [];
  historyContainer.innerHTML = '';
}

getJoke();

newJokeBtn.addEventListener('click', () => {
  getJoke(true);
});
clearBtn.addEventListener('click', () => clear());
