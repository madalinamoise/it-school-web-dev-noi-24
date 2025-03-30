// 1. La apasarea unui buton, sa schimbam textul dintr-un paragraph
const changeBtn = document.getElementById('changeTextBtn');
const paragraph = document.getElementById('message');

changeBtn.addEventListener('click', () => {
  paragraph.textContent = 'Text changed';
});

//2. (indiciu) Schimba stilul folosind getElementsByClassName
// Atunci cand se apasa click pe un button, schimba background
// color la primul element gasit dupa o clasa de css specificata

//3. La apasarea unui buton, luati culoare cu getComputedStyles
// si afisati-o
document.getElementById('getStyleBtn').addEventListener('click', () => {
  let text = document.getElementById('coloredText');
  let color = window.getComputedStyle(text).color;

  let output = document.getElementById('outputColor');
  output.textContent += color;
});
