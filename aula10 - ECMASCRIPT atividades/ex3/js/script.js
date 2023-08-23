var verificar = new Promise((resolve,reject) => {
    var nome = "aaa";
    var senha = "ADM";

    if(nome === "ADM" & senha === "ADM"){
        resolve("O usuário é um administrador!")
    }else{
        reject("O usuário está incorreto ou não é administrador ")
    }
})

verificar.then((x) => {
    console.log(x)
})

