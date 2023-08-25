var resultadoDiv = document.querySelector("#resultado")

$("#calcular").on('click', function(){
    var inputValue = Number($("#tabuadaNumero").val())
    var contador = 1

    resultadoDiv.innerHTML = `<h2>TABUADA DE ${inputValue}</h2>`
    while(contador <= 10){
        resultadoDiv.innerHTML += `${contador} x ${inputValue} = ${contador * inputValue}<br>`
        contador++
    }
})