// var fruta1 = "morango";
// var fruta2 = "abacaxi";
// var fruta3 = "kiwi";

// ARRAY
// METODO 1
var frutas = Array();
frutas[0] = "Morango";
frutas[1] = "Abacaxi";
frutas[2] = "Pessego";
frutas[3] = "Kiwi";

// METODO 2
var legumes = ["Repolho","Berinjela","Alface","Abóbora"];

console.log(frutas);
console.log(frutas[1]);

// COMANDOS DE ARRAY
// ADICIONAR ELEMENTOS NO FIM DO ARRAY
frutas.push("Avocado");
console.log(frutas);
// ADICIONAR ELEMENTOS NO COMEÇO DO ARRAY
frutas.unshift("Uva");
console.log(frutas);
// REMOVER ELEMENTOS NO FIM DO ARRAY
frutas.pop();
console.log(frutas);
// REMOVER ELEMENTOS NO COMEÇO DO ARRAY
frutas.shift();
console.log(frutas);
// ADICIONAR ELEMENTOS NO MEIO DO ARRAY
// splice( indice, quantos indices sobrescreve, dados)
frutas.splice(1,0,"Goiaba");
console.log(frutas);
// COPIAR UM ARRAY
var frutasNovas = frutas.slice();
// SOBRESCREVE UM ELEMENTO
frutas[2] = "Banana";
console.log(frutas);

