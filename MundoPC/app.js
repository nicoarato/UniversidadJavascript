import Orden from './clases/Orden.js';
import Computadora from './clases/Computadora.js';
import Raton from './clases/Raton.js';
import Teclado from './clases/Teclado.js';
import Monitor from './clases/Monitor.js';

let monitor1 = new Monitor('LG', '22"');
let monitor2 = new Monitor('Samsung', '19"');

let teclado1 = new Teclado('Inalambrico', 'Kawama');
let teclado2 = new Teclado('Usb', 'Genio');

let raton1 = new Raton('Inalambrico', 'Trust')
let raton2 = new Raton('Usb', 'Genio')


let computadora1 = new Computadora('Pc Gamer 1', monitor1, teclado1, raton1);
let computadora2 = new Computadora('Pc Gamer 2', monitor2, teclado2, raton2);
let computadora3 = new Computadora('Pc Gamer 3', monitor1, teclado2, raton1);

let orden1 = new Orden();

orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora3);


console.log(orden1.mostrarOrden());

let orden2 = new Orden();

orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora1);

console.log(orden2.mostrarOrden());