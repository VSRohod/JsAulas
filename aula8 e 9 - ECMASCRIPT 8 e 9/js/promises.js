// criação de promises
const primeiroPromise = new Promise((resolve, reject) => {
    var nome = "Alice";

    if(nome === "Victor"){
        resolve("O usuário foi encontrado!");
    }else{
        reject("O usuário não foi encontrado");
    }
});

primeiroPromise.then((data) => {
    console.log(data)
})