var divTeste = document.getElementById("teste");

divTeste.addEventListener('click', alerta );
divTeste.addEventListener('mouseout', saiDiv );
divTeste.addEventListener('mouseenter', function(){
    divTeste.style.backgroundColor = "rgb(0, 73, 0)";
    divTeste.innerHTML = "<b>Você entrou na div!</b>";
});

function alerta() {
    window.alert("VOCÊ CLICOU NA DIV");
}

function saiDiv(){
    divTeste.style.backgroundColor = "blue";
    // divTeste.innerText = "Você saiu da div!";
    divTeste.innerHTML = "<b>Você saiu da div!</b>";
}