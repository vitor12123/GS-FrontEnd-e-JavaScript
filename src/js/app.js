const imagens = [
    "../assets/imagens/enchente.png",
    "../assets/imagens/tsunami.png",
    "../assets/imagens/furacao.jpg",
    "../assets/imagens/terremoto.png",
    "../assets/imagens/deslizamento.png",
    "../assets/imagens/incendioFlorestal.png"
];

let slideAtual = 0;
const slideImg = document.getElementById("slide-img");
const setaEsquerda = document.getElementById("seta-esquerda");
const setaDireita = document.getElementById("seta-direita");

function mostrarSlide(index) {
    if (index < 0) slideAtual = imagens.length - 1;
    else if (index >= imagens.length) slideAtual = 0;
    else slideAtual = index;
    slideImg.src = imagens[slideAtual];
}

setaEsquerda.addEventListener("click", () => mostrarSlide(slideAtual - 1));
setaDireita.addEventListener("click", () => mostrarSlide(slideAtual + 1));