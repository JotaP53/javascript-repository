// Essa será a sintaxe que definirá um objeto: sempre que tiver {}.
var obj = {
    // ao invés de definirmos os elementos com "=", nos objetos colocamos ":".
    // Dentro, cada atributo será separado po "," e não por ";".
    nome: "João",
    idade: 28,
    profissao: "Programador",
    estaTrabalhando: true,
};

console.log(obj);

console.log(typeof obj);

// Como acessar uma propriedade do objeto? Seguindo a seguinte sintaxe: "<nome do obejto>.<nome da propriedadeque quer acessar".
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log("O meu nome é " + obj.nome + ", tenho " + obj.idade + " anos e trabalho como " + obj.profissao + " no Laboratório de Processamentos de Imagens e Sinais Computacionais.")

// Se quiser mudar um propriede, poed atribuir a nova informação como se atribuísse uma variável.
obj.nome = "Pedro";
console.log(obj.nome);

console.log(obj);

// Criando um propriedade para o objeto fora da sintaxe original:
obj.graduacao = true;

console.log(obj);
