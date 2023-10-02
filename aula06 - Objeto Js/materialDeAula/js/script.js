// var cliente1nome = "Robertinho";
// var cliente1dataNascimento = "11/02/1998";
// var cliente1cpf = 9999999;
// var cliente1conta = 1;
// var cliente1agencia = 101;

// console.log(cliente1nome+" , "+cliente1dataNascimento + " , ");

// var cliente1 = ["Nome = Robertinho","Data de nascimento = 11/02/1998"];
// console.log(cliente1[1]);

class Cliente {
    nome;
    dataNascimento;
    cpf;
    conta;
    agencia;
    saldo;
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo = this.saldo - valor;
            return valor;
        }else{
            return;
        }
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            return "Valor depositado!";
        }else{
            return "Depósito não autorizado! Mais uma tentativa você será taxado ;)";
        }
    }
}

// criando objetos
var cliente1 = new Cliente();
cliente1.nome = "Robertinho";
cliente1.dataNascimento = "11/02/1998";
cliente1.cpf = 9999999;
cliente1.conta = 1;
cliente1.agencia = 101;
cliente1.saldo = 0;

console.log(cliente1);

var cliente2 = new Cliente();
cliente2.nome = "Marcos";
cliente2.dataNascimento = "14/08/2001";
cliente2.cpf = 8888888;
cliente2.conta = 2;
cliente2.saldo = 0;

console.log(cliente2);

// controlando objeto
cliente1.saldo = 3000;
// saque efetuado
cliente1.sacar(20);
console.log(cliente1.saldo);
// saque não efetuado
cliente1.sacar(1000000);
console.log(cliente1.saldo);
// desposito efetuado
cliente1.depositar(2000);
console.log(cliente1.saldo);
// desposito não efetuado
cliente1.depositar(-1000);
console.log(cliente1.saldo);
