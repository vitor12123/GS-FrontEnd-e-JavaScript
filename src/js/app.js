const imagens = [
    "../assets/imagens/enchente.png",
    "../assets/imagens/tsunami.png",
    "../assets/imagens/furacao.jpg",
    "../assets/imagens/terremoto.png",
    "../assets/imagens/deslizamento.png",
    "../assets/imagens/incendioFlorestal.png"
];
const nomesDesastres = [
    "Enchentes",
    "Tsunamis",
    "Furacões",
    "Terremotos",
    "Deslizamento de Terra",
    "Incêndio Florestal"
];

let slideAtual = 0;
const slideImgAtual = document.getElementById("slide-img-atual");
const slideImgNova = document.getElementById("slide-img-nova");
const setaEsquerda = document.getElementById("seta-esquerda");
const setaDireita = document.getElementById("seta-direita");
const nomeDesastreEl = document.getElementById('nome-desastre');

function animarSlide(novoIndex, direcao = 1) {
    if (novoIndex < 0) novoIndex = imagens.length - 1;
    if (novoIndex >= imagens.length) novoIndex = 0;

    // Define classes de acordo com a direção
    const sairClasse = direcao === 1 ? "saindo-esquerda" : "saindo-direita";
    const virClasse = direcao === 1 ? "vindo-direita" : "vindo-esquerda";

    // Remove classes antigas
    slideImgAtual.className = "slide-img";
    slideImgNova.className = "slide-img";
    nomeDesastreEl.className = "";

    // Prepara imagem nova para entrar do lado correto
    slideImgNova.src = imagens[novoIndex];
    slideImgNova.style.display = "block";
    slideImgNova.classList.add(virClasse);

    // Prepara nome do desastre para entrar do lado correto
    nomeDesastreEl.classList.add(sairClasse);

    // Força reflow para garantir a transição
    void slideImgNova.offsetWidth;
    void nomeDesastreEl.offsetWidth;

    // Inicia animação: imagem atual sai, nova entra
    slideImgAtual.classList.add(sairClasse);
    setTimeout(() => {
        slideImgNova.className = "slide-img entrando";
        nomeDesastreEl.classList.remove(sairClasse);
        nomeDesastreEl.classList.add(virClasse);

        setTimeout(() => {
            nomeDesastreEl.textContent = nomesDesastres[novoIndex];
            nomeDesastreEl.classList.remove(virClasse);
            nomeDesastreEl.classList.add('entrando');
        }, 100);
    }, 10);

    // Após a animação, troca as imagens
    setTimeout(() => {
        slideImgAtual.src = imagens[novoIndex];
        slideImgAtual.className = "slide-img entrando";
        slideImgNova.style.display = "none";
        slideAtual = novoIndex;
    }, 600);
}

setaEsquerda.addEventListener("click", () => animarSlide(slideAtual - 1, -1));
setaDireita.addEventListener("click", () => animarSlide(slideAtual + 1, 1));

setInterval(() => {
    animarSlide(slideAtual + 1, 1);
}, 4000);

// Inicializa
slideImgAtual.src = imagens[slideAtual];
nomeDesastreEl.textContent = nomesDesastres[slideAtual];

const sections = document.querySelectorAll('.sumario-secao');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
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
    const nav = document.querySelector('.sumario');
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

const hbgBTN = document.getElementById('menu')
const menuOpen = document.getElementById('menuOpen')
const menuText = document.getElementById('textMenu')
const BTNenviar = document.getElementById('ultima')
const total = document.getElementById('totalPontos')
const pergunta1 = document.getElementById('p1')
const pergunta2 = document.getElementById('p2')
const pergunta3 = document.getElementById('p3')
const pergunta4 = document.getElementById('p4')
const pergunta5 = document.getElementById('p5')
const pergunta6 = document.getElementById('p6')
const pergunta7 = document.getElementById('p7')
const pergunta8 = document.getElementById('p8')
const pergunta9 = document.getElementById('p9')
const pergunta10 = document.getElementById('p10')
const body = document.body
const cadastro = document.getElementById('cadastro')

let contador = 0 

function abreMenu() {
    hbgBTN.addEventListener('click', (event)=> {
        menuText.innerHTML = ''
        event.preventDefault()
        contador++
        let menu = document.createElement('div')
        menu.innerHTML = `
        <h2>Menu</h2>

        <h4 id="info">Paginas Relacionadas:</h4>
        <a href="./../pages/index.html">Home</a>

        <h4 id="login">Login:</h4>
        <form class="formLogin">
        <label>Usuario:</label>
        <input type="text" id="nome" placeholder="digite seu usuario..."> 
        <label>senha:</label>
        <input type="password" id="senha" placeholder="digite sua senha..."> 
        <button>Entrar</button>
        <button id="cadastro" type="button">Cadastre-se</button>
        </form>


        <h4 id="corDeFundo"> Personalize a cor de fundo:</h4>
        <button type="button" class="mudarCor" id="azul">Azul</button>
        <button type="button" class="mudarCor" id="vermelho">vermelho</button>
        <button type="button" class="mudarCor" id="padrao">branco</button>

        `
        hbgBTN.classList.toggle("aberto")

         if (!hbgBTN.classList.contains("aberto")) {
            menuText.style.display = "none";
            menuText.innerHTML = '';
            hbgBTN.style.marginLeft = '1150px';
            return;
        }

        menuText.append(menu)
        
        menuText.style.display = "block";
        menuText.style.marginLeft = '1210px';
        menuText.style.paddingRight = '0px';
        menuText.style.zIndex = '100';
        hbgBTN.style.marginLeft = '1000px';

        const MudarAzul = document.getElementById('azul')
        MudarAzul.addEventListener('click', () => {
            body.style.backgroundColor = 'blue'
        });
        const MudarVermelho = document.getElementById('vermelho')
        MudarVermelho.addEventListener('click', () => {
            body.style.backgroundColor = 'red'
        });
        const MudarBranco = document.getElementById('padrao')
        MudarBranco.addEventListener('click', () => {
            body.style.backgroundColor = 'white'
        });

        const cadastro = document.getElementById('cadastro');
        cadastro.addEventListener('click', (event) => {
            menuText.innerHTML = `
                <h4 id="cadastro">Cadastre-se:</h4>
                <form class="formLogin" id="formCadastro">
                    <label>Usuário:</label>
                    <input type="text" id="nome" placeholder="Crie um usuário..."> 
                    <label>Senha:</label>
                    <input type="password" id="senha" placeholder="Crie uma senha..."> 
                    <button>Cadastrar</button>
                    <button id="voltar">voltar</button>
                </form>
            `
        })
        
    })
}

abreMenu()
