// CÓDIGO REUNIDO — SLIDE 07 JAVASCRIPT
// Exemplos transcritos e organizados a partir dos trechos de código do PDF.

// ============================================================
// 1. DECLARAÇÃO DE VARIÁVEIS (slides 27–28)
// ============================================================
var variavelVar = "Pode ser alterada";
let variavelLet = "Também pode ser alterada";
const variavelConst = "Não pode receber outra atribuição";

// Exemplo de typeof:
console.log(typeof variavelVar);
console.log(typeof variavelLet);
console.log(typeof variavelConst);

// ============================================================
// 2. TIPO STRING E TEMPLATE STRINGS (slide 29)
// ============================================================
const string1 = "Primeira string";
const string2 = 'Segunda string';
const string3 = `Mais uma string`;
const string4 = new String("A String como objeto");

const a = 5, b = 10;
console.log(`${a + b} é igual a 15 não ${2 * a + b}.`);
// 15 é igual a 15 não 20

// ============================================================
// 3. MÉTODOS E PROPRIEDADES DE STRING (slide 30)
// ============================================================
const texto = "Desenvolvimento Front-End para Web";

console.log(texto.length);                   // Tamanho da string
console.log(texto.concat(" - Aula 07"));     // Concatena strings
console.log(texto.indexOf("Web"));           // Primeira ocorrência
console.log(texto.lastIndexOf("e"));         // Última ocorrência
console.log(texto.match(/Web/));             // Procura por expressão regular
console.log(texto.replace("Web", "Internet")); // Substitui trecho
console.log(texto.slice(0, 16));             // Extrai parte da string
console.log(texto.split(" "));               // Divide em array
console.log(texto.toLowerCase());            // Minúsculas
console.log(texto.toUpperCase());            // Maiúsculas

// ============================================================
// 4. ESTRUTURAS CONDICIONAIS IF / ELSE (slide 31)
// ============================================================
let i = 1, j = 2, k = 3;

if (i === j) {
  if (j === k) {
    console.log("i igual a k");
  } else {
    console.log("i não é igual j");
  }
}

let n = 2;

if (n === 1) {
  console.log("Executa o bloco de código #1");
} else if (n === 2) {
  console.log("Executa o bloco de código #2");
} else if (n === 3) {
  console.log("Executa o bloco de código #3");
}

// ============================================================
// 5. TIPO BOOLEANO (slides 32–33)
// ============================================================
let outroValor = "JavaScript";
let boolValue = Boolean(outroValor); // Convertendo para Boolean

let iLike190M = true;
let ieIsGood = "IE6" > 0; // false

console.log(boolValue);
console.log(iLike190M);
console.log(ieIsGood);

if ("web dev is great") {
  console.log('"web dev is great" é considerado verdadeiro');
}

if (0) {
  console.log("Este bloco não será executado");
}
