//Calculadora simples: Crie funções para adição, subtração, multiplicação e divisão de dois números.

let num1 = 60;
let num2 = 40;

function soma (a ,b){ 
    return a + b;
}

function subtracao (a , b) {
    return a - b;
}

function multiplicacao (a ,b) {
    return a * b;
}

function divisao (a , b) {
    if (num2 === 0) {
        return ("Numero invalido");
    }
    return a / b;
}

console.log("Sua soma é:", soma(num1, num2));
console.log("Sua subtracao é:", subtracao(num1, num2));
console.log("Sua multiplicaçao é:", multiplicacao(num1, num2));
console.log("Sua divisão é:", divisao(num1, num2));