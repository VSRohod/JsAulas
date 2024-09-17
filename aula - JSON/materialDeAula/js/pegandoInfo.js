let divUsuarios = document.querySelector("#result");

fetch("dados.json").then((response) => {
    response.json().then((usuarios) => {
        console.log(usuarios)

        usuarios.usuarios.map((dados) => {
            console.log(dados)
            divUsuarios.innerHTML += `
            <div>
            <h4> USUARIO : ${dados.userName + " " +dados.userLastName}  </h4>
            <p> IDADE : ${dados.userYO} </p>
            <p> EMAIL : ${dados.userEmail} </p>
            <p> SEXO : ${dados.userSex} </p>
            </div>
            `
        })
    })
})