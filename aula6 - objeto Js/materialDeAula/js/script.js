// var cliente1nome = "Alice";
// var cliente1CPF = 9999999;
// var cliente1RG = 888888;
// var cliente1Agencia = 101;
// var cliente1Conta= 1080;
// var cliente1Saldo= 0;

// console.log(cliente1nome+" , "+cliente1CPF);

// var cliente1Conta = ["Nome : Alice","CPF : 9999999"];
// console.log(cliente1Conta);

class Cliente {
    nome;
    cpf;
}

class Conta {
    numeroConta;
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo = this.saldo - valor;
            return valor;
        }else{
            return;
        }
    };

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            return valor;
        }else{
            return;
        }
    };
}

// criando objeto
var contaDaAlice = new Conta();
contaDaAlice.numeroConta = 1;
contaDaAlice.agencia = 101;
contaDaAlice.saldo = 0;
console.log(contaDaAlice);

// controlando objeto - sacar
contaDaAlice.saldo = 3000;
console.log(contaDaAlice);
contaDaAlice.sacar(1000);
console.log(contaDaAlice.saldo);
contaDaAlice.sacar(100000000);
var valorSacado = contaDaAlice.sacar(50);
console.log(contaDaAlice.saldo);
console.log(valorSacado);

// controlando objeto - deposito
// contaDaAlice.saldo = -1000;
contaDaAlice.depositar(5000);
console.log(contaDaAlice.saldo);
contaDaAlice.depositar(-1000);
console.log(contaDaAlice.saldo);









// class Celular{
//     bateria;
//     modelo;
//     capinha;
// }

// var Iphone = new Celular();
// Iphone.bateria = "Dura 2 dias";
// Iphone.modelo = "x190";
// Iphone.capinha = "transparente";

// console.log(Iphone);

var cliente1 = new Cliente(); 
cliente1.nome = "Alice";
// cliente1.agencia = 101;
cliente1.cpf = 9999999;
// cliente1.conta = 1080;

var cliente2 = new Cliente();
cliente2.nome = "Victor";
// cliente2.agencia = 102;
cliente2.cpf = 8888888;
// cliente2.conta = 1081;

console.log(cliente1);
console.log(cliente2);