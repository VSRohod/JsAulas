window.alert("Calcule a conta divida pelos clientes!")
var clientes =  Number(window.prompt("Quantos clientes existem na mesa?"));
var conta = Number(window.prompt("Quanto que foi o valor total da conta?"));
var adicionais = Number(window.prompt("Quanto o valor de adicionais?"));

const contaTotal = ((conta + adicionais) / clientes).toFixed(2)

window.alert(`O valor para cada cliente é de R$: ${contaTotal}, sendo o valor de adicionais R$: ${adicionais}`);