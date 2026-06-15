let botonLogout = document.querySelector('.logout');
let bienvenida = document.querySelector('.bienvenida');

let itemsnavLogout = document.querySelectorAll('.navigation li');
let itemLoginLogout = itemsnavLogout[1];
let itemRegistroLogout = itemsnavLogout[2];

if (botonLogout != null) {

    botonLogout.addEventListener('click', function(e) {
        e.preventDefault();

        localStorage.removeItem('login');

        bienvenida.style.display = 'none';

        itemLoginLogout.style.display = '';
        itemRegistroLogout.style.display = '';

    });

}