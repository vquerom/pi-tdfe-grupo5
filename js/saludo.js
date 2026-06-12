

let datosLogin = localStorage.getItem('login');

let itemNav = document.querySelectorAll('.navigation li');
let itemLogin = itemNav[1];
let itemRegistro = itemNav[2];

let header = document.querySelector('header');

if (datosLogin != null) {
    let datos = JSON.parse(datosLogin)
    itemLogin.style.display = 'none';
    itemRegistro.style.display = 'none';

    header.innerHTML += `
        <div class="bienvenida">
            Bienvenido: ${datos.email}
            <a href="#" class="logout">logout</a>
        </div>
    `;

}