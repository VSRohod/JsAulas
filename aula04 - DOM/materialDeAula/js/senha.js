var emailDoUsuario = "fulano@gmail.com";
var senhaDoUsuario = "ADM";

var botaoLogar = document.getElementById("logar");
botaoLogar.addEventListener('click', validar);

function validar(){
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;

    if (email === emailDoUsuario & senha === senhaDoUsuario){
        window.alert("Seja bem vindo!");
        window.location.href = "https://www.google.com";
    }else{
        window.alert("Email ou senha incorretos! Insira as informações novamente!");
    }
}

