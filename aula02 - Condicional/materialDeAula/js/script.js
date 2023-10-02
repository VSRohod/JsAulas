// OPERADORES LÓGICOS
// > MAIOR QUE
// < MENOR QUE
// >= MAIOR OU IGUAL QUE
// <= MENOR OU IGUAL QUE 
// != DIFERENTE
// == IGUAL A

// ALTERNÁRIO
// && E
// || OU
// ! NÃO

// IF (se) ELSE (senão)
// if (condicao){
//     uma tarefa / um bloco de codigo
// } else {
//     uma tarefa / um bloco de codigo
// }

if (true){
    console.log("Você está no bloco do if verdadeiro");
} else {
    console.log("Você está no bloco do else falso");
}

// MAIOR DE IDADE IF
window.alert("Bem vindo");
var idade = Number(window.prompt("Bom dia, qual é a sua idade?"));

if (idade <= 0 || isNaN(idade)){
    window.alert("Idade Inválida!");
    location.reload();
} else{
    if( idade >= 1 && idade <= 17){
        window.alert("Acesso não permitido!");
        location.reload();
    } else {
        window.alert("Você é maior de idade, seja bem vindo!")
    }
}