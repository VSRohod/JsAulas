var livros = [
    ['Harry Potter', "images/livros/percy2.jpg"],
    ['Divergente', "images/livros/percy5.jpg"],
    ['Lego', "images/livros/percy3.jpg"],
    ['Teste', "images/livros/percy1.jpg"],
    ['Go', "images/livros/percy4.jpg"]
]

livros.forEach((cadaLivro)=> {
    console.log(cadaLivro)

    document.getElementById("catalogo").innerHTML += `
        <div class="books">
            <img src="${cadaLivro[1]}" alt="" class="booksImg">
            <div class="booksDesc">
                <h2 class="booksName">${cadaLivro[0]}</h2>
                <p class="booksSinopse">
                    O adolescente Percy Jackson descobre que os deuses gregos e as criaturas mitológicas são reais. Ele é filho de uma divindade e logo entra para um acampamento de treinamento para semideuses. Enquanto tenta se adaptar a seus novos poderes e amigos, ele descobre que o Raio-Mestre do poderoso Zeus foi roubado e ele é o principal suspeito. Assim, ele tenta solucionar o mistério junto com seus novos colegas, Grover e Annabeth.
                </p>
            </div>
        </div>
    `
})