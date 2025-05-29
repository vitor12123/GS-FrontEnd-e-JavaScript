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

let contador = 0 

function abreMenu() {
    hbgBTN.addEventListener('click', ()=> {
        contador++
        let menu = document.createElement('div')
        menu.innerHTML = `
        <h5>pagina da InundaZero</h5>
        `
        hbgBTN.classList.toggle("aberto");
        menuText.append(menu)
        if (hbgBTN.classList.contains("aberto")) {
            menuOpen.style.display = "block";
            menuOpen.style.marginLeft = '1110px'
            
        } else {
            menuOpen.style.display = "none";
            menu.innerHTML = ''
        }  
        if(contador > 2) {
            menu.innerHTML = ''
        }  
    })
}

abreMenu()

function enviarquiz() {
    let resultado = 0
    BTNenviar.addEventListener('click', (event)=> {
        event.preventDefault()
        let resposta = pergunta1.querySelector('input[name="1"]:checked')
        let respostaSelecionada = resposta.value 
        if (respostaSelecionada === "c"){
            resultado += 1
            pergunta1.style.backgroundColor = 'green'
        }
        else {
            pergunta1.style.backgroundColor = 'red'
        }
        
        
        let resposta2 = pergunta2.querySelector('input[name="2"]:checked')
        let respostaSelecionada2 = resposta2.value 
        if (respostaSelecionada2 === "d"){
            resultado += 1
            pergunta2.style.backgroundColor = 'green'
        }
        else {
            pergunta2.style.backgroundColor = 'red'
        }
        
        let resposta3 = pergunta3.querySelector('input[name="3"]:checked')
        let respostaSelecionada3 = resposta3.value 
        if (respostaSelecionada3 === "b"){
            resultado += 1
            pergunta3.style.backgroundColor = 'green'
        }
        else {
            pergunta3.style.backgroundColor = 'red'
        }
        
        let resposta4 = pergunta4.querySelector('input[name="4"]:checked')
        let respostaSelecionada4 = resposta4.value 
        if (respostaSelecionada4 === "b"){
            resultado += 1
            pergunta4.style.backgroundColor = 'green'
        }
        else {
            pergunta4.style.backgroundColor = 'red'
        }
        
        let resposta5 = pergunta5.querySelector('input[name="5"]:checked')
        let respostaSelecionada5 = resposta5.value 
        if (respostaSelecionada5 === "a"){
            resultado += 1
            pergunta5.style.backgroundColor = 'green'
        }
        else {
            pergunta5.style.backgroundColor = 'red'
        }
       
        let resposta6 = pergunta6.querySelector('input[name="6"]:checked')
        let respostaSelecionada6 = resposta6.value 
        if (respostaSelecionada6 === "c"){
            resultado += 1
            pergunta6.style.backgroundColor = 'green'
        }
        else {
            pergunta6.style.backgroundColor = 'red'
        }

        let resposta7 = pergunta7.querySelector('input[name="7"]:checked')
        let respostaSelecionada7 = resposta7.value 
        if (respostaSelecionada7 === "a"){
            resultado += 1
            pergunta7.style.backgroundColor = 'green'
        }
        else {
            pergunta7.style.backgroundColor = 'red'
        }
        
        let resposta8 = pergunta8.querySelector('input[name="8"]:checked')
        let respostaSelecionada8 = resposta8.value 
        if (respostaSelecionada8 === "d"){
            resultado += 1
            pergunta8.style.backgroundColor = 'green'
        }
        else {
            pergunta8.style.backgroundColor = 'red'
        }
        

        let resposta9 = pergunta9.querySelector('input[name="9"]:checked')
        let respostaSelecionada9 = resposta9.value 
        if (respostaSelecionada9 === "a"){
            resultado += 1
            pergunta9.style.backgroundColor = 'green'
        }
        else {
            pergunta9.style.backgroundColor = 'red'
        }
        
        let resposta10 = pergunta10.querySelector('input[name="10"]:checked')
        let respostaSelecionada10 = resposta10.value 
        if (respostaSelecionada10 === "b"){
            resultado += 1
            pergunta10.style.backgroundColor = 'green'
        }
        else {
            pergunta10.style.backgroundColor = 'red'
        }
        
        let resultadoFinal = document.createElement('div')
        resultadoFinal.innerHTML = `
        <h3> Você acertou ${resultado} de 10 questões!</h3>
        `
        total.append(resultadoFinal)
    })

    
}

enviarquiz()