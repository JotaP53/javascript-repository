// Hoisting - Em JavaScript, "hoisting" é um comportamento em que declarações de variáveis e funções são "elevadas" para o topo do seu escopo (global ou local) durante a fase de compilação, antes que o código seja executado. Isso significa que você pode usar variáveis e funções antes de serem declaradas no código, sem receber erros, desde que a declaração exista no escopo. 
console.log(sobrenome);
console.log(numero);

var nome = null;
var sobrenome = "Martins";

// Null: A variável foi criada, mas foi atribuída o valor null a ela.
console.log(nome);
// Undefined: A variável foi criada, mas não foi atribuída valor.
console.log(sobrenome);

// Aqui, foi atribuído outro valor à variável nome.
nome = "João";
console.log(nome);

numero = 28;
