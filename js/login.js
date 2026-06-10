let mail = document.querySelector('.email')
let contraseña = document.querySelector('.password')
let formulario = document.querySelector('.login')
let registroz = {
    email: mail,
    contraseña: contra,
    formulario: formz
}



formulario.addEventListener("submit", function (e) {
    e.preventDefault();

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
        let regis = JSON.stringify(registroz)
        localStorage.setItem("loginn", regis)
        this.sumbit()
    }
})
1