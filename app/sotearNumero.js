const menorValor = 0
const maiorValor = 1000

let numeroSecreto = gerarNumeroAleatorio(menorValor,maiorValor)

function gerarNumeroAleatorio(menorValor,maiorValor){
    const range = maiorValor - menorValor
    return parseInt(Math.random() * range + menorValor + 1)
}

console.log('Número secreto', numeroSecreto)

const elementoMenor = document.getElementById('menor-valor')
elementoMenor.innerHTML = menorValor
const elementoMaior = document.getElementById('maior-valor')
elementoMaior.innerHTML = maiorValor