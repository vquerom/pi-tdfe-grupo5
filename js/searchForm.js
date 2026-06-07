let formulario = document.querySelector('.searchForm');
let campoBusqueda = document.querySelector('input');

formulario.addEventListener('submit', function(e){

    if (campoBusqueda.value == "") {
        e.preventDefault();
        alert("El campo no puede estar vacío");
    } else if (campoBusqueda.value.length < 3) {
        e.preventDefault();
        alert("Debe ingresar al menos 3 caracteres");
    }

});