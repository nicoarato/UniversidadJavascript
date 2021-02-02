import Persona from './Persona.js'

class Cliente extends Persona {

    static cantidadClientes = 0;

    constructor(nombre, apellido, edad) {
        super(nombre, apellido, edad);
        this._fechaRegistro = new Date();
        this._idCliente = ++Cliente.cantidadClientes;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro() {
        return this._fechaRegistro;
    }

    set fechaRegistro(fecha) {
        this._fechaRegistro = fecha;
    }

    toString() {
        return `Id cliente: ${this.idCliente} - ${this.apellido}, ${this.nombre}`;
    }

}

export default Cliente;