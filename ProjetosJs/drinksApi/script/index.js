function pesquisar(procura){
    document.querySelector('#resposta').innerHTML = ``


    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${procura}`).then((response) => {
        return response.json()
    }).then((dados) => { 
        listaDrinks = dados.drinks
        console.log(listaDrinks)
        listaDrinks.forEach(element => {
            console.log(element)
            document.querySelector('#resposta').innerHTML += `
                <img width="200px" src="${element.strDrinkThumb}">
                <h1>${element.strDrink}</h1>
                <p>${element.strInstructions}</p>
            `
    
        });
    })
}
