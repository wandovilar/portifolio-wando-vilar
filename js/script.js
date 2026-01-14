const botaoEsquerda = document.querySelector("#btnEsquerda");

const botaoDireita = document.querySelector("#btnDireita");

const carrossel = document.querySelector("#carrosselProjetos");

botaoDireita.addEventListener("click", () => {
  carrossel.scrollLeft -= 900;
});

botaoEsquerda.addEventListener("click", () => {
  carrossel.scrollLeft += 900;
});

console.log("Esquerda:", botaoEsquerda);
console.log("Direita:", botaoDireita);
console.log("Carrossel:", carrossel);
