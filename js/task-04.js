const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const counterValueSpan = document.getElementById("value");

let counterValue = 0;

const incrementCounter = () => {
  counterValue++;
  counterValueSpan.textContent = counterValue;
};

const decrementCounter = () => {
  counterValue--;
  counterValueSpan.textContent = counterValue;
};

decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);
