let mail = document.querySelector('.email');
let password = document.querySelector('.password');
let form = document.querySelector('.login');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    if (mail.value == "") {
        alert("El campo email no puede estar vacio");
    } else if (password.value == "") {
        alert("El campo contraseña no puede estar vacio");
    } else if (password.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
    } else {
        let datos = {
            email: mail.value,
            password: password.value
        };

        let datosGuardados = JSON.stringify(datos);
        localStorage.setItem("login", datosGuardados);

        this.submit();
    }
});