/*3. Escreva o código JavaScript para que exiba qualquer tabuada completa. O programa deve
perguntar ao usuário qual tabuada ele deseja visualizar (O número digitado pelo usuário
deve ser validado, estando entre 1 e 10)*/

var tab = prompt('Digite um numero entre 1 a 10 para a tabuada');
var tab = parseInt(tab);
var vezes = 1;
var prod;

if(tab < 1 || tab > 10){
    alert("Número Invalido");
}
else{
    while(vezes <= 10){
        prod = vezes * tab;
        alert( tab + "X" + vezes + "=" + prod );
        vezes++;
}
}
