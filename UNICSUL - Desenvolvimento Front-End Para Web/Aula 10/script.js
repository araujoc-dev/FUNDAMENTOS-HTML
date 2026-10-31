let numero = [10,20,30,40,50];
function mostrarNumeros(){
    document.getElementById("numeros").innerHTML="numero: " + numero;
}
function somarNumeros(){
    let soma = 0;
    for (let i = 0; i < numero.length; i++){
        soma = soma + numero[i];
    }
    document.getElementById("resultado").innerHTML="resultado da soma: " + soma;
}