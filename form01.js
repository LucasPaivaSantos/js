function criaElemento(cor, largura, altura) {
  const eNovo = document.createElement("div");
  eNovo.textContent = `${cor} ${largura} ${altura}`;
  document.body.appendChild(eNovo);
}

criaElemento(
  document.exemplo01.cor.value,
  document.exemplo01.largura.value,
  document.exemplo01.altura.value
);
