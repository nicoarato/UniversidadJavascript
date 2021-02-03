import DispositivoEntrada from '../clases/DispositivoEntrada.js';

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }


    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `idTeclado: ${this.idTeclado} - Marca: ${this.marca}`;
    }
}

export default Teclado;