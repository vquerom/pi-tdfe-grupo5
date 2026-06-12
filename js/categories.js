let categoriesList = document.querySelector('.categoriesList');
let url = 'https://dummyjson.com/products/categories';
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        for (let i = 0; i < data.length; i++) {

            categoriesList.innerHTML += `
                <li>
                    <a href="./category.html?category=${data[i].slug}&title=${data[i].name}">
                        ${data[i].name}</a>
                </li>`;
        }

    })
    .catch(function(error) {
        console.log('El error es: ' + error);
    });
