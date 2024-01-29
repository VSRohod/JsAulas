let divUsuarios = document.querySelector("#result");

fetch("dados.json").then((response) => {
    response.json().then((usuarios) => {
        console.log(usuarios)
    })
    // response.json().then((dados) => {
    //     dados.usuarios.map((usuario) => {
    //         divUsuarios.innerHTML += usuario.userName
    //     })
    // })
})