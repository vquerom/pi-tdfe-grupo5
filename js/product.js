let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let productId = queryStringObj.get('id');



let productName = document.querySelector('.productName');
let productBrand = document.querySelector('.productBrand');
let productDescription = document.querySelector('.productDescription');
let productPrice = document.querySelector('.productPrice');
let productImage = document.querySelector('.productImage');
let productCategory = document.querySelector('.productCategory');
let productStock = document.querySelector('.productStock');
let productTags = document.querySelector('.tags');






fetch('https://dummyjson.com/products/' + productId)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        console.log(data);

        productName.innerText = data.title;
        if (data.brand == undefined) {
        productBrand.innerText = '';
        } else {
        productBrand.innerText = data.brand;
        }
        productDescription.innerText = data.description;
        productPrice.innerText = '$' + data.price;
        productImage.src = data.thumbnail;
        productImage.alt = data.title;
        productCategory.innerText = data.category;
        productCategory.href = './category.html?category=' + data.category + '&title=' + data.category;
        productStock.innerText = data.stock + ' unidades disponibles';

        for (let i = 0; i < data.tags.length && i < 3; i++) {

            productTags.innerHTML += `
                <li>
                    <a href="./category.html?category=${data.category}&title=${data.category}">
                        #${data.tags[i]}
                    </a>
                </li>
            `

        }

    })
    .catch(function(error) {
    console.log('El error es: ' + error);
});