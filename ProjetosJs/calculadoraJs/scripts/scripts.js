var num1 = null
var num2 = null
var resultado = null
var operador = null

function verificaNum(num){
    if(num1 == null){
        num1 = num
    }else if(num2 == null){
        num2 = num
    }else{
        alert("Escolha o operador")
    }
}

function resetar(){
    num1 = null
    num2 = null
    operador = null
    resultado = null
}

function aviso(){
    alert(`Operacao:  ${num1} ${operador} ${num2}`)
}


function adicionar(p){
    switch(p){
        case "1":
            verificaNum(1)
            aviso()
        break
        case "2":
            verificaNum(2)
            aviso()
        break
        case "3":
            verificaNum(3)
            aviso()
        break
        case "4":
            verificaNum(4)
            aviso()
        break
        case "5":
            verificaNum(5)
            aviso()
        break
        case "6":
            verificaNum(6)
            aviso()
        break
        case "7":
            verificaNum(7)
            aviso()
        break
        case "8":
            verificaNum(8)
            aviso()
        break
        case "9":
            verificaNum(9)
            aviso()
        break
        case "0":
            verificaNum(0)
            aviso()
        break
        case "+":
            operador = p
            aviso()
        break
        case "-":
            operador = p
            aviso()
        break
        case "*":
            operador = p
            aviso()
        break
        case "/":
            operador = p
            aviso()
        break
    }
}

function calcular(){
    switch(operador){
        case "+":
            resultado = num1 + num2
            alert(resultado)
            resetar()
        break
        case "-":
            resultado = num1 - num2
            alert(resultado)
            resetar()
        break
        case "*":
            resultado = num1 * num2
            alert(resultado)
            resetar()
        break
        case "/":
            resultado = num1 / num2
            alert(resultado)
            resetar()
        break
        default:
            alert("Tecle a operação desejada!")
        break
    }
}