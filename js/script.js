const botaoEsquerda = document.querySelector("#btnEsquerda");
const botaoDireita = document.querySelector("#btnDireita");
const carrossel = document.querySelector("#carrosselProjetos");

function pegarPasso() {
  const card = document.querySelector(".card-projeto");
  const gap = 15; // mesmo gap do CSS
  return card.offsetWidth + gap;
}

botaoDireita.addEventListener("click", () => {
  carrossel.scrollLeft += pegarPasso();
});

botaoEsquerda.addEventListener("click", () => {
  carrossel.scrollLeft -= pegarPasso();
});
