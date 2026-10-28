// JavaScript — exemplos reunidos dos slides da Aula 06

// Exemplo de função e condição (slides 39–41)
function verificarSorvete() {
  let iceCream = "Chocolate";

  if (iceCream === "Chocolate") {
    alert("Sim, eu amo sorvete de chocolate");
  } else {
    alert("Aaah, mas chocolate é o meu favorito");
  }
}

// Evento onmousedown / onmouseup (slide 48)
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "Solte o clique";
}

function mUp(obj) {
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "Obrigado";
}

// Eventos onmouseover / onmouseout (slide 49)
function mOver(obj) {
  obj.innerHTML = "Obrigado";
}

function mOut(obj) {
  obj.innerHTML = "Passe o mouse em mim";
}
