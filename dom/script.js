console.log(document);

function changeColor(color) {
  let paragraph = (document.querySelector('p').style.color = color);
  console.log(paragraph);
}

function modifySubtitle(text) {
  document.getElementById('subtitle').innerText = text;
}

function setBoxContainer(bgColor) {
  document.querySelector('.container').style.backgroundColor = bgColor;
}

setBoxContainer('yellow');

let newTitle = document.createElement('h1');
newTitle.textContent = 'Some new fancy title';
document.body.appendChild(newTitle);

document.body.removeChild(newTitle);

document.querySelector('button').addEventListener('click', () => {
  window.alert('New alert');
});

// Toggle message
document.getElementById('toggleBtn').addEventListener('click', () => {
  let message = document.getElementById('message');
  if (message.style.display === 'none') {
    message.style.display = 'block';
  } else {
    message.style.display = 'none';
  }
});

// Add to list
document.getElementById('newBtn').addEventListener('click', () => {
  let list = document.getElementById('list');
  const newEl = document.createElement('li');
  newEl.textContent = 'Newwww';

  list.appendChild(newEl);
});

//Homework :Click a button to display the text entered in an input field.(aveti un input, introduceti text in el, apasati button, textul sa apara in html)
const editable = document.querySelector("input");
const result = document.querySelector(".result");
const initial = result.getHTML();


document.querySelector(".submit").addEventListener("click", () => {
  result.textContent = initial.concat(editable.value);
});