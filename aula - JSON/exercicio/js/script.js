function login(){
    let user = document.querySelector("#user").value
    let password = document.querySelector("#password").value
    let user_C = ''
    let password_C = ''
    let loginPass = false

    fetch('dados.json').then((response) => {
        return response.json()
    }).then((dados) => {
        
        dados.usuarios.map((informacoes) => {
            user_C = informacoes.userName
            password_C = informacoes.password
            if (user_C == user & password_C == password){
                loginPass = true
            }
        })

        if(loginPass){
            alert('Login efetuado com sucesso!')
        }else{
            alert('Usuario ou senha incorretos')
        }
    
    })

   
}

document.querySelector('#login').addEventListener('click',login)
