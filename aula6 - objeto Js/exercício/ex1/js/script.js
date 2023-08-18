class Carro {
    constructor(marca, modelo , ano , cor , velocidadeMax){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMax = velocidadeMax;
        this.velocidadeAtual = 0;
        // comeco acelerar
        this.acelerar = function(valor){
            if(valor > this.velocidadeMax + valor){
                return "Velocidade não permitida! O máximo foi ultrapassado";
            }else{
                this.velocidadeAtual += valor;
                return `A velocidade aumentou ${valor} Km/h`;
            }
        }
        // fim acelerar
        // comeco desacelerar
        this.desacelerar = function(valor){
            if(valor > this.velocidadeAtual){
                return "Velocidade não permitida! a velocidade desacelado não condiz com velocidade atual";
            }else{
                this.velocidadeAtual -= valor;
                return `A velocidade diminuiu ${valor} Km/h`;
            }
        }
        // fim desacelerar
        // comeco freiar
        this.freiar = function(){
            this.velocidadeAtual = 0;
            return "Você parou o carro!"
        }
        // fim freiar
    }
}

var mustang = new Carro("Ford","MACH 1",2023,"Preto",300);
var LP540 = new Carro("lamborghini","Gallardo",2014,"Vermelho", 350);
