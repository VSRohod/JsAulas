// seletores
const textoDigitado = document.getElementById("textoDigitado")
const buscarPalavra = document.querySelector("#buscarPalavra")
const substituirPalavra = document.getElementById("substituirPalavra")
const trocarBtn = document.getElementById("trocar")
const trocarTodosBtn = document.getElementById("trocarTodos")

// eventos
// eventListener(interação, função)
trocarBtn.addEventListener('click', trocarTexto)
trocarTodosBtn.addEventListener('click', trocarTodosTexto)

// functions
function trocarTexto(){
    let textoDigitadoValor = textoDigitado.value;
    let buscarPalavraValor = buscarPalavra.value;
    let substituirPalavraValor = substituirPalavra.value;

    var textoFormatado = textoDigitadoValor.replace(buscarPalavraValor,substituirPalavraValor);
    textoDigitado.value = textoFormatado;
}

function trocarTodosTexto(){
    let textoDigitadoValor = textoDigitado.value;
    let buscarPalavraValor = buscarPalavra.value;
    let substituirPalavraValor = substituirPalavra.value;

    var textoFormatado = textoDigitadoValor.replaceAll(buscarPalavraValor,substituirPalavraValor);
    textoDigitado.value = textoFormatado;
}