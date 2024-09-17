const APIKEY = '7843ddfd'
const formPesquisa = document.querySelector("form")

formPesquisa.onsubmit = (env) => {
    env.preventDefault();

    const pesquisa = env.target.pesquisa.value;

    if (pesquisa == ""){
        alert("Preencha o campo de pesquisa!")
        return
    }

    fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${APIKEY}`).then(result => result.json()).then(json => carregaLista(json));

    const carregaLista = (json) => {
        const lista = document.querySelector("div.lista");
        lista.innerHTML = "";

        json.Search.forEach(element => {
            console.log(element)
            element.map((dados) => {
                console.log(dados)
                // divUsuarios.innerHTML += `
                // <div>
                // <h4> USUARIO : ${dados.userName + " " +dados.userLastName}  </h4>
                // <p> IDADE : ${dados.userYO} </p>
                // <p> EMAIL : ${dados.userEmail} </p>
                // <p> SEXO : ${dados.userSex} </p>
                // </div>
                // `
            })
        });
    }
}