// indexOf (retorna indice)
var aprovados = ['Victor','Marcela','Leo','Mike'];

var pesquisaNome = aprovados.indexOf('Victor');
if(pesquisaNome === -1){
    console.log("Não encontrado");
}else{
    console.log(`O elemento foi encontrado!`);
}

// includes (retorna booleano)
var lojinha = ['Kiwi','Pera','Maça','Uva'];

var pesquisaFruta = lojinha.includes('Melancia');
if(pesquisaFruta === false){
    console.log("Não encontrado");
}else{
    console.log(`O elemento foi encontrado!`);
}