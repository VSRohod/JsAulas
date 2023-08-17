class Computador {
    perifericos;
    gabinete;
    monitor;
    sistemaOperacional;
    dono;
}

class Dono {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.endereco = "Ceilandia";
    } 
}

var dono1 = new Dono("Victor",20);
var dono2 = new Dono("Arthur",16);

var meuComputador = new Computador();
meuComputador.perifericos = ["Teclado RedDragon","Mouse Gamer","Mouse Pad"];
meuComputador.gabinete = "Apple Mac";
meuComputador.monitor = "27 polegadas, ACER";
meuComputador.sistemaOperacional = "MAC OS";
meuComputador.dono = [dono1,dono2];