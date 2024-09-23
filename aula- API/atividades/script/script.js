const APIKEY = '7843ddfd'
const formPesquisa = document.querySelector("form")


// No evento de submit roda função 
formPesquisa.onsubmit = (env) => {
    // preventDefault - evita que o formulário seja enviado a um outro url
    // por isso passamos env!
    env.preventDefault();

    const pesquisa = document.querySelector("#pesquisarInput").value;

    if (pesquisa == ""){
        alert("Preencha o campo de pesquisa!")
        return
    }

    // busca api e devolve os dados em um json como parametro da função
    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${APIKEY}`).then(result => result.json()).then(json => carregaLista(json));
    
    const carregaLista = (json) => {
        console.log(json)
        // desce o nivel da listagem
        var listaDeFilmes = json.Search
        const lista = document.querySelector(".lista");

        lista.innerHTML = "";

        if(listaDeFilmes == "" || listaDeFilmes == undefined){
            alert("Nenhum filme encontrado");
            return
        }

        listaDeFilmes.forEach(element => {
            lista.innerHTML += `
            <div class="filmes">
                <img src="${element.Poster}">
                <h2>${element.Title}</h2>
                <p>${element.Year}<p>
                <p>${element.Type}<p>
                <p>${element.imdbID}<p>
            </div>
            
            `
        });
    }
}