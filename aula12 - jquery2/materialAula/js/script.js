$("#aumentar").on("click", function(){
    $("#caixa").animate({width: "500px",height: "500px"})
})

$("#diminuir").on("click", function(){
    $("#caixa").animate({width: "300px"}).animate({height : "200px"});
})

$("#direita").on("click", function(){
    $("#caixa").animate({marginLeft: "300px"},{duration: 1000,complete: ()=>{alert("Terminou a animação")}});
})

$("#esquerda").on("click", function(){
    $("#caixa").animate({marginLeft: "0px",marginTop: "20px"});
})

$("#sumir").on("click", function(){
    // $("#caixa").fadeOut(500)
    // $("#caixa").slideUp(500)
    $("#caixa").hide(500)
})

$("#aparecer").on("click", function(){
    // $("#caixa").fadeIn(500)
    // $("#caixa").slideDown(500)
    $("#caixa").show(500)
})

$("#trocar").on("click", function(){
    // $("#caixa").fadeToggle(500)
    $("#caixa").slideToggle(500)
})

// attr - add atributo
$("#desativar").on("click", function(){
    $("#caixaDeTexto").attr("disabled","true")
    $("#caixaDeTexto").css("backgroundColor","red")
})