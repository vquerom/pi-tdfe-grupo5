let mail = document.querySelector('.email');
let password = document.querySelector('.password');
let password2 = document.querySelector('.password2');
let form = document.querySelector('.reg');
let checkbox = document.querySelector('.checkbox');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (mail.value == "") {
        alert("El campo email no puede estar vacio");
    } else if (password.value == "") {
        alert("El campo contraseña no puede estar vacio");
    } else if (password.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
    } else if (password.value != password2.value) {
        alert("La contraseñas no coinciden");
    } else if (checkbox.checked == false) {
        alert("Debe aceptar los terminos y condiciones");
    
    } else {
        let datos = {
            email: mail.value
            
        };

        let datosGuardados = JSON.stringify(datos);
        localStorage.setItem("login", datosGuardados);

        this.submit();
    }

});