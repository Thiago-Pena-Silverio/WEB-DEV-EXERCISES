





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