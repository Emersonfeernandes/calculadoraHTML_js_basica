function start () {
    var buttonCalcula = document.querySelector('#button-calcular');

    buttonCalcula.addEventListener('click', handleButtonClick);

    handleButtonClick();
}

function handleButtonClick () {
    var numberA = document.querySelector('#numberA');
    var numberB = document.querySelector('#numberB');

    soma(numberA.value, numberB.value);
    subtracaoAB(numberA.value, numberB.value);
    subtracaoBA(numberB.value, numberA.value);
    multiplicacao(numberA.value, numberB.value);
    divisaoAB(numberA.value, numberB.value);
    divisaoBA(numberB.value, numberA.value);
    potenciaANaBaseB(numberA.value, numberB.value);
    potenciaBNaBaseA(numberB.value, numberA.value);
    raizQuadradaA(numberA.value);
    raizQuadradaB(numberB.value);
    fatorialA(numberA.value);
    fatorialB(numberB.value);
    porcentagemAemRelacaoB(numberA.value, numberB.value);
    porcentagemBemRelacaoA(numberA.value, numberB.value);
    media(numberA.value, numberB.value);
}

function soma (numberA, numberB) {
    var result = Number(numberA) + Number(numberB);
    
    var somaResult = document.querySelector('#result-soma');

    somaResult.textContent = result;
}


function subtracaoAB (numberA, numberB) {
    var result = Number(numberA) - Number(numberB);

    var subtraResult = document.querySelector('#subtracao-A-B');

    subtraResult.textContent = result;
}

function subtracaoBA (numberA, numberB) {
    var result = Number(numberA) - Number(numberB);

    var subtraResult = document.querySelector('#subtracao-B-A');

    subtraResult.textContent = result;
}

function multiplicacao (numberA, numberB) {
    var result = Number(numberA) * Number(numberB);

    var multiResult = document.querySelector('#multi');

    multiResult.textContent = result;
}

function divisaoAB (numberA, numberB) {
    var result = Number(numberA) / Number(numberB);

    var divisaoResult = document.querySelector('#divisaoAB');

    if (Number(numberB) === 0) {
        divisaoResult.textContent = 'Não é possivel dividir por 0';
        return;
    }

    divisaoResult.textContent = result.toFixed(2);
}

function divisaoBA (numberA, numberB) {
    var result = Number(numberA) / Number(numberB);

    var divisaoResult = document.querySelector('#divisaoBA');

    if (Number(numberB) === 0) {
        divisaoResult.textContent = 'Não é possivel dividir por 0';
        return;
    }

    divisaoResult.textContent = result.toFixed(2);
}

function potenciaANaBaseB (numberA, numberB) {
    var result = Number(numberA) ** Number(numberB);

    var potenResult = document.querySelector('#pontenciaAB');

    potenResult.textContent = result;
}

function potenciaBNaBaseA (numberA, numberB) {
    var result = Number(numberA) ** Number(numberB);

    var potenResult = document.querySelector('#pontenciaBA');

    potenResult.textContent = result;
}

function raizQuadradaA (numberA) {
    var result = Math.sqrt(Number(numberA));

    var raizAResult = document.querySelector('#raiz-quadrada-A');

    raizAResult.textContent = result.toFixed(2);
}

function raizQuadradaB (numberB) {
    var result = Math.sqrt(Number(numberB));

    var raizBResult = document.querySelector('#raiz-quadrada-B');

    raizBResult.textContent = result.toFixed(2);
}

function fatorialA (numberA) {
    var num = Number(numberA);
    var result = Number(numberA);

    while (num > 1) {
        num--;
        result = result * num
    }

    var fatorialAResult = document.querySelector('#fatorial-A');

    fatorialAResult.textContent = result;
}

function fatorialB (numberB) {
    var num = Number(numberB);
    var result = Number(numberB);

    while (num > 1) {
        num--;
        result = result * num
    }

    var fatorialBResult = document.querySelector('#fatorial-B');

    fatorialBResult.textContent = result;
}

function porcentagemAemRelacaoB (numberA, numberB) {
    var result = Number(numberB) * 100 / Number(numberA);

    var porcetagemAResult = document.querySelector('#porcentagemA');

    porcetagemAResult.textContent = Math.ceil(result) + '%';
}

function porcentagemBemRelacaoA (numberA, numberB) {
    var result = Number(numberA) * 100 / Number(numberB);

    var porcetagemBResult = document.querySelector('#porcentagemB');

    porcetagemBResult.textContent = Math.ceil(result) + '%';
}

function media (numberA, numberB) {
    var primeiroNumero = Number(numberA);
    var segundoNumero = Number(numberB);
    var contador = 0;
    var soma = 0;
    var mediaResult = document.querySelector('#media');

    while (segundoNumero <= primeiroNumero) {
        soma += segundoNumero;
        contador += 1;
        console.log(soma)
        segundoNumero += 1;
    }

    var result = soma / contador;

    mediaResult.textContent = result;
}
start();