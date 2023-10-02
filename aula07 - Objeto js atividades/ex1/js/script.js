class Donos{
    constructor(nome,email,telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

class Produto{
    constructor(nome,marca,valor){
        this.nome = nome;
        this.marca = marca;
        this.valor = valor;
    }
}

class Loja{
    constructor(nome,localidade,dono){
        this.nome = nome;
        this.localidade = localidade;
        this.dono = dono;
        this.produtos = [];
        this.listarProdutos = function (){
            return this.produtos
        };
        this.cadastrarProdutos = function (produtoNome,produtoMarca,produtoValor){
            let produtosLista = this.produtos;
            produtosLista.push(new Produto(produtoNome,produtoMarca,produtoValor));
        };
        this.removerProdutos = function (indice){
            let produtosLista = this.produtos;
            produtosLista.splice(indice,1);
        };
    }
}

// dono
const dono = new Donos("Victor Santos Rohod","victorsantosrohod@gmail.com",99999999);

// loja
var americanas = new Loja("Americanas","Taguatinga Shopping", dono);

// comandos
americanas.cadastrarProdutos("GTA","RockStar",80);
americanas.cadastrarProdutos("Chocolate","Prestigio",20);
americanas.removerProdutos(0);