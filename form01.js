let estado = {
  cor: "#000000",
  altura: 0,
  largura: 0,
};

function criaElemento(cor, largura, altura) {
  const eNovo = document.createElement("div");
  eNovo.textContent = `${cor} ${largura} ${altura}`;
  eNovo.style = `color: ${cor}`;
  document.body.appendChild(eNovo);
}

document.exemplo01.addEventListener("submit", submitListener);

function submitListener(event) {
  event.preventDefault();

  (estado.cor = document.exemplo01.cor.value),
    (estado.largura = Number(document.exemplo01.largura.value)),
    (estado.altura = Number(document.exemplo01.altura.value));

  criaElemento(estado.cor, estado.largura, estado.altura);

  document.exemplo01.reset();
}
