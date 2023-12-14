// API é a sigla em inglês para Application Programming Interface,
//ouinterface de programação de aplicações. 
//As interfaces de programação de aplicativos (APIs)
//são conjuntos de ferramentas, 
//definições e protocolos para a criação de aplicações de software. 
//APIs conectam soluções e serviços, 
//sem a necessidade de saber como esses elementos foram implementados.

var consultarBtn = document.getElementById("consultar");

consultarBtn.addEventListener("click", consulta)

function consulta(){
    let cep = document.getElementById("cep").value;
    if(cep.length < 8){
        alert("Por favor insira as informações corretamente!")
    }else{
        //fazer primeiro esse depois implementar if
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



