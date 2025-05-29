const hbgBTN = document.getElementById('menu')
const menuOpen = document.getElementById('menuOpen')
const menuText = document.getElementById('textMenu')
const BTNenviar = document.getElementById('ultima')
const total = document.getElementById('totalPontos')

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
        let resposta = document.querySelector('input[name="1"]:checked')
        let respostaSelecionada = resposta.value 
        if (respostaSelecionada === "c"){
            resultado += 1
        }
        
        let resposta2 = document.querySelector('input[name="2"]:checked')
        let respostaSelecionada2 = resposta2.value 
        if (respostaSelecionada2 === "d"){
            resultado += 1
        }
        
        let resposta3 = document.querySelector('input[name="3"]:checked')
        let respostaSelecionada3 = resposta3.value 
        if (respostaSelecionada3 === "b"){
            resultado += 1
        }
        
        let resposta4 = document.querySelector('input[name="4"]:checked')
        let respostaSelecionada4 = resposta4.value 
        if (respostaSelecionada4 === "b"){
            resultado += 1
        }
        
        let resposta5 = document.querySelector('input[name="5"]:checked')
        let respostaSelecionada5 = resposta5.value 
        if (respostaSelecionada5 === "a"){
            resultado += 1
        }
       
        let resposta6 = document.querySelector('input[name="6"]:checked')
        let respostaSelecionada6 = resposta6.value 
        if (respostaSelecionada6 === "c"){
            resultado += 1
        }

        let resposta7 = document.querySelector('input[name="7"]:checked')
        let respostaSelecionada7 = resposta7.value 
        if (respostaSelecionada7 === "a"){
            resultado += 1
        }
        
        let resposta8 = document.querySelector('input[name="8"]:checked')
        let respostaSelecionada8 = resposta8.value 
        if (respostaSelecionada8 === "d"){
            resultado += 1
        }
        

        let resposta9 = document.querySelector('input[name="9"]:checked')
        let respostaSelecionada9 = resposta9.value 
        if (respostaSelecionada9 === "a"){
            resultado += 1
        }
        
        let resposta10 = document.querySelector('input[name="10"]:checked')
        let respostaSelecionada10 = resposta10.value 
        if (respostaSelecionada10 === "b"){
            resultado += 1
        }
        
        let resultadoFinal = document.createElement('div')
        resultadoFinal.innerHTML = `
        <h3> Você acertou ${resultado} de 10 questões!</h3>
        `
        total.append(resultadoFinal)
    })

    
}

enviarquiz()