// Carne - 400g por pessoa / + de 6 horas = 650g
// Cerveja - 1200ml por pessoa / + de 6 horas = 2000ml
// Refrigerante - 1000ml por pessoa / + de 6 horas = 1500ml
// Crianças valem por 0,5
let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')
let resultado = document.getElementById('resultado')

function calcular() {
    let carneTotal = carnePP(inputDuracao.value) * inputAdultos.value + carnePP(inputDuracao.value) * inputCriancas.value / 2;
    let bebidaTotal = bebidasPP(inputDuracao.value) * inputAdultos.value + bebidasPP(inputDuracao.value) * inputCriancas.value / 2;
    let cervejaTotal = cervejaPP(inputDuracao.value) * inputAdultos.value;

    resultado.innerHTML = `<p>${carneTotal / 1000} kg de carne.</p>`
    resultado.innerHTML += `<p>${Math.ceil(bebidaTotal / 355)} latas de cerveja.</p>`
    resultado.innerHTML += `<p>${Math.ceil(cervejaTotal / 2000)} pet's de 2l de bebidas.</p>`
}

function carnePP (duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP (duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP (duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}