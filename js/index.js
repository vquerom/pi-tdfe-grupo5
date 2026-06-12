let groceriesSection = document.querySelector('.groceries');
let kitchenSection = document.querySelector('.kitchenAccessories');

let urlGroceries = 'https://dummyjson.com/products/category/groceries';
fetch(urlGroceries)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        for (let i = 0; i < 10; i++) {

            groceriesSection.innerHTML += `
                <article>
                    <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}" class="imageHome">
                    <h3>${data.products[i].title}</h3>
                    <p>${data.products[i].description}</p>
                    <p><strong>$${data.products[i].price}</strong></p>
                    <p><a href="./product.html?id=${data.products[i].id}">Ver Detalle</a></p>
                </article>
            `;
        }

    })
    .catch(function(error) {
    console.log('El error es: ' + error);
});

let urlAccesories = 'https://dummyjson.com/products/category/kitchen-accessories';

fetch(urlAccesories)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        for (let i = 0; i < 10; i++) {

            kitchenSection.innerHTML += `
                <article>
                    <img src="${data.products[i].thumbnail}" alt="${data.products[i].title}" class="imageHome">
                    <h3>${data.products[i].title}</h3>
                    <p>${data.products[i].description}</p>
                    <p><strong>$${data.products[i].price}</strong></p>
                    <p><a href="./product.html?id=${data.products[i].id}">Ver Detalle</a></p>
                </article>
            `;
        }

    })
    .catch(function(error) {
    console.log('El error es: ' + error);
});