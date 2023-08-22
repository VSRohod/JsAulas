// sintaxe
function sujeitoDemorado(){
    return new Promise((resolve) =>{
        // setTimeout trabalha o tempo para executar
        setTimeout(()=>{
            console.log("Espera concluida");
            // pois a promessa exige que ela seja rejeitada ou comprida
            resolve()
        },2000);
    });
}

async function carregando(){
    console.log("Iniciou");
    await sujeitoDemorado();
    console.log("Terminou");
}

carregando();