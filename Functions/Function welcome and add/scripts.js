/*
* Nome: darBoasVindas
* Descrição: Função que lê o nome e o sobrenome
*/
function darBoasVindas() {
    var campo1 = document.getElementById("campo1");
    var campo2 = document.getElementById("campo2");
    var campo3 = document.getElementById("campo3");
    var nome, sobrenome;

    nome = campo1.value;
    sobrenome = campo2.value;

    campo1.value = "";
    campo2.value = "";
    campo3.value = "Olá, " + nome + " " + sobrenome;
    } 


    /*
* Nome: somar
* Descrição: Função que soma dois valores
*/
function somar() {
    var campo4 = document.getElementById("campo4");
    var campo5 = document.getElementById("campo5");
    var campo6 = document.getElementById("campo6");
    var valorr1, valorr2;

    valorr1 = parseFloat(campo4.value);
    valorr2 = parseFloat(campo5.value);
    
    campo6.value = valorr1 + valorr2;
    campo6.style.backgroundColor = "yellow";
    campo6.style.color = "red";

    }


    /*
* Nome: somar ou errado
* Descrição: Função que soma dois valores se um for letra muda a cor
*/
    function somar() {
        var campo7 = document.getElementById("campo7");
        var campo8 = document.getElementById("campo8");
        var campo9 = document.getElementById("campo9");
        var valorrr1, valorrr2;
    
        valorrr1 = parseFloat(campo7.value);
        valorrr2 = parseFloat(campo8.value);
        
        if(!isNaN(valorrr1) && !isNaN(valorrr2)){
        campo9.value = valorrr1 + valorrr2;
        campo9.style.backgroundColor = "yellow";
        campo9.style.color = "red";
        campo7.style.backgroundColor = "white";
        campo8.style.backgroundColor = "white";
        }
        else{
            campo7.style.backgroundColor = "red";
            campo8.style.backgroundColor = "red";
        }
}
    