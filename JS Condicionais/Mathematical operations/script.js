var num1 = prompt("Digite um numero inteiro:");
var num1 = parseInt(num1);
var num2 = prompt("Digite outro numero inteiro:");
var num2 = parseInt(num2);
var resto = num1 % num2;

if (num1 == num2) {
	alert("Os numeros são iguais");
}

if (num1 != num2) {
	alert("Os numeros são diferentes");
}

if (num1 > num2) {
	alert("O primiro numero é maior que o segundo");
}

if (num1 < num2) {
	alert("O segundo numero é maior que o primeiro");
}

if (num1 < 0) {
	alert("O primeiro numero é negativo");
}

if (num2 < 0) {
	alert("O sgundo numero é negativo");
}

if (resto != 0) {
	alert("Há resto da divisão se dividir o primeiro pelo segundo numero");
}


