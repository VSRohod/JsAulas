$("#aumentar").on("click", function(){
    $("#caixa").animate({width : "500px",height : "500px",borderRadius : "0%"})
})

$("#diminuir").on("click", function(){
    $("#caixa").animate({width : "300px"}).animate({height : "300px"}).animate({borderRadius : "100%"})
})

$("#direita").on("click", function(){
    $("#caixa").animate({marginLeft : "500px", rotate : "360deg"},{duration : 1000,complete : ()=>{alert("Me contrata :)")} })
})

$("#esquerda").on("click", function(){
    $("#caixa").animate({marginLeft : "0px", rotate : "-360deg",marginTop : "200px"})
})

$("#sumir").on("click", function(){
    // $("#caixa").fadeOut(500)
    // $("#caixa").slideUp(2000)
    $("#caixa").hide(2000)
})

$("#aparecer").on("click", function(){
    // $("#caixa").fadeIn(500)
    // $("#caixa").slideDown(100)
    $("#caixa").show(2000)
})

$("#trocar").on("click", function(){
    // $("#caixa").fadeToggle(500)
    $("#caixa").slideToggle(500)
})

$("#desativar").on("click", function(){
    $("#caixaDeTexto").attr("disabled","true")
    $("#caixaDeTexto").attr("placeholder","Esse sujeito está desativado!")
    $("#caixaDeTexto").attr("value","Esse sujeito está desativado!")
    $("#caixaDeTexto").css("backgroundColor","red")
    $("#caixaDeTexto").css("color","white")
    $("#caixaDeTexto").css("border","none")
})
