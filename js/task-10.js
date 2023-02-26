function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");
  let dimensions = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${dimensions}px`;
    box.style.height = `${dimensions}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    dimensions += 10;
  }
}

function destroyBoxes() {
  const boxes = document.querySelector("#boxes");
  boxes.innerHTML = "";
}

const createButton = document.querySelector("[data-create]");
createButton.addEventListener("click", () => {
  const amount = parseInt(document.querySelector("input").value);
  createBoxes(amount);
});

const destroyButton = document.querySelector("[data-destroy]");
destroyButton.addEventListener("click", () => {
  destroyBoxes();
});