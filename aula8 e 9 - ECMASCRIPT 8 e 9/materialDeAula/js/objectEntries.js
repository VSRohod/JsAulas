const cursos = {
    HTML : 45,
    CSS : 80,
    JS : 105,
    BOOTSTRAP : 40
}
// cursos => 
// mesma coisa
// function(cursos){
// 
// }

// map - aplica função para cada elemento de um array ou objeto

const cursosKey = Object.keys(cursos);
document.querySelector("#keysDiv").innerHTML = "Keys, apresenta o nome dos atributos:<br>"+`<ul>${cursosKey.map(cursos => `<li>${cursos}</li>`)}</ul>`;

const cursosEntries = Object.entries(cursos);
document.querySelector("#entriesDiv").innerHTML = "Entries, apresenta o nome dos atributos e seus valores:<br>"+cursosEntries;

const mapVar = ["Kiwi","Manga","Pera","Morango"];
const resultadoMap = mapVar.map((x) => "<li>Fruta : "+x+"</li>");
document.getElementById("map").innerHTML = "O map, faz uma função para cada elemento de um array ou objeto"+"<ul>"+resultadoMap+"</ul>";




