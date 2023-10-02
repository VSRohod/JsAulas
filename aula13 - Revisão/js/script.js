// const categoriaCelular = document.getElementById("celular")
// const categoriaCelular = document.querySelector("#celular")
const categoriaCelular = $("#celular")
const categoriaComputador = $("#computador")
const categoriaFelinos = $("#felinos")
// descrições
const descricaoCelular = $("#descricaoCelular")
const descricaoComputador = $("#descricaoComputador")
const descricaoFelinos = $("#descricaoFelinos")

// eventos
// categoriaCelular.addEventListener('click', verInfoCelular)

// function verInfoCelular(){

// }

categoriaCelular.on('click', function(){
    descricaoCelular.slideToggle(500)
    descricaoComputador.slideUp(1)
    descricaoFelinos.slideUp(1)
})

categoriaComputador.on('click', function(){
    descricaoComputador.slideToggle(500)
    descricaoCelular.slideUp(1)
    descricaoFelinos.slideUp(1)
})

categoriaFelinos.on('click', function(){
    descricaoFelinos.slideToggle(500)
    descricaoCelular.slideUp(1)
    descricaoComputador.slideUp(1)
})