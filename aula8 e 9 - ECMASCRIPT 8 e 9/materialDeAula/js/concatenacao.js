const nome = "Victor";
const sobreNome = "Santos";
const cartao = "4841";

// maneiras simples
// var nomeCompleto = nome + " " + sobreNome;
// var nomeCompleto = `${nome} + " " + ${sobreNome}`;

// Obs apenas string
// faz concatenação no começo
var nomeCompletoStart = sobreNome.padStart(12,nome);
console.log(nomeCompletoStart);

// faz concatenação no fim
var nomeCompletoEnd = sobreNome.padEnd(12,nome);
console.log(nomeCompletoEnd);

// faz concatenação no começo e adiciona o asterisco para o restante dos digitos faltantes
const cartaoEscondido = cartao.padStart(16,"*");
console.log(cartaoEscondido);
