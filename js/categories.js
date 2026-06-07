let categoriesList = document.querySelector('.categoriesList');

fetch('https://dummyjson.com/products/categories')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        for (let i = 0; i < data.length; i++) {

            categoriesList.innerHTML += `
                <li>
                    <a href="./category.html?category=${data[i].slug}">
                        ${data[i].name}</a>
                </li>`;
        }

    })
    .catch(function(error) {
        console.log('El error es: ' + error);
    });
