console.log("Hellow World");
// Busca referências para todos os elementos
const eSpans = document.querySelectorAll("span");
const eA = eSpans[0];
const eB = eSpans[1];
const eSymbol = eSpans[2];
const eS = eSpans[3];
const eM = eSpans[3];

const eButtons = document.querySelectorAll("button");
const eButtonSoma = eButtons[0];
const eButtonMultiplica = eButtons[1];

eButtonSoma.addEventListener("click", somaListener);
eButtonMultiplica.addEventListener("click", multiplicaListener);

function somaListener(event) {
  console.log("soma listener!");
  soma();
}

function multiplicaListener(event) {
  console.log("multiplica listener!");
  multiplica();
}

// Opera os dados
function soma() {
  const A = Number(eA.textContent);
  const B = Number(eB.textContent);
  const S = A + B;
  eS.textContent = S;
  eSymbol.textContent = "+";
}

function multiplica() {
  const A = Number(eA.textContent);
  const B = Number(eB.textContent);
  const M = A * B;
  eM.textContent = M;
  eSymbol.textContent = "*";
}
// Escreve na saída
