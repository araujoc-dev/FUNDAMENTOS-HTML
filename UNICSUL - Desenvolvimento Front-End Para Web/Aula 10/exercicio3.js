

function alterarTitulo() {
    let novoTitulo = window.prompt("Digite o novo título:");
    if (novoTitulo !== null && novoTitulo.trim() !== "") {
        document.getElementById("titulo").innerHTML = novoTitulo;
    }
}
function alterarCor() {
    document.body.style.backgroundColor = "purple";
}
