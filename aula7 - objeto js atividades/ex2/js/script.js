var nome = document.querySelector("#nome");
var descricao = document.querySelector("#descricao");
var dataLancamento = document.querySelector("#data");
var diretor = document.querySelector("#diretor");
var categoria = document.querySelector("#categoria");
const cadastrarBtn = document.querySelector("#cadastrar");
const filmeCadastrado = document.querySelector("#filmeCadastrado");
const infoFilme = document.querySelector("#infoFilme");

cadastrarBtn.addEventListener('click', cadastrar );

function cadastrar(){
    class Filme {
        constructor(nome,descricao,dataLancamento,diretor,categoria){
          this.nome = nome;
          this.descricao = descricao;
          this.dataLancamento = dataLancamento;
          this.diretor = diretor;
          this.categoria = categoria;
        }
    }
    let nomeFilme = nome.value;
    let descricaoFilme = descricao.value;
    let dataLancamentoFilme = dataLancamento.value;
    let diretorFilme = diretor.value;
    let categoriaFilme = categoria.value;

    var filme = new Filme(nomeFilme,descricaoFilme,dataLancamentoFilme,diretorFilme,categoriaFilme);
    filmeCadastrado.style.display = "flex";

    infoFilme.innerHTML = `Nome : ${filme.nome}<br>Descrição : ${filme.descricao}<br>Data : ${filme.dataLancamento}<br>Diretor : ${filme.diretor}<br>Categoria : ${filme.categoria}<br>`;
}
