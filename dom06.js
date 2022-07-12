console.log("hello world 06");

// Captura referências do DOM
const eParagrafo = document.querySelector("p");
const eButton = document.querySelector("button");

function okFunciona() {
  eParagrafo.textContent = "ok, funcionou!";
}

function ouvinteClick(event) {
  console.log("o ouvinte ouviu seu click");
  okFunciona();
}

eButton.addEventListener("click", ouvinteClick);
