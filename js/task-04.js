const counter = document.getElementById('counter');
const currentValue = document.getElementById('value');
const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');

let counterValue = 0;

incrementButton.addEventListener('click', () => {
  counterValue++;
  currentValue.textContent = counterValue;
});

decrementButton.addEventListener('click', () => {
  counterValue--;
  currentValue.textContent = counterValue;
});
