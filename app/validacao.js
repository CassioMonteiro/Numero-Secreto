function verificaChute(chute){
    let numero = +chute
    
    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }
    if(numeroMaiorMenor(numero)){
        elementoChute.innerHTML += `<div>Valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}</div>`
        return
    }
    if(numero == numeroSecreto){
        numero = numerosEspeciais(numero)
        
        document.body.innerHTML = 
        `
            <h2>Você acertou!</h2>
            <h4>O número secreto era o numero ${numero}</h4>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML += 
        `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>
        `
    }
    else if(numero < numeroSecreto){
        elementoChute.innerHTML += 
        `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>
        `
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}
function numeroMaiorMenor(numero){
    return numero > maiorValor || numero < menorValor
}

function numerosEspeciais(numero){
    const numeroEspecial = {
        3: ["do equilibrio", "img/equilibrio.png"],
        7: ["do sabio", "img/sabio.png"],
        13: ["do azar", "img/azar.png"],
        14: ["bissexual", "img/bi.png"],
        22: ["lésbico", "img/lesbica.png"],
        23: ["traveco", "img/travesti.png"],
        24: ["gay", "img/gay.jpg"],
        25: ["do Natal", "img/natal.jpg"],
        42: ["do sentido da vida", "img/superPC.jpg"],
        69: ["gostoso", "img/sex.jpg"],
        100: ["que você sempre quis em uma prova", "img/prova.jpg"],
        123: ["123...", "img/fibonacci.jpg"],
        300: ["dos espartanos", "img/esparta.jpg"],
        365: ["Feliz ano novoooo!", "img/anoNovo.jpg"],
        420: ["da verdinha", "img/maconha.jpg"],
        666: ["do capiroto", "img/capiroto.jpg"],
        777: ["da sorte", "img/sorte.png"],
        911: ["da policia", "img/policia.jpg"],
    }

    if(numero in numeroEspecial){
        document.body.style.backgroundImage = `url('${numeroEspecial[numero][1]}')`
        return numeroEspecial[numero][0]
    }
    if(numero == 404){
        window.location = '404 - Not Found.html'
        return ""
    }
    return numero
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})
