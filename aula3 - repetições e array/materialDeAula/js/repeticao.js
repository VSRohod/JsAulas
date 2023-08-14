// REPETIÇÕES
// WHILE (VERIFICA E FAZ)
var contador1 = 0;
console.log("Inicio");

while ( contador1 <= 10 ){
    console.log(contador1);
    contador1++
    // aplicação do let
    let teste = "Let funciona!";
    console.log(teste);
}

// console.log(teste);

// DO WHILE (FAZ E VERIFICA)
var contador2 = 11;
console.log("Inicio");
do{
    console.log(contador2);
    contador2++
} 
while (contador2 <= 10);

// FOR 
// for ( variavel; condicao; controle){
// 
// }
console.log("Inicio");
for(var contador3 = 10; contador3 >= 0;contador3-- ){
    console.log(contador3);
}

// FOR EACH
console.log("Inicio");
var exemplo = ["Ex1","Ex2","Ex3","Ex4","Ex5"];

exemplo.forEach((element) => {
    console.log(element);
});

// WHILE COM LENGTH
var exemplo2 = ["elemento1","elemento2","elemento3","elemento4"];
var contador4 = 0;
while(contador4 < exemplo2.length){
    console.log(exemplo2[contador4]);
    contador4++
}