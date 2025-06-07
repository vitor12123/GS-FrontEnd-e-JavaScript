let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function showSlide(newIndex, direction = 1) {
    if (newIndex === currentIndex) return;

    const currentSlide = slides[currentIndex];
    const nextSlide = slides[newIndex];

    // Define direção
    currentSlide.classList.remove("atual");
    currentSlide.classList.add("sair-esquerda");

    nextSlide.classList.remove("sair-esquerda", "entrar-direita");
    nextSlide.style.transition = "none"; // reset transition

    if (direction > 0) {
      nextSlide.style.transform = "translateX(100%)";
    } else {
      nextSlide.style.transform = "translateX(-100%)";
    }

    // Espera um tick para ativar transição
    requestAnimationFrame(() => {
      nextSlide.style.transition = "";
      nextSlide.classList.add("atual");
      nextSlide.style.transform = "translateX(0)";
    });

    setTimeout(() => {
      currentSlide.classList.remove("sair-esquerda");
      currentSlide.style.transform = "translateX(100%)";
    }, 800);

    currentIndex = newIndex;
  }

  function changeSlide(direction) {
    const newIndex = (currentIndex + direction + totalSlides) % totalSlides;
    showSlide(newIndex, direction);
  }

  function autoSlide() {
    changeSlide(1);
  }

  let slideInterval = setInterval(autoSlide, 5000);

  // Reset timer when user clicks arrows
  document.querySelector('.seta.esquerda').addEventListener('click', () => {
    clearInterval(slideInterval);
    changeSlide(-1);
    slideInterval = setInterval(autoSlide, 5000);
  });

  document.querySelector('.seta.direita').addEventListener('click', () => {
    clearInterval(slideInterval);
    changeSlide(1);
    slideInterval = setInterval(autoSlide, 5000);
  });

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
