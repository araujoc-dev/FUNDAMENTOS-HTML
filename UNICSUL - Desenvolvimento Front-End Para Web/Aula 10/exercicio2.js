
function somarNumeros() {
    let numeros = [];
    let valor;
    while (true) {
        valor = window.prompt("Digite um número ou 's' para finalizar:");
        if (valor.toLowerCase() === "s") {
            break;
        }
        numeros.push(parseFloat(valor));
    }
    let resultado = 0;
    for (let i = 0; i < numeros.length; i++) {
        resultado += numeros[i];
    }
    window.alert("A soma dos números é: " + resultado);
}
