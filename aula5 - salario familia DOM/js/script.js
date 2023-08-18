const empregado = document.getElementById("empregado");
const filho = document.getElementById("filho");
const salario = document.getElementById("salario");
const btnCalcular = document.getElementById("calcular");
const resultado = document.querySelector("#resultado");
var familia = 0;

btnCalcular.addEventListener('click', verificar );

function verificar(){
    if( empregado.value === null || empregado.value === undefined || empregado.value === ""){
        window.alert("Por favor insira seu nome corretamente!");
    }
    else{
        if ( filho.value === null || filho.value === undefined || filho.value === ""){
            window.alert("Por favor insira a quantidade de filhos corretamente!");
        }
        else{
            if ( salario.value === null || salario.value === undefined || salario.value === ""){
                window.alert("Por favor insira o salario corretamente!");
            }
            // CALCULAR
            else{
                if (salario.value <= 806.80){
                    familia = filho.value * 41.37;
                }
                else{
                    if( salario.value >= 806.81 & salario.value <= 1212.64){
                        familia = filho.value * 29.16;
                    }
                    else{
                        familia = 0;
                    }
                }
                resultado.style.display = "flex";
                resultado.innerHTML = `${empregado.value}, o salário familia é de: R$: ${familia}`;
            }
        }
    }
}
