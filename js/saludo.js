

let emailUsuario = localStorage.getItem('loginn');

let itemnav = document.querySelectorAll('.navigation li');
let itemLogin = itemnav[1];
let itemRegistro = itemnav[2];

let header = document.querySelector('header');

if (emailUsuario != null) {

    itemLogin.style.display = 'none';
    itemRegistro.style.display = 'none';

    header.innerHTML += `
        <div class="bienvenida">
            Bienvenido: ${emailUsuario}
            <a href="#" class="logout">logout</a>
        </div>
    `;

}