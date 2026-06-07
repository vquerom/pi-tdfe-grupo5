let groceriesSection = document.querySelector('.groceries');
let kitchenSection = document.querySelector('.kitchenAccessories');

fetch('https://dummyjson.com/products/category/groceries')
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
        console.log(error);
    });


fetch('https://dummyjson.com/products/category/kitchen-accessories')
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
        console.log(error);
    });