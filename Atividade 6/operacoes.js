let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let soma = num1 + num2;
let subtracao = num1 - num2;
let produto = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;

alert(
    "Resultados das Operações:\n\n" +
    "• Soma    ===>    " + num1 + " + " + num2 + " = " + soma + "\n" +
    "• Subtração (1º - 2º)    ===>    " + num1 + " - " + num2 + " = " + subtracao + "\n" +
    "• Produto    ===>    " + num1 + " x " + num2 + " = " + produto + "\n" +
    "• Divisão (1º / 2º)    ===>    " + num1 + " / " + num2 + " = " + divisao.toFixed(2) + "\n" +
    "• Resto da divisão (1º % 2º)    ===>    " + num1 + " % " + num2 + " = " + resto
);