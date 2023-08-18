class Filme{
    constructor(nome,descricao,data,diretor,categoria){
        this.nome = nome;
        this.descricao = descricao;
        this.data = data;
        this.diretor = diretor;
        this.categoria = categoria;
    }
}

class Lista{
    constructor(){
        this.listaDeFilmes = [];
        this.listarFilmes = function (){
            return this.listaDeFilmes
        };
        this.adicionarFilme = function (nome,descricao,data,diretor,categoria){
            let listaDeFilmesArray = this.listaDeFilmes;
            listaDeFilmesArray.push(new Filme(nome,descricao,data,diretor,categoria));
        };
        this.removerFilme = function (indice){
            let listaDeFilmesArray = this.listaDeFilmes;
            listaDeFilmesArray.splice(indice,1);
        };
    }
}
// criando objeto
var lista = new Lista();

// comandos
lista.adicionarFilme("Matrix","Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador de computador que mora em um cubículo escuro, é atormentado por estranhos pesadelos nos quais encontra-se conectado por cabos e contra sua vontade, em um imenso sistema de computadores do futuro.","21/05/1999","Lana Wachowski e Lilly Wachowski","Ação e Ficção científica");

