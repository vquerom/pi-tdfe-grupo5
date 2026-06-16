let datosLogin = localStorage.getItem('login');

let itemNav = document.querySelectorAll('.navigation li');
let itemLogin = itemNav[1];
let itemRegistro = itemNav[2];

let navigation = document.querySelector('.navigation');

if (datosLogin != null) {
    let datos = JSON.parse(datosLogin);

    itemLogin.style.display = 'none';
    itemRegistro.style.display = 'none';

    navigation.innerHTML += `
        <li class="bienvenida">
            Bienvenido: ${datos.email}
            <a href="#" class="logout">logout</a>
        </li>
    `;

}