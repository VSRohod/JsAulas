var consultarBtn = document.getElementById("consultar");

consultarBtn.addEventListener("click", consulta)

function consulta(){
    let cep = document.getElementById("cep").value;
    if(cep.lenght > 8){
        alert("Por favor insira as informações corretamente!")
    }else{
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(i=>{
            return i.json()
        }).then(corpo => {
            let resposta = document.getElementById("resposta");
            console.log(corpo)
            resposta.innerHTML = `
            Informações sobre o cep!<br>
            ${corpo.bairro}<br>
            ${corpo.cep}<br>
            `;
        })
    }
}



