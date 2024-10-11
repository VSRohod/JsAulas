var xhr = new XMLHttpRequest()
console.log(xhr)

xhr.onreadystatechange = function (){
    if(xhr.readyState == 4 && xhr.status == 200){
        alert("DEU CERTO")
        console.log(xhr)
    }else{
        alert("DEU ERRADO")
    }
}

xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1")

xhr.send();

/* readyState guarda o estado atual da requisição
0 - requisição iniciada
1 - estabeleceu requisição com servidor
2 - pedido recebido
3 - processando pedido
4 - solicitação concluida e resposta pronta

https://jsonplaceholder.typicode.com/
https://www.httpstatus.com.br/
*/
