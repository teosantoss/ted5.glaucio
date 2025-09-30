// EXERCÍCIO 1
let populacaoA = 80000;
let populacaoB = 200000;
let anos = 0;

while (populacaoA <= populacaoB) {
    populacaoA += populacaoA * 0.03;
    populacaoB += populacaoB * 0.015;
    anos++;
}

console.log(`Serão necessários ${anos} anos para a população do país A ultrapassar ou igualar a do país B.`);

// EXERCÍCIO 2
let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i + 1}º número inteiro:`), 10);

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);

 
// EXERCÍCIO 3
let quantidade = parseInt(prompt("Quantos números deseja informar?"), 10);
let menor, maior, soma = 0;

for (let i = 0; i < quantidade; i++) {
    let num = parseFloat(prompt(`Digite o ${i + 1}º número:`));

    if (i === 0) {
        menor = maior = num;
    } else {
        if (num < menor) menor = num;
        if (num > maior) maior = num;
    }

    soma += num;
}

console.log(`Menor valor: ${menor}`);
console.log(`Maior valor: ${maior}`);
console.log(`Soma dos valores: ${soma}`);


// EXERCÍCIO 4 - VERSÃO 1
let salario = 1000;
let ano = 1996;
let percentual = 0.015; // 1.5%

while (ano <= new Date().getFullYear()) {
    salario += salario * percentual;
    percentual *= 2;
    ano++;
}

console.log(`Salário atual do funcionário: R$ ${salario.toFixed(2)}`);

// EXERCÍCIO 4 - VERSÃO 2
let salarioInicial = parseFloat(prompt("Informe o salário inicial do funcionário:"));
let anoAtual = new Date().getFullYear();
let percentual2 = 0.015;
let salarioAtual = salarioInicial;

for (let ano = 1996; ano <= anoAtual; ano++) {
    salarioAtual += salarioAtual * percentual2;
    percentual2 *= 2;
}

console.log(`Salário atual: R$ ${salarioAtual.toFixed(2)}`);


// EXERCÍCIO 5
function calcularCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo:"));
    const area = Math.PI * raio * raio;
    const perimetro = 2 * Math.PI * raio;

    console.log(`Área: ${area.toFixed(2)}`);
    console.log(`Perímetro: ${perimetro.toFixed(2)}`);
}

calcularCirculo();


// EXERCÍCIO 6
function calcularInvestimento() {
    const capital = parseFloat(prompt("Informe o capital inicial:"));
    const taxa = parseFloat(prompt("Informe a taxa de juros mensal (%):")) / 100;
    const tempo = parseInt(prompt("Informe o tempo do investimento (em meses):"), 10);

    const montante = capital * Math.pow((1 + taxa), tempo);
    console.log(`Montante final: R$ ${montante.toFixed(2)}`);
}

calcularInvestimento();
