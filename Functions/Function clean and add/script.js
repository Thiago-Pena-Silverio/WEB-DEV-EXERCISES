/*
* Nome: somar
* Descrição: Função que soma dois valores
*//*
function somar() {
    var campo1 = document.getElementById("campo1");
    var campo2 = document.getElementById("campo2");
    var valor1, valor2, soma

    valor1 = parseFloat(campo1.value);
    valor2 = parseFloat(campo2.value);

    var elemento_p = document.createElement("p");
    var texto_p = document.createTextNode("Resultado: " + (valor1 + valor2));

    elemento_p.appendChild(texto_p);
    document.body.appendChild(elemento_p);
}    
*/


function somar() {
    var campo1 = document.getElementById("campo1");
    var campo2 = document.getElementById("campo2");
    var valor1, valor2, resultado;

    valor1 = parseFloat(campo1.value);
    valor2 = parseFloat(campo2.value);
    resultado = valor1 + valor2;

    var elemento_p = document.getElementById("resultado");

    if (elemento_p) {
    elemento_p.textContent = "Resultado: " + (valor1 + valor2);
    } 

    else {
    elemento_p = document.createElement("p");
    elemento_p.id = "resultado"

    var texto_p = document.createTextNode("Resultado: " + resultado);

    elemento_p.appendChild(texto_p);
    document.body.appendChild(elemento_p);
    }
}

    function limpar() {
    var campo1 = document.getElementById("campo1");
    var campo2 = document.getElementById("campo2");

    campo1.value = "";
    campo2.value = "";

    var elemento_p = document.getElementById("resultado");

    if (elemento_p) {
    elemento_p.parentNode.removeChild(elemento_p);
    }
}