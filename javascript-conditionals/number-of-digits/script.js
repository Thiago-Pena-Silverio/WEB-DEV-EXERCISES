var num1 = prompt("Digite um numero inteiro positivo:");
var num1 = parseInt(num1);
var num2 = prompt("Digite outro numero inteiro positivo:");
var num2 = parseInt(num2);

var soma = num1 + num2;

if (num1 <= 0 | num2 <= 0)
{
	alert("numeros invalidos");
}else
	if (soma > 0 & soma < 10) {
		alert("A soma é unidade. soma: " + soma);
	}else
		if (soma >= 10 & soma < 100) {
			alert("A soma é dezena. soma: " + soma);
		}else{
			alert("A soma é centena ou maior. soma: " + soma);
		}