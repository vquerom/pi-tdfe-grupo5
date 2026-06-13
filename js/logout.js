let botonLogout = document.querySelector('.logout');
let bienvenida = document.querySelector('.bienvenida');

let itemsnav = document.querySelectorAll('.navigation li');
let itemLogin = itemsnav[1];
let itemRegistro = itemsnav[2];

if (botonLogout != null) {

    botonLogout.addEventListener('click', function(e) {
        e.preventDefault();

        localStorage.setItem('loginn');

        bienvenida.style.display = 'none';

        itemLogin.style.display = 'flex';
        itemRegistro.style.display = 'flex';
        this.submit()
    });

}