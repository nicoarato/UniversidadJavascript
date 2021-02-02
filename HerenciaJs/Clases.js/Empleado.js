import Persona from './Persona.js';

class Empleado extends Persona {

    static cantidadEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.cantidadEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this.sueldo;
    }

    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    toString() {
        return `Id Empleado: ${this._idEmpleado} - ${this.apellido}, ${this.nombre}`;
    }
}

export default Empleado;