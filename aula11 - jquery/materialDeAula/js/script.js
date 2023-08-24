// jQuery("." ou "#") - seletor
// jQuery = $ (versão resumida)
var textoPagina = $("#textoPagina").text();
// text() = apenas lista o valor
// text("elemento") = sobrescreve o valor
var usuario = "Victor"; 
var usuarioUn = undefined;
// mandar um valor vazio ele não sobrescreve
var usuarioHtml = $("#nomeUsuario").text(usuario);
console.log(textoPagina);

// split
var textoPaginaConta  = textoPagina.split(" ").length;

// contagem dinamica
var areaTexto = $("#areaTexto");
// on = addEventListener
areaTexto.on("input", function(){
    var areaTextoValor = areaTexto.val()
    var areaTextoPalavras = areaTextoValor.split(/\S+/).length -1;
    $("#numPalavras").text(areaTextoPalavras);

    var areaTextoCaracteres = areaTextoValor.length;
    $("#numCaracteres").text(areaTextoCaracteres);
});

areaTexto.on("click", function(){
    areaTexto.removeClass("temaLight");
    areaTexto.addClass("temaDark");
    // areaTexto.toggleClass("temaDark");
})

areaTexto.on("focusout", function(){
    areaTexto.removeClass("temaDark");
    areaTexto.addClass("temaLight");
    // areaTexto.toggleClass("temaLight");
})



