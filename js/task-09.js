const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const button = document.querySelector('.change-color');

function handleButtonClick() {

  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;
};

button.addEventListener('click', handleButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};