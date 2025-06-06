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
            hbgBTN.style.marginLeft = '1225px';
            return;
        }

        menuText.append(menu)
        
        menuText.style.display = "block";
        menuText.style.marginLeft = '0px';
        menuText.style.paddingRight = '130px';
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

    function enviarquiz() {
        BTNenviar.addEventListener('click', (enviar) => {
            enviar.preventDefault()
            for (let i = 1; i <= 10; i++) {
        const resposta = document.querySelector(`input[name="${i}"]:checked`)
        if (!resposta) {
            alert(`Você precisa responder a pergunta ${i}.`)
            return // Interrompe a função se alguma não foi respondida
        }
    }

    let resultado = 0

            function checarResposta(pergunta, alternativaCorreta) {
                const resposta = pergunta.querySelector('input:checked')
                if (!resposta) return
                if (resposta.value === alternativaCorreta) {
                    resultado += 1
                    pergunta.style.backgroundColor = 'green'
                } else {
                    pergunta.style.backgroundColor = 'red'
                }
            }

            checarResposta(pergunta1, "c")
            checarResposta(pergunta2, "d")
            checarResposta(pergunta3, "b")
            checarResposta(pergunta4, "b")
            checarResposta(pergunta5, "a")
            checarResposta(pergunta6, "c")
            checarResposta(pergunta7, "a")
            checarResposta(pergunta8, "d")
            checarResposta(pergunta9, "a")
            checarResposta(pergunta10, "b")

            let resultadoFinal = document.createElement('div')
            resultadoFinal.innerHTML = `<h3>Você acertou ${resultado} de 10 questões!</h3>`
            total.append(resultadoFinal)
        })
    }

    enviarquiz()
