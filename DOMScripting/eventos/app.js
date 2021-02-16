// let titulo = document.getElementById('titulo').onclick = cambiarTexto;

// function cambiarTexto() {

//     // document.getElementById('titulo').innerHTML = 'Nuevo titulo';
//     document.getElementById('mostrar').innerHTML = 'Nuevo contenido';


// }

function entrar() {
    alert("Entrando a la page");
    let texto = '';

    if (navigator.cookieEnabled) {
        texto = 'Cookies habilitadas'
    } else {
        texto = 'Cookies inhabilitadas'
    }

    document.getElementById('mostrar').innerHTML = texto;
}

function convertir(nombreInput) {
    nombreInput.value = nombreInput.value.toUpperCase();
}

function rojo(titulo) {
    console.log('onmousedown');
    titulo.style.color = 'red';
}

function azul(titulo) {
    console.log('onmouseup');
    titulo.style.color = 'blue';
}

function verde(titulo) {
    console.log('click');
    titulo.style.color = 'green';
}

// function pintar(elemento) {
//     elemento.style.background = 'gray';
// }

// function despintar(elemento) {
//     elemento.style.background = 'white';
// }

function pintar(evento) {
    let componente = evento.target;
    componente.style.background = 'gray';
}

function despintar(evento) {
    let componente = evento.target;
    componente.style.background = 'white';
}

// document.getElementById('nombre').addEventListener('focus', evento => {
//     evento.target.style.background = 'gray';
// });
// document.getElementById('nombre').addEventListener('blur', evento => {
//     evento.target.style.background = 'white';
// });

// document.getElementById('apellido').addEventListener('focus', pintar);
// document.getElementById('apellido').addEventListener('blur', despintar);

let formulario = document.getElementById('formulario');

formulario.addEventListener('focus', evento => {
    evento.target.style.background = 'gray';
}, true);

formulario.addEventListener('blur', evento => {
    evento.target.style.background = 'white';
}, true);