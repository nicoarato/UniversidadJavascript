import Persona from './Clases.js/Persona.js';
import Empleado from './Clases.js/Empleado.js';
import Cliente from './Clases.js/Cliente.js';


let persona1 = new Persona('Maria', 'Sosa', 35);

console.log(persona1.toString());

let empleado1 = new Empleado('Sonia', 'Beltran', 2000);

console.log(empleado1.toString());

let cliente1 = new Cliente('Fernando', 'Coto', 45);

console.log(cliente1.toString());
console.log(Persona.contadorPersonas);