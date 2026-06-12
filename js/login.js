
let mail = document.querySelector('.email')
let contraseña = document.querySelector('.password')
let formulario = document.querySelector('.login')


formulario.addEventListener("submit", function (e) {
    

    if (contraseña.value == "") {
        e.preventDefault();
        alert("EL campo no puede estar vacio")
    } else if ((contraseña.value.length < 6)) {
        e.preventDefault();
        alert("La contraseña debe tener al menos 6 caracteres")
    } else if (mail.value == "") {
        e.preventDefault();
        alert("El campo no puede estar vacio")
    } else {
        let datos = {
            email:mail.value,
            contraseñ:contraseña.value
        }
        let datosGuardados = JSON.stringify(datos)
        localStorage.setItem("loginn", datosGuardados)
        this.sumbit()
    }
})
