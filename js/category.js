let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let categoryName = queryStringObj.get('category');

let categoryTitle = document.querySelector('.categoryTitle');
let categoryProducts = document.querySelector('.categoryProducts');

categoryTitle.innerText = categoryName;

fetch('https://dummyjson.com/products/category/' + categoryName)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        console.log(data);

        for (let i = 0; i < data.products.length; i++) {

            categoryProducts.innerHTML += `
                <article>
                    <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}" class="imageHome">
                    <h3>${data.products[i].title}</h3>
                    <p>${data.products[i].description}</p>
                    <p><strong>$${data.products[i].price}</strong></p>
                    <p>
                        <a href="./product.html?id=${data.products[i].id}">
                            Ver Detalle
                        </a>
                    </p>
                </article>`;

        }

    })
    .catch(function(error) {
        console.log(error);
    });