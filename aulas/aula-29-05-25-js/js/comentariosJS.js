/*Guia Completo de JavaScript - Fundamentos

📜 Sintaxe Básica e Estruturas
Bem-vindo aos fundamentos do JavaScript! Aqui, vamos explorar a sintaxe essencial que forma a base da linguagem.

*/

/*Variáveis e Constantes
Em JavaScript, usamos variáveis para armazenar 
dados que podem mudar e constantes para dados 
que não devem ser alterados após a atribuição inicial.
*/

/*var: A forma mais antiga de declarar variáveis
Possui escopo de função ou global
Menos usado em código moderno
*/
var nomeAntigo = "Ana";
nomeAntigo = "Carlos"; //Pode ser reatribuído

var nomeAntigo = "Julia"; // Pode ser redeclarado (não recomendado)
console.log(nomeAntigo); // Saída: Julia

/*let: Introduzido no ES6
Permite declarar variáveis com escopo de bloco*/

let idade = 30;
idade = 31; // Pode ser reatribuído
let idade = 32; // Erro! Não pode ser redeclarado no mesmo escopo

console.log(idade); // Saída: 31

if (true) {
  let dentroDoBloco = "Visível aqui";
  console.log(dentroDoBloco); // Saída: Visível aqui
}

/* console.log(dentroDoBloco); // Erro! fora de escopo
const: Constantes com escopo de bloco
O valor não pode ser reatribuído*/

const PI = 3.14159;
// PI = 3.14; // Erro! Não pode ser reatribuído
console.log(PI); // Saída: 3.14159

const pessoa = { nome: "Mariana" };
pessoa.nome = "Mariana Silva"; // Funciona! O objeto em si pode ser modificado
// pessoa = { nome: "João" }; // Erro! Não pode reatribuir a constante

console.log(pessoa.nome); // Saída: Mariana Silva

//Tipos de Dados Primitivos
//São os blocos de construção básicos dos dados em JavaScript.

//String
//Sequência de caracteres, usada para texto.

let saudacao = "Olá, mundo!";
let nome = 'João';
let frase = `Bem-vindo, ${nome}!`; // Template literals

console.log(frase); // Saída: Bem-vindo, João!
Number

//Representa números, tanto inteiros quanto de ponto flutuante.

let quantidade = 10;
let preco = 19.99;
let naoUmNumero = NaN; // Not a Number
let infinito = Infinity;
console.log(quantidade, preco); // Saída: 10 19.99

//Boolean
//Representa valores lógicos: true ou false.

let ativo = true;
let finalizado = false;
console.log(ativo); // Saída: true
//Null

//Representa a ausência intencional de um valor de objeto.

let usuario = null;
console.log(usuario); // Saída: null
//Undefined

//Indica que uma variável foi declarada, mas ainda não teve um valor atribuído.

let descricao;
console.log(descricao); // Saída: undefined

//Symbol (ES6)
//Tipo de dado cujas instâncias são únicas e imutáveis.

const idUnico = Symbol('descricaoUnica');
console.log(idUnico); // Saída: Symbol(descricaoUnica)

//BigInt (ES2020)
//Usado para representar inteiros maiores que o limite seguro para Number.

const numeroMuitoGrande = 9007199254740991n; // 'n' no final indica BigInt
const outroGrande = BigInt("12345678901234567890");
console.log(numeroMuitoGrande + 1n); // Saída: 9007199254740992n

/*Operadores
Símbolos que realizam operações em valores (operandos).

Aritméticos
+ (adição)
- (subtração)
* (multiplicação)
/ (divisão)
% (módulo/resto)
** (exponenciação - ES7)
*/

let soma = 10 + 5; // 15
let produto = 4 * 3; // 12
let resto = 10 % 3;  // 1
let potencia = 2 ** 3; // 8

Atribuição
= (atribuição simples)
+=, -=, *=, /=, %=
let x = 10;
x += 5; // equivalente a x = x + 5; (x agora é 15)

Comparação
== (igual a - compara valor, faz coerção de tipo)
=== (estritamente igual a - compara valor e tipo)
!= (diferente de)
!== (estritamente diferente de)
> (maior que)
< (menor que)
>= (maior ou igual a)
<= (menor ou igual a)

console.log(5 == "5");    // true (coerção de tipo)
console.log(5 === "5");   // false (tipos diferentes)
console.log(10 > 5);      // true