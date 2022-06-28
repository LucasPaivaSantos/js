const pessoa = {
  "nome": "Fulano",
  "idade": 18,
};

console.table(pessoa);
console.log(pessoa.idade);
console.log(pessoa["idade"]);

pessoa.altura = 1.70;
pessoa["massa"] = 84;
console.table(pessoa);

// pessoa = {
//     nada: nada,
// };