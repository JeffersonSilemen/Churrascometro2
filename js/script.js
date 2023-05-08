//Dinamica das divs
function mostrarCalc() {
    phidden.style.display = 'block';
}

function closeResult() {
    result.style.display = 'none';
    dados_info.style.display = 'block';
}

//Cálculo churrascometro
let qadultos = document.getElementById('adultos');
let qcriancas = document.getElementById('criancas');
let qhoras = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function mostrarResult() {
    let adult = qadultos.value;
    let children = qcriancas.value;
    let time = qhoras.value;

    if (time == 0) {
        alert('Insira a quantidade de horas de churrasco!!!');
        return;
    } else if (children == 0 && adult == 0) {
        alert('Insira os participantes do churrasco!!!')
        return
    } else {
        if (time >= 7) {
            carne = 650;
            cerveja = 2500;
            bebida = 1500;
        } else {
            carne = 450;
            cerveja = 1500;
            bebida = 800;
        }

        let totalCarne = (carne * adult) + ((carne * children) / 2);
        let totalCerveja = (cerveja * adult);
        let totalBebida = (bebida * adult) + ((bebida * children) / 2);

        phidden.style.display = 'none';
        dados_info.style.display = 'none';
        result.style.display = 'flex';

        resultado.innerHTML = `<p>${totalCarne / 1000} Kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(totalCerveja / 355)} Latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(totalBebida / 2000)} Pet's 2l de Bebidas</p>`

    }
}