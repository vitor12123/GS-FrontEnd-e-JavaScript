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

const sections = document.querySelectorAll('.sumario-secao');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const slideshow = document.querySelector('.slideshow-container');
    const slideshowBottom = slideshow.getBoundingClientRect().bottom + window.scrollY;
    if (window.scrollY + 80 >= slideshowBottom) {
        nav.classList.add('mostrar');
    } else {
        nav.classList.remove('mostrar');
    }
});

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const header = document.querySelector('header');
        const headerOffset = header ? header.offsetHeight : 0;
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset - 16; // ajuste o 16 se quiser mais/menos espaço

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});