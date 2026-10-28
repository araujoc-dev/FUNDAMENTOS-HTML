function media(){
    let nom = window.prompt("Qual o nome do aluno?");
    let n1 = Number(window.prompt(`Primeira nota de ${nom}`));
    let n2 = Number(window.prompt(`Segunda nota de ${nom}`));
    let med = (n1 + n2) / 2;
    let res = document.getElementById('situacao');
    
    res.innerHTML = `<p>Calculando a média final de <mark>${nom}</mark>.</p>
                     <p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>
                     <p>A média final será <mark>${med}</mark>.</p>`;
}