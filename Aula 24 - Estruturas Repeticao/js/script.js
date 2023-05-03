// Estrutura de Repetição: while (enquanto)

// Ex: 1. Enquanto o valor for menor que 5, mostre o valor na tela.
function contadorWhile1() {
    // Cria o contador fora do while
    let contador = 1;

    // Enquanto o valor (contador) for menor que 5
    while (contador <= 5) {

        // Mostra o valor na tela
        document.querySelector('#contadorW1').innerHTML += contador + ', ';

        // Incrementa o contador (dentro do bloco)
        // contador = contador + 1; 
        // contador++;
        contador += 1;
    }
};

// Ex: 2. Receba um valor e enquanto o contador for menor que o valor informado, mostre o contador na tela.
function contadorWhile2() {
    // Cria o contador fora do while
    let contador = 1;

    // Guarda o número informado na tela
    const numeroInformado = document.querySelector('#numInformadoW2').value;

    // Enquanto o contador for menor que o número informado na tela
    while (contador <= numeroInformado) {
        // Mostra o valor na tela
        document.querySelector('#contadorW2').innerHTML += contador + ', ';

        // Incrementa o contador (dentro do bloco)
        contador += 1;
    }
};

// Estrutura de Repetição: for (para)

// Ex: 1. Enquanto o valor for menor que 5, mostre o valor na tela.
function contadorFor1() {
    // Enquanto o valor (contador) for menor que 5
    for (let contador = 1; contador <= 5; contador +=1) {
        // Mostra o valor na tela
        document.querySelector('#contadorF1').innerHTML += contador + ', ';
    }
};

// Ex: 2. Receba um valor e enquanto o contador for menor que o valor informado, mostre o contador na tela.
function contadorWhile2() {
    // Guarda o número informado na tela
    const numeroInformado = document.querySelector('#numInformadoF2').value;
    // Enquanto o contador for menor que o número informado na tela
    for (let contador = 1; contador <= numeroInformado; contador += 1) {
        // Mostra o valor na tela
        document.querySelector('#contadorF2').innerHTML += contador + ', ';
    }
};

// Ex: 3.1 Algoritmo para verificar se um número é par ou ímpar
function vericaParImpar() {
    const valor = document.querySelector('#numero').value;

    if (valor % 2 == 0) {
        alert("Par");
    }else {
        alert("Impar")
    }
};

// Ex: 3.2
function calcularParesImpares() {
    // Declaração das variáveis
    let num;
    let cont = 0;
    let soma = 0;
    let mult = 1;

    // Enquanto o valor (contador) for menor que 5
    while (cont < 5) {
        num = prompt("Informe um número");
        num = parseInt(num);

        // Verifica se é par
        if (num % 2 == 0) {
            mult == mult * num; 
            // mult *= num;
        }else {
            soma = soma + num;
            soma += num;
        }

        cont++;
    }

    alert("Pares: " + mult);
    alert("Ímpares: " + soma);
};
