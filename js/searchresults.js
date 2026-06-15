let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let terminoBuscado = queryStringObj.get('producto');

let resultado = document.querySelector('.NombreResultado');
let searchResults = document.querySelector('.searchResults');

fetch('https://dummyjson.com/products/search?q=' + terminoBuscado)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        if (data.products.length == 0) {
            resultado.innerText = 'No hay resultados para el término: ' + terminoBuscado;
        } else {
            resultado.innerText = 'Resultados de búsqueda para: ' + terminoBuscado;

            for (let i = 0; i < data.products.length; i++) {
                searchResults.innerHTML += `
                    <article>
                        <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
                        <h3>${data.products[i].title}</h3>
                        <p>${data.products[i].description}</p>
                        <p><strong>$${data.products[i].price}</strong></p>
                        <a href="./product.html?id=${data.products[i].id}">Ver Detalle</a>
                    </article>
                `;
            }
        }

    })
    .catch(function(error) {
        console.log(error);
    });