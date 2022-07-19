function criaElemento(cor, largura, altura) {
  const eNovo = document.createElement("div");
  eNovo.textContent = `${cor} ${largura} ${altura}`;
  document.body.appendChild(eNovo);
}

document.exemplo01.addEventListener("submit", submitListener);

function submitListener(event) {
  event.preventDefault();
  criaElemento(
    document.exemplo01.cor.value,
    Number(document.exemplo01.largura.value),
    Number(document.exemplo01.altura.value)
  );

  document.exemplo01.reset();
}
