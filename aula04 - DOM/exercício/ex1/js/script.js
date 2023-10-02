var input = document.querySelector("#inputDaPagina");           

input.addEventListener('focus', focoInput );
input.addEventListener('focusout', perdeFocoInput );

function focoInput(){
    input.style.backgroundColor = "yellow";
}

function perdeFocoInput(){
    // var contaCaracteres = input.value;
    let valorInput = input.value;
    let quantCaracInput = input.value.length;

    if (input.value.length < 3){
        input.style.backgroundColor = "red";
        let resultado = document.querySelector("#resultado");
        resultado.innerHTML = `A quantidade de caracteres são insuficientes!`;           
    }
    else{
        input.style.backgroundColor = "green";
        let resultado = document.querySelector("#resultado");
        resultado.innerHTML = `O que está escrito no input é: ${valorInput}<br>A quantidade de caracteres: ${quantCaracInput}`;
    }
}