// let cabecera = document.getElementById('cabecera');

// console.log(cabecera.innerHTML)

// let parrafo = document.getElementById('parrafo').innerHTML;

// console.log(`Valor del párrafo: ${parrafo}`)


// let parrafos = document.getElementsByTagName('h1');
// let elementos = document.getElementsByClassName('azul');
let elementos = document.querySelectorAll('p.azul');

console.log(`numero de elementos: ${elementos.length}`);

// for (let i = 0; i < elementos.length; i++) {
//     console.log(elementos[i].innerHTML)
// }

for (let elemento of elementos) {
    console.log(elemento.innerHTML)
}