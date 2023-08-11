window.alert("Insira a sua idade para que faça o calculo da faixa Etária:");
const idade = window.prompt("Insira a idade:");

if(idade < 0 ){
    window.alert("Idade inválida, insira a idade novamente!");
    location.reload();
}

if(idade >= 0 && idade < 15){
    window.alert("Usuário da faixa etária criança");
    location.reload();
}

if(idade >= 15 && idade < 30){
    window.alert("Usuário da faixa etária Jovem");
    location.reload();
}

if(idade >= 30 && idade < 60){
    window.alert("Usuário da faixa etária Adulto");
    location.reload();
}

if(idade >= 60){
    window.alert("Usuário da faixa etária idoso");
    location.reload();
}
