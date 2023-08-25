var button = $("#mudaTema")
var textoArea = $("#textoArea")

button.on("click", function(){
    // hasClass = tem essa classe?
    if(button.hasClass("temaClaro")){
        button.removeClass("temaClaro")
        button.addClass("temaEscuro")
        textoArea.removeClass("temaClaro")
        textoArea.addClass("temaEscuro")
    }else{
        button.removeClass("temaEscuro")
        button.addClass("temaClaro")
        textoArea.removeClass("temaEscuro")
        textoArea.addClass("temaClaro")
    }
})