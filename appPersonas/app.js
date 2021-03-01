import Persona from './js/Persona.js';

const personas = [
    new Persona('Perez', 'Juan'),
    new Persona('Lara', 'Julia')
];

window.onload = mostrarPersonas;

function mostrarPersonas() {
    console.log('Mostrando')
    let texto = '';
    for (let persona of personas) {

        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
        document.getElementById('personas').innerHTML = texto;
    }
}

const boton = document.getElementById('boton-1');
boton.onclick = agregarPersona;

function agregarPersona() {
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if (nombre.value != '' && apellido.value != '') {
        const persona = new Persona(apellido.value, nombre.value)
        personas.push(persona);
        mostrarPersonas();

    } else {
        console.log('No hay información...')
    }
}